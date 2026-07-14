"use client";

interface PlaceholderProps {
  label: string;
  aspect?: "video" | "square" | "portrait" | "landscape" | "wide";
  className?: string;
  type?: "image" | "video";
}

export default function Placeholder({
  label,
  aspect = "landscape",
  className = "",
  type = "image",
}: PlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    wide: "aspect-[21/9]",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${aspectClasses[aspect]} ${className}`}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-card via-bg-secondary to-bg-card" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Shimmer */}
      <div className="absolute inset-0 shimmer" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        {type === "video" ? (
          <svg className="w-10 h-10 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-10 h-10 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
          </svg>
        )}
        <span className="text-xs font-medium text-text-muted uppercase tracking-widest">
          {label}
        </span>
      </div>
    </div>
  );
}
