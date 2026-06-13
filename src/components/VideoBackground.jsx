"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const VIDEO_ID = "2dEWPwVaUqM";
const POSTER_URL = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;

function subscribeReducedMotion(callback) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  const handler = () => callback();
  query.addEventListener("change", handler);
  return () => query.removeEventListener("change", handler);
}

function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function VideoBackground() {
  const [canPlay, setCanPlay] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fallback: hide poster after 3s even if events don't fire
  useEffect(() => {
    if (!mounted) return;
    const timer = setTimeout(() => setCanPlay(true), 3000);
    return () => clearTimeout(timer);
  }, [mounted]);

  if (reducedMotion) {
    return (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${POSTER_URL})` }}
      />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-dark">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "100vw",
          height: "56.25vw",
          minHeight: "100vh",
          minWidth: "177.78vh",
        }}
      >
        {mounted && (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setCanPlay(true)}
            onPlaying={() => setCanPlay(true)}
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>
        )}
        {/* Brown placeholder that fades out once the video is ready */}
        <div
          className="absolute inset-0 bg-dark z-10 transition-opacity duration-700 ease-out"
          style={{
            opacity: canPlay ? 0 : 1,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
