"use client"

import { useEffect, useRef, useState } from "react"
import { useAnimateOnScroll } from "@/hooks/use-intersection-observer"

export function SocialProof() {
  const participantsCountRef = useAnimateOnScroll<HTMLDivElement>("count-up")
  const [count, setCount] = useState(0)
  const targetCount = 189
  const maxCount = 500 // Total spots
  const [spotsRemaining, setSpotsRemaining] = useState(maxCount - targetCount)
  const [progressPercentage, setProgressPercentage] = useState((targetCount / maxCount) * 100)

  const popupMessages = [
    "👩‍🎓 Priya from Anna University just registered!",
    "🏃‍♂️ Raj from TCS Chennai joined 5 minutes ago",
    "💪 Sarah from Infosys is ready to run!",
    "🎯 Karthik from Wipro Chennai registered!",
    "🌟 Divya from IIT Madras joined the movement!",
    "🚀 Arun from Cognizant signed up!",
  ]

  const popupRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let current = 0
    const increment = targetCount / 100
    let timer: NodeJS.Timeout

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = setInterval(() => {
              current += increment
              if (current >= targetCount) {
                current = targetCount
                clearInterval(timer)
              }
              setCount(Math.floor(current))
            }, 30)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (participantsCountRef.current) {
      observer.observe(participantsCountRef.current)
    }

    return () => {
      clearInterval(timer)
      if (participantsCountRef.current) {
        observer.unobserve(participantsCountRef.current)
      }
    }
  }, [participantsCountRef, targetCount])

  useEffect(() => {
    const popupInterval = setInterval(() => {
      popupRefs.current.forEach((popup, index) => {
        if (popup) {
          setTimeout(() => {
            popup.textContent = popupMessages[Math.floor(Math.random() * popupMessages.length)]
            popup.style.animation = "fadeInScale 0.5s ease-out"
            popup.style.transform = "scale(1.05)"
            setTimeout(() => {
              popup.style.transform = "scale(1)"
              popup.style.animation = "" // Reset animation to allow re-triggering
            }, 200)
          }, index * 2000)
        }
      })
    }, 8000) // Update every 8 seconds

    return () => clearInterval(popupInterval)
  }, [popupMessages])

  useEffect(() => {
    const registrationUpdateInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < maxCount) {
          const newCount = prevCount + Math.floor(Math.random() * 3) + 1
          const updatedCount = Math.min(newCount, maxCount)
          setSpotsRemaining(maxCount - updatedCount)
          setProgressPercentage((updatedCount / maxCount) * 100)
          return updatedCount
        }
        return prevCount
      })
    }, 30000) // Update every 30 seconds

    return () => clearInterval(registrationUpdateInterval)
  }, [maxCount])

  return (
    <>
      <section className="social-proof bg-background-light py-12 text-center">
        <div className="container mx-auto px-8">
          <div
            ref={participantsCountRef}
            className="participants-count text-5xl font-extrabold text-primary-purple mb-2 animate-count-up"
          >
            {count}
          </div>
          <div className="participants-label text-lg text-text-gray font-semibold">Runners Already Registered</div>
          <div className="recent-registrations flex justify-center gap-4 mt-8 flex-wrap">
            <div
              ref={(el) => (popupRefs.current[0] = el)}
              className="registration-popup bg-background-white px-6 py-3 rounded-[50px] text-sm text-text-gray shadow-light animate-fade-in-scale"
            >
              👩‍🎓 Priya from Anna University just registered!
            </div>
            <div
              ref={(el) => (popupRefs.current[1] = el)}
              className="registration-popup bg-background-white px-6 py-3 rounded-[50px] text-sm text-text-gray shadow-light animate-fade-in-scale"
            >
              🏃‍♂️ Raj from TCS Chennai joined 5 minutes ago
            </div>
            <div
              ref={(el) => (popupRefs.current[2] = el)}
              className="registration-popup bg-background-white px-6 py-3 rounded-[50px] text-sm text-text-gray shadow-light animate-fade-in-scale"
            >
              💪 Sarah from Infosys is ready to run!
            </div>
          </div>
        </div>
      </section>

      <div className="progress-container bg-background-white p-8 rounded-[15px] mb-8 shadow-light max-w-[1400px] mx-auto px-8">
        <div className="progress-text text-center mb-4 font-bold text-text-dark">
          {Math.floor(progressPercentage)}% of spots filled - Only {spotsRemaining} spots remaining!
        </div>
        <div className="progress-bar w-full h-5 bg-[#e0e0e0] rounded-xl overflow-hidden relative">
          <div
            className="progress-fill h-full bg-primary-gradient rounded-xl animate-progress-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
          <div className="progress-percentage absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-text-dark font-bold text-sm">
            {count}/{maxCount}
          </div>
        </div>
      </div>
    </>
  )
}
