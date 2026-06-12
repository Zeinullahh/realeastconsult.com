"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const VIDEO_ID = "2dEWPwVaUqM";
const START_TIME = 8;
const END_TIME = 360; // 6 minutes

function subscribeIsMobile(callback) {
  const handler = () => callback();
  window.addEventListener("resize", handler);
  return () => window.removeEventListener("resize", handler);
}

function getIsMobile() {
  if (typeof window === "undefined") return true;
  const isMobileDevice = window.innerWidth < 768;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return isMobileDevice || prefersReducedMotion;
}

function subscribeYTApiReady(callback) {
  if (typeof window === "undefined") return () => {};
  if (window.YT?.Player) return () => {};

  const originalCallback = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = () => {
    callback();
    if (originalCallback) originalCallback();
  };

  const scriptId = "youtube-iframe-api";
  if (!document.getElementById(scriptId)) {
    const tag = document.createElement("script");
    tag.id = scriptId;
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  return () => {
    window.onYouTubeIframeAPIReady = originalCallback;
  };
}

function getYTApiReady() {
  return typeof window !== "undefined" && !!window.YT?.Player;
}

export default function VideoBackground() {
  const playerRef = useRef(null);
  const targetRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isMobile = useSyncExternalStore(subscribeIsMobile, getIsMobile, () => true);
  const apiReady = useSyncExternalStore(subscribeYTApiReady, getYTApiReady, () => false);

  useEffect(() => {
    if (!apiReady || isMobile || !targetRef.current || !window.YT) return;

    if (targetRef.current.querySelector("iframe")) return;

    playerRef.current = new window.YT.Player(targetRef.current, {
      width: "1280",
      height: "720",
      videoId: VIDEO_ID,
      playerVars: {
        autoplay: 1,
        mute: 1,
        start: START_TIME,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
        iv_load_policy: 3,
        fs: 0,
        cc_load_policy: 0,
      },
      events: {
        onReady: (event) => {
          event.target.seekTo(START_TIME, true);
          event.target.playVideo();
        },
        onStateChange: (event) => {
          if (event.data === window.YT?.PlayerState.PLAYING) {
            setIsPlaying(true);
          }
          if (event.data === window.YT?.PlayerState.ENDED) {
            event.target.seekTo(START_TIME, true);
            event.target.playVideo();
          }
        },
      },
    });

    const interval = setInterval(() => {
      if (playerRef.current?.getCurrentTime) {
        const time = playerRef.current.getCurrentTime();
        if (time >= END_TIME || time < START_TIME - 2) {
          playerRef.current.seekTo(START_TIME, true);
          playerRef.current.playVideo();
        }
      }
    }, 1000);

    // Fallback: hide overlay after 3s even if state event doesn't fire
    const fallback = setTimeout(() => setIsPlaying(true), 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(fallback);
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
      }
      playerRef.current = null;
    };
  }, [apiReady, isMobile]);

  if (isMobile) {
    return (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg)`,
        }}
      />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "100vw",
          height: "56.25vw",
          minHeight: "100vh",
          minWidth: "177.78vh",
        }}
      >
        <div ref={targetRef} className="w-full h-full" />
        {/* Cover YouTube thumbnail/play-button until video actually plays */}
        <div
          className="absolute inset-0 bg-dark z-10 transition-opacity duration-700 ease-out"
          style={{ opacity: isPlaying ? 0 : 1, pointerEvents: isPlaying ? "none" : "auto" }}
        />
        {/* Block all interactions with YouTube UI (prevents stop/pause buttons from appearing/being clicked) */}
        <div className="absolute inset-0 bg-transparent z-20" style={{ pointerEvents: "auto" }} />
      </div>
    </div>
  );
}
