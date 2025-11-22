import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set initial muted state
    video.muted = isMuted;

    // Load first frame for preview (fixes black screen on mobile)
    const loadFirstFrame = () => {
      if (video.readyState >= 2) { // HAVE_CURRENT_DATA
        video.currentTime = 0.1; // Seek to 0.1s to load first frame
        video.pause(); // Ensure it stays paused
      }
    };

    // Try to load first frame immediately if metadata is already loaded
    if (video.readyState >= 2) {
      loadFirstFrame();
    } else {
      // Wait for metadata to load
      video.addEventListener('loadedmetadata', loadFirstFrame, { once: true });
    }

    // Also try on loadeddata event as fallback
    video.addEventListener('loadeddata', () => {
      if (!isPlaying) {
        video.currentTime = 0.1;
        video.pause();
      }
    }, { once: true });

    const onPause = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);

    video.addEventListener('pause', onPause);
    video.addEventListener('play', onPlay);

    return () => {
      video.removeEventListener('pause', onPause);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('loadedmetadata', loadFirstFrame);
    };
  }, [isMuted, isPlaying]);

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
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover cursor-pointer"
        playsInline
        loop
        muted={isMuted}
        preload="auto"
        onLoadedMetadata={(e) => {
          // Force load first frame for preview
          const video = e.currentTarget;
          if (video.readyState >= 2 && video.paused) {
            video.currentTime = 0.1;
            video.pause();
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
          onClick={(e) => { e.stopPropagation(); togglePlay(); }}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
        </button>

        <button 
          onClick={toggleMute}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
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

