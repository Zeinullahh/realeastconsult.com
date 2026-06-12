"use client";

import VideoBackground from "@/components/VideoBackground";

export default function PersistentVideoBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <VideoBackground />
      {/* Darkening overlay for text and glass card readability */}
      <div className="absolute inset-0 bg-dark/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark/30" />
    </div>
  );
}
