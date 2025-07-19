"use client"
import { useAnimateOnScroll } from "@/hooks/use-intersection-observer"
import { useTiltEffect } from "@/hooks/use-tilt-effect"

export function PartnersSection() {
  const sectionHeaderRef = useAnimateOnScroll<HTMLDivElement>("fade-in-up")
  const titlePartnerRef = useAnimateOnScroll<HTMLDivElement>("fade-in-up")
  const goldPartnersRef = useAnimateOnScroll<HTMLDivElement>("fade-in-up")
  const silverPartnersRef = useAnimateOnScroll<HTMLDivElement>("fade-in-up")

  const tiltRef1 = useTiltEffect<HTMLDivElement>()
  const tiltRef2 = useTiltEffect<HTMLDivElement>()
  const tiltRef3 = useTiltEffect<HTMLDivElement>()
  const tiltRef4 = useTiltEffect<HTMLDivElement>()
  const tiltRef5 = useTiltEffect<HTMLDivElement>()
  const tiltRef6 = useTiltEffect<HTMLDivElement>()

  return (
    <section id="partners" className="partners section bg-background-white py-24 relative">
      <div className="container mx-auto px-8">
        <div ref={sectionHeaderRef} className="section-header text-center mb-16 animate-fade-in-up">
          <div className="section-badge bg-primary-gradient text-text-light px-6 py-2 rounded-[50px] text-sm font-semibold uppercase tracking-wider mb-6 inline-block animate-fade-in-down">
            Partnership
          </div>
          <h2 className="section-title font-poppins text-5xl font-extrabold text-text-dark mb-6 leading-tight animate-fade-in-up">
            Our Valued Partners
          </h2>
          <p className="section-subtitle text-xl text-text-gray max-w-[700px] mx-auto leading-relaxed animate-fade-in-up">
            Supporting our mission for women safety and drug awareness
          </p>
        </div>
        <div className="partner-tiers grid gap-16 mb-20">
          <div ref={titlePartnerRef} className="partner-tier text-center animate-fade-in-up">
            <h3 className="font-poppins text-3xl font-bold text-text-dark mb-8">Title Partner</h3>
            <div className="partner-logos grid grid-cols-1 gap-8 justify-items-center">
              <div
                ref={tiltRef1}
                className="partner-placeholder tilt-effect bg-background-light p-12 rounded-[20px] flex items-center justify-center min-h-[150px] w-full max-w-[400px] border-4 border-dashed border-primary-purple transition-all duration-400 ease-DEFAULT relative overflow-hidden hover:translate-y-[-5px] hover:scale-105 hover:shadow-heavy hover:border-primary-pink before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-primary-purple/10 before:to-transparent before:transition-all before:duration-400 before:ease-DEFAULT hover:before:left-full"
              >
                <span className="text-primary-purple font-bold text-xl">Your Brand Here</span>
              </div>
            </div>
          </div>
          <div ref={goldPartnersRef} className="partner-tier text-center animate-fade-in-up">
            <h3 className="font-poppins text-3xl font-bold text-text-dark mb-8">Gold Partners</h3>
            <div className="partner-logos grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              <div
                ref={tiltRef2}
                className="partner-placeholder tilt-effect bg-background-light p-12 rounded-[20px] flex items-center justify-center min-h-[150px] w-full max-w-[400px] border-4 border-dashed border-primary-purple transition-all duration-400 ease-DEFAULT relative overflow-hidden hover:translate-y-[-5px] hover:scale-105 hover:shadow-heavy hover:border-primary-pink before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-primary-purple/10 before:to-transparent before:transition-all before:duration-400 before:ease-DEFAULT hover:before:left-full"
              >
                <span className="text-primary-purple font-bold text-xl">Your Brand Here</span>
              </div>
              <div
                ref={tiltRef3}
                className="partner-placeholder tilt-effect bg-background-light p-12 rounded-[20px] flex items-center justify-center min-h-[150px] w-full max-w-[400px] border-4 border-dashed border-primary-purple transition-all duration-400 ease-DEFAULT relative overflow-hidden hover:translate-y-[-5px] hover:scale-105 hover:shadow-heavy hover:border-primary-pink before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-primary-purple/10 before:to-transparent before:transition-all before:duration-400 before:ease-DEFAULT hover:before:left-full"
              >
                <span className="text-primary-purple font-bold text-xl">Your Brand Here</span>
              </div>
            </div>
          </div>
          <div ref={silverPartnersRef} className="partner-tier text-center animate-fade-in-up">
            <h3 className="font-poppins text-3xl font-bold text-text-dark mb-8">Silver Partners</h3>
            <div className="partner-logos grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div
                ref={tiltRef4}
                className="partner-placeholder tilt-effect bg-background-light p-12 rounded-[20px] flex items-center justify-center min-h-[150px] w-full max-w-[400px] border-4 border-dashed border-primary-purple transition-all duration-400 ease-DEFAULT relative overflow-hidden hover:translate-y-[-5px] hover:scale-105 hover:shadow-heavy hover:border-primary-pink before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-primary-purple/10 before:to-transparent before:transition-all before:duration-400 before:ease-DEFAULT hover:before:left-full"
              >
                <span className="text-primary-purple font-bold text-xl">Your Brand Here</span>
              </div>
              <div
                ref={tiltRef5}
                className="partner-placeholder tilt-effect bg-background-light p-12 rounded-[20px] flex items-center justify-center min-h-[150px] w-full max-w-[400px] border-4 border-dashed border-primary-purple transition-all duration-400 ease-DEFAULT relative overflow-hidden hover:translate-y-[-5px] hover:scale-105 hover:shadow-heavy hover:border-primary-pink before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-primary-purple/10 before:to-transparent before:transition-all before:duration-400 before:ease-DEFAULT hover:before:left-full"
              >
                <span className="text-primary-purple font-bold text-xl">Your Brand Here</span>
              </div>
              <div
                ref={tiltRef6}
                className="partner-placeholder tilt-effect bg-background-light p-12 rounded-[20px] flex items-center justify-center min-h-[150px] w-full max-w-[400px] border-4 border-dashed border-primary-purple transition-all duration-400 ease-DEFAULT relative overflow-hidden hover:translate-y-[-5px] hover:scale-105 hover:shadow-heavy hover:border-primary-pink before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-primary-purple/10 before:to-transparent before:transition-all before:duration-400 before:ease-DEFAULT hover:before:left-full"
              >
                <span className="text-primary-purple font-bold text-xl">Your Brand Here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
