"use client"

import { useEffect, useState } from "react"

export function LoadingOverlay() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      id="loading-overlay"
      className={`fixed inset-0 bg-background-white flex justify-center items-center z-[9999] transition-opacity duration-500 ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="loading-spinner w-[50px] h-[50px] border-[5px] border-[#f3f3f3] border-t-primary-purple rounded-full animate-spin"></div>
    </div>
  )
}
