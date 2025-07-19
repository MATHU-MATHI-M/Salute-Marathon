"use client"

import { useEffect, useRef } from "react"
import { Gift, Shield, Smartphone, ExternalLink } from "lucide-react"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && e.target === modalRef.current) {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", handleKeyDown)
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleProceedRegistration = () => {
    // Updated to the Google Form link
    window.open("https://forms.gle/iZ9A1V8A11CFmVfo9", "_blank")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      ref={modalRef}
      id="registration-modal"
      className="modal fixed inset-0 z-[2000] bg-black/50 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="modal-content bg-background-white p-12 rounded-[30px] w-[90%] max-w-[600px] relative animate-modal-slide-in shadow-heavy max-h-[85vh] overflow-y-auto">
        <span
          className="close absolute right-8 top-8 text-4xl cursor-pointer text-text-gray transition-all duration-400 ease-DEFAULT hover:text-text-dark hover:scale-110"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="font-poppins text-4xl font-bold text-text-dark mb-6">Register for Salute Marathon</h2>
        <p className="text-text-gray mb-10 text-lg">
          Choose your category and join our mission for women safety and drug awareness.
        </p>
        <div className="modal-pricing grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          <div className="modal-price-card bg-background-light p-8 rounded-[15px] text-center border-2 border-transparent transition-all duration-400 ease-DEFAULT hover:border-primary-purple hover:translate-y-[-3px]">
            <div className="modal-price-category font-poppins text-2xl font-bold text-text-dark mb-4">5K Challenge</div>
            <div className="modal-price-amount text-4xl font-extrabold text-primary-pink mb-4">₹333</div>
          </div>
          <div className="modal-price-card bg-background-light p-8 rounded-[15px] text-center border-2 border-transparent transition-all duration-400 ease-DEFAULT hover:border-primary-purple hover:translate-y-[-3px]">
            <div className="modal-price-category font-poppins text-2xl font-bold text-text-dark mb-4">
              10K Challenge
            </div>
            <div className="modal-price-amount text-4xl font-extrabold text-primary-pink mb-4">₹555</div>
          </div>
        </div>
        <div className="modal-info grid gap-6 mb-10">
          <div className="modal-item flex items-center gap-6 p-6 bg-background-light rounded-[15px] border-l-[5px] border-primary-purple transition-all duration-400 ease-DEFAULT hover:translate-x-2 hover:shadow-light">
            <Gift className="text-primary-purple text-2xl" />
            <span className="font-semibold text-lg">Includes T-shirt, Medal, Certificate, Refreshments</span>
          </div>
          <div className="modal-item flex items-center gap-6 p-6 bg-background-light rounded-[15px] border-l-[5px] border-primary-purple transition-all duration-400 ease-DEFAULT hover:translate-x-2 hover:shadow-light">
            <Shield className="text-primary-purple text-2xl" />
            <span className="font-semibold text-lg">Secure payment via Razorpay</span>
          </div>
          <div className="modal-item flex items-center gap-6 p-6 bg-background-light rounded-[15px] border-l-[5px] border-primary-purple transition-all duration-400 ease-DEFAULT hover:translate-x-2 hover:shadow-light">
            <Smartphone className="text-primary-purple text-2xl" />
            <span className="font-semibold text-lg">Instant confirmation via SMS</span>
          </div>
        </div>
        <button
          id="proceed-registration"
          onClick={handleProceedRegistration}
          className="btn btn-primary btn-large relative overflow-hidden px-12 py-6 text-decoration-none font-extrabold transition-all duration-400 ease-DEFAULT border-none cursor-pointer inline-flex items-center gap-3 text-xl bg-primary-gradient text-text-light shadow-light hover:translate-y-[-3px] hover:scale-105 hover:shadow-heavy before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-400 before:ease-DEFAULT hover:before:left-full rounded-[50px]"
        >
          <ExternalLink />
          Proceed to Registration
        </button>
      </div>
    </div>
  )
}
