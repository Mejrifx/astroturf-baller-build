import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

gsap.registerPlugin(ScrollTrigger);

const videos = [
  "/BAB-Vid1.mp4",
  "/BAB-Vid2.mp4",
  "/BAB-Vid3.mp4",
  "/BAB-Vid4.mp4",
  "/BAB-Vid5.mp4",
  "/BAB-Vid6.mp4",
  "/BAB-Vid7.mp4",
  "/BAB-Vid8.mp4",
  "/BAB-Vid9.mp4",
  "/BAB-Vid10.mp4",
  "/BAB-Vid11.mp4",
];

const VideoCard = ({ src, index }: { src: string; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [posterUrl, setPosterUrl] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Pause all other videos
        document.querySelectorAll('video').forEach((vid) => {
          if (vid !== videoRef.current) vid.pause();
        });
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    try {
      if (!document.fullscreenElement) {
        // Enter fullscreen
        if (video.requestFullscreen) {
          video.requestFullscreen().then(() => setIsFullscreen(true));
        } else if ((video as any).webkitRequestFullscreen) {
          (video as any).webkitRequestFullscreen();
          setIsFullscreen(true);
        } else if ((video as any).mozRequestFullScreen) {
          (video as any).mozRequestFullScreen();
          setIsFullscreen(true);
        } else if ((video as any).msRequestFullscreen) {
          (video as any).msRequestFullscreen();
          setIsFullscreen(true);
        }
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen().then(() => setIsFullscreen(false));
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
          setIsFullscreen(false);
        } else if ((document as any).mozCancelFullScreen) {
          (document as any).mozCancelFullScreen();
          setIsFullscreen(false);
        } else if ((document as any).msExitFullscreen) {
          (document as any).msExitFullscreen();
          setIsFullscreen(false);
        }
      }
    } catch (error) {
      console.warn('Fullscreen error:', error);
    }
  };

  // Capture first frame as poster image using Intersection Observer
  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const captureFrame = () => {
      try {
        if (video.videoWidth === 0 || video.videoHeight === 0) return;
        
        // Set canvas dimensions to match video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Draw video frame to canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Convert canvas to data URL and use as poster
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        setPosterUrl(dataUrl);
      } catch (error) {
        console.warn('Failed to capture video frame:', error);
      }
    };

    const attemptFrameCapture = async () => {
      if (video.readyState < 2) return;
      
      try {
        // On mobile, try to trigger frame decoding by briefly playing
        // This is a workaround for mobile browsers that don't decode frames until play
        const tryMobileDecode = async () => {
          try {
            // Temporarily mute during frame capture to avoid unwanted audio
            const originalMutedState = video.muted;
            video.muted = true;
            
            // Try to play and immediately pause to trigger frame decode
            const playPromise = video.play();
            if (playPromise !== undefined) {
              await playPromise;
              // Immediately pause
              video.pause();
              video.currentTime = 0.1;
              
              // Restore original muted state
              video.muted = originalMutedState;
              
              // Wait a bit for frame to render
              setTimeout(() => {
                if (video.videoWidth > 0 && video.videoHeight > 0) {
                  captureFrame();
                }
              }, 150);
            } else {
              // Restore if play failed
              video.muted = originalMutedState;
            }
          } catch (e) {
            // Autoplay blocked, fall back to seek method
            video.currentTime = 0.1;
            const onSeeked = () => {
              setTimeout(() => {
                if (video.videoWidth > 0 && video.videoHeight > 0) {
                  captureFrame();
                }
              }, 200);
              video.removeEventListener('seeked', onSeeked);
            };
            video.addEventListener('seeked', onSeeked, { once: true });
          }
        };

        // Try seek first (faster, works on desktop)
        video.currentTime = 0.1;
        const onSeeked = () => {
          setTimeout(() => {
            if (video.videoWidth > 0 && video.videoHeight > 0) {
              captureFrame();
            } else {
              // If seek didn't work, try mobile decode method
              tryMobileDecode();
            }
          }, 100);
          video.removeEventListener('seeked', onSeeked);
        };
        video.addEventListener('seeked', onSeeked, { once: true });
        
        // Fallback timeout
        setTimeout(() => {
          if (!posterUrl && video.videoWidth > 0 && video.videoHeight > 0) {
            captureFrame();
          } else if (!posterUrl) {
            tryMobileDecode();
          }
        }, 500);
      } catch (error) {
        console.warn('Frame capture attempt failed:', error);
      }
    };

    // Set initial muted state based on component state
    video.muted = isMuted;
    video.playsInline = true;
    
    // Use Intersection Observer to load video when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is visible, try to load and capture frame
            video.load();
            
            const tryCapture = () => {
              if (video.readyState >= 2) {
                attemptFrameCapture();
              } else {
                // Wait for video to be ready
                const onCanPlay = () => {
                  attemptFrameCapture();
                  video.removeEventListener('canplay', onCanPlay);
                };
                video.addEventListener('canplay', onCanPlay, { once: true });
              }
            };

            // Try multiple events
            video.addEventListener('loadedmetadata', () => {
              video.currentTime = 0.1;
            }, { once: true });

            video.addEventListener('loadeddata', tryCapture, { once: true });
            video.addEventListener('canplay', tryCapture, { once: true });
            video.addEventListener('canplaythrough', tryCapture, { once: true });
          }
        });
      },
      { rootMargin: '50px' } // Start loading slightly before visible
    );

    observer.observe(video);

    const onPause = () => setIsPlaying(false);
    const onPlay = () => {
      setIsPlaying(true);
    };

    video.addEventListener('pause', onPause);
    video.addEventListener('play', onPlay);

    // Sync muted state when isMuted changes
    const syncMutedState = () => {
      if (video.muted !== isMuted) {
        video.muted = isMuted;
      }
    };
    syncMutedState();

    return () => {
      observer.disconnect();
      video.removeEventListener('pause', onPause);
      video.removeEventListener('play', onPlay);
    };
  }, [posterUrl, isMuted]);

  return (
    <div 
      className={cn(
        "relative group rounded-2xl overflow-hidden bg-black aspect-[9/16] shadow-xl transition-all duration-300 h-full",
        "hover:shadow-2xl border border-white/10",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePlay}
    >
      {/* Hidden canvas for capturing frames */}
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Poster image overlay */}
      {posterUrl && !isPlaying && (
        <img
          src={posterUrl}
          alt="Video preview"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
      
      <video
        ref={videoRef}
        src={src}
        className={cn(
          "w-full h-full object-cover cursor-pointer relative z-10 transition-opacity duration-300",
          posterUrl && !isPlaying ? "opacity-0" : "opacity-100"
        )}
        playsInline
        loop
        muted={isMuted}
        preload="metadata"
        poster={posterUrl || undefined}
        onLoadedData={() => {
          // Try to show video frame on mobile
          if (videoRef.current && !isPlaying) {
            videoRef.current.currentTime = 0.1;
          }
        }}
      />
      
      {/* Overlay Gradient */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 transition-opacity duration-300 pointer-events-none",
        isPlaying ? "opacity-0" : "opacity-100"
      )} />

      {/* Play Button Overlay */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none",
        isPlaying ? "opacity-0 scale-110" : "opacity-100 scale-100"
      )}>
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Play className="w-6 h-6 text-white fill-white translate-x-0.5" />
        </div>
      </div>

      {/* Controls */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300",
        isPlaying || isHovered ? "opacity-100" : "opacity-0"
      )}>
        <button 
          onClick={toggleMute}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors z-20"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
        </button>

        <button 
          onClick={toggleFullscreen}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors z-20"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? <Minimize className="w-4 h-4 text-white" /> : <Maximize className="w-4 h-4 text-white" />}
        </button>
      </div>
    </div>
  );
};

const VideoGallery = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Carousel animation
    if (carouselRef.current) {
      gsap.fromTo(
        carouselRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="gallery" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 grass-texture" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 drop-shadow-lg">
            See Us in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our training sessions, drills, and player development highlights.
          </p>
        </div>

        {/* Video Carousel */}
        <div ref={carouselRef} className="w-full max-w-7xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {videos.map((src, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
                    <VideoCard src={src} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-background/90 border-border text-foreground hover:bg-background hover:text-foreground -left-12 h-12 w-12 shadow-lg" />
            <CarouselNext className="bg-background/90 border-border text-foreground hover:bg-background hover:text-foreground -right-12 h-12 w-12 shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;

