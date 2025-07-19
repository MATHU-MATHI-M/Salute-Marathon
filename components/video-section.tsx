"use client"
import { useAnimateOnScroll } from "@/hooks/use-intersection-observer"

export function VideoSection() {
  const sectionHeaderRef = useAnimateOnScroll<HTMLDivElement>("fade-in-up")
  const videoWrapperRef = useAnimateOnScroll<HTMLDivElement>("fade-in-up")

  return (
    <section id="video" className="video-section bg-background-light py-24 relative overflow-hidden">
      <div className="video-container max-w-[1200px] mx-auto px-8 text-center">
        <div ref={sectionHeaderRef} className="section-header text-center mb-16 animate-fade-in-up">
          <div className="section-badge bg-primary-gradient text-text-light px-6 py-2 rounded-[50px] text-sm font-semibold uppercase tracking-wider mb-6 inline-block animate-fade-in-down">
            Watch Our Story
          </div>
          <h2 className="section-title font-poppins text-5xl font-extrabold text-text-dark mb-6 leading-tight animate-fade-in-up">
            Experience the Mission
          </h2>
          <p className="section-subtitle text-xl text-text-gray max-w-[700px] mx-auto leading-relaxed animate-fade-in-up">
            See how we&apos;re making a difference through community action
          </p>
        </div>
        <div
          ref={videoWrapperRef}
          className="video-wrapper relative w-full max-w-[800px] mx-auto rounded-[20px] overflow-hidden shadow-heavy transition-all duration-400 ease-DEFAULT hover:translate-y-[-10px] hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] animate-fade-in-up"
        >
          <iframe
            className="promotional-video w-full h-[450px] border-none rounded-[20px]"
            src="https://www.youtube.com/embed/Fh3Iz6Ruwo8"
            title="Salute Marathon 2025 - Promotional Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="video-overlay absolute inset-0 bg-video-overlay-gradient pointer-events-none opacity-0 transition-all duration-400 ease-DEFAULT group-hover:opacity-100"></div>
        </div>
      </div>
    </section>
  )
}
