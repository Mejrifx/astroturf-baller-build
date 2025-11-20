import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { cn } from "@/lib/utils";

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
  const [isMuted, setIsMuted] = useState(true);
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

    const onPause = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);

    video.addEventListener('pause', onPause);
    video.addEventListener('play', onPlay);

    return () => {
      video.removeEventListener('pause', onPause);
      video.removeEventListener('play', onPlay);
    };
  }, []);

  return (
    <div 
      className={cn(
        "relative group rounded-2xl overflow-hidden bg-black aspect-[9/16] md:aspect-[3/4] shadow-xl transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-2xl border border-white/10",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
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
        preload="metadata"
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
  return (
    <section id="gallery" className="py-24 bg-pitch relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime/5 via-pitch to-pitch opacity-50" />
      <div className="absolute inset-0 grass-texture opacity-5 mix-blend-overlay" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See Us in Action
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Watch our training sessions, drills, and player development highlights.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((src, index) => (
            <VideoCard key={index} src={src} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;

