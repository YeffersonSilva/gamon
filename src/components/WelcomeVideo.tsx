import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Heart,
  MessageCircle,
  Share2,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Interfaz para los comentarios
interface Comment {
  id: number;
  username: string;
  text: string;
  likes: number;
  timeAgo: string;
  isLiked?: boolean;
}

const WelcomeVideo = () => {
  const { t, currentLanguage } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Comentarios ficticios
  const comments: Comment[] = [
    {
      id: 1,
      username: "TechExpert",
      text: "¡Increíble solución! Gamon transformó completamente nuestro sistema de gestión 🚀",
      likes: 1234,
      timeAgo: "2h",
    },
    {
      id: 2,
      username: "InnovationLover",
      text: "La IA que implementaron en nuestro proyecto superó todas las expectativas 🤖✨",
      likes: 856,
      timeAgo: "4h",
    },
    {
      id: 3,
      username: "DigitalTransformer",
      text: "El equipo de Gamon es excepcional. Resultados sorprendentes en tiempo récord 💯",
      likes: 567,
      timeAgo: "5h",
    },
    {
      id: 4,
      username: "StartupFounder",
      text: "La mejor inversión que hemos hecho. El ROI fue inmediato 📈",
      likes: 432,
      timeAgo: "6h",
    },
    {
      id: 5,
      username: "TechCEO",
      text: "Profesionalismo y tecnología de punta. ¡Altamente recomendados! 👏",
      likes: 789,
      timeAgo: "1d",
    },
  ];

  // Obtener la URL del video según el idioma
  const getVideoUrl = () => `/video/${currentLanguage}.mp4`;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // Activar el sonido al reproducir
        setIsMuted(false);
        if (videoRef.current) {
          videoRef.current.muted = false;
        }

        // Intentar reproducir y manejar posibles errores
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setVideoError(false);
            })
            .catch((error) => {
              console.error("Error al reproducir el video:", error);
              setVideoError(true);
              setIsPlaying(false);
            });
        }
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  // Reiniciar el video cuando cambie el idioma
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      setIsPlaying(false);
      setVideoError(false);
    }
  }, [currentLanguage]);

  // Verificar si el video está cargado correctamente
  useEffect(() => {
    const video = videoRef.current;

    const handleCanPlay = () => {
      setVideoError(false);
    };

    const handleError = (e: Event) => {
      console.error("Error en el video:", e);
      setVideoError(true);
    };

    if (video) {
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("error", handleError);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
      };
    }
  }, []);

  return (
    <section id="welcome-video" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("welcomeVideo.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("welcomeVideo.subtitle")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-[345px] mx-auto relative rounded-2xl overflow-hidden shadow-xl bg-black border border-white/10"
        >
          {/* TikTok-style header */}
          <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/60 to-transparent">
            <div className="text-white text-sm font-medium flex items-center gap-2">
              <span className="bg-primary px-2 py-0.5 rounded-full text-xs">
                Gamon
              </span>
              {t("welcomeVideo.companyIntro")}
            </div>
          </div>

          {/* Video container with TikTok aspect ratio (9:16) */}
          <div className="relative aspect-[9/16] bg-black">
            {videoError ? (
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
                <p>
                  {t("welcomeVideo.unsupported")}
                  <br />
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.load();
                        setVideoError(false);
                      }
                    }}
                    className="mt-2 px-4 py-2 bg-primary rounded-md text-sm"
                  >
                    Reintentar
                  </button>
                </p>
              </div>
            ) : null}

            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/video/poster.jpg"
              muted={isMuted}
              playsInline
              preload="auto"
              loop
              onEnded={() => videoRef.current?.play()}
            >
              <source src={getVideoUrl()} type="video/mp4" />
              {t("welcomeVideo.unsupported")}
            </video>

            {/* Play/Pause overlay */}
            <div
              className="absolute inset-0 z-10 cursor-pointer"
              onClick={togglePlay}
            >
              {!isPlaying && !videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-16 h-16 bg-primary/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-glow transition-transform hover:scale-110">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Comentarios overlay */}
            <AnimatePresence>
              {showComments && (
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25 }}
                  className="absolute inset-0 z-30 bg-black/95 text-white overflow-y-auto"
                >
                  <div className="sticky top-0 bg-black/90 backdrop-blur-sm p-4 flex justify-between items-center border-b border-white/10">
                    <h3 className="text-lg font-semibold">
                      {comments.length} comentarios
                    </h3>
                    <button
                      onClick={() => setShowComments(false)}
                      className="p-2 hover:bg-white/10 rounded-full"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-4 space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-sm font-bold">
                          {comment.username[0]}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">
                              {comment.username}
                            </span>
                            <span className="text-xs text-gray-400">
                              {comment.timeAgo}
                            </span>
                          </div>
                          <p className="text-sm mt-1">{comment.text}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                            <button className="flex items-center gap-1 hover:text-white">
                              <Heart className="w-4 h-4" />
                              {comment.likes}
                            </button>
                            <button className="hover:text-white">
                              Responder
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* TikTok-style vertical action buttons */}
            <div className="absolute right-4 bottom-24 z-20 flex flex-col items-center gap-6">
              <button
                onClick={toggleLike}
                className="flex flex-col items-center"
                aria-label="Like"
              >
                <div
                  className={`w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-colors ${
                    isLiked ? "text-red-500" : "text-white"
                  }`}
                >
                  <Heart
                    className="w-5 h-5"
                    fill={isLiked ? "currentColor" : "none"}
                  />
                </div>
                <span className="text-white text-xs mt-1">123K</span>
              </button>

              <button
                className="flex flex-col items-center"
                onClick={() => setShowComments(true)}
              >
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-white text-xs mt-1">
                  {comments.length}
                </span>
              </button>

              <button className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
                  <Share2 className="w-5 h-5" />
                </div>
                <span className="text-white text-xs mt-1">
                  {t("welcomeVideo.share")}
                </span>
              </button>

              <button
                onClick={toggleMute}
                className="flex flex-col items-center"
                aria-label={
                  isMuted ? t("welcomeVideo.unmute") : t("welcomeVideo.mute")
                }
              >
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </div>
              </button>
            </div>

            {/* Caption area at bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-sm">
                {t("welcomeVideo.companyIntro")} #technology #innovation
                #software
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeVideo;
