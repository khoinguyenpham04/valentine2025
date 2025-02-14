"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { Modak as Monomakh } from "next/font/google"
import { useToast } from "@/hooks/use-toast"
import { useWindowSize } from "react-use"
import Confetti from "react-confetti"

const monomakh = Monomakh({ subsets: ["latin"], weight: "400" })

const funnyMessages = [
  "Nice try! But you can't escape it",
  "Oops! The button is playing hard to get 💝",
  "Catch me if you can! 🏃‍♂️",
  "Love is inevitable 💕",
  "You're making this harder than it needs to be 😅",
  "Running away won't help! 🎯",
  "Resistance is futile! 🌹"
]

export default function ValentineQuestionPage() {
  const [noButtonPosition, setNoButtonPosition] = useState<{ x: number | null; y: number | null }>({ x: null, y: null })
  const [yesButtonSize, setYesButtonSize] = useState(1)
  const [wiggle, setWiggle] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const { width, height } = useWindowSize()
  const { toast } = useToast()

  useEffect(() => {
    setNoButtonPosition({
      x: window.innerWidth * 0.75,
      y: window.innerHeight * 0.8
    })
  }, [])

  const moveNoButton = useCallback(() => {
    const x = Math.random() * (window.innerWidth - 100)
    const y = Math.random() * (window.innerHeight - 40)
    setNoButtonPosition({ x, y })
    setYesButtonSize(3)
    setWiggle(true)
    
    // Show a random funny message
    const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)]
    toast({
      title: randomMessage,
      duration: 2000
    })
  }, [])

  useEffect(() => {
    if (wiggle) {
      const timer = setTimeout(() => {
        setWiggle(false)
        setYesButtonSize(1)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [wiggle])

  const handleYesClick = () => {
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
    }, 20)
  }

  return (
    <div
      className={`min-h-screen bg-[#FFF5E4] flex flex-col items-center justify-center px-4 py-8 md:p-8 text-center ${monomakh.className}`}
    >
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />}
      <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#FF9494] leading-tight">Will you be my valentine?</h1>
        <p className="text-lg md:text-xl text-[#FF9494] opacity-90">*try to press No hehe*</p>
      </div>
      <video
        src="/theodore-seville-alvin-and-the-chipmunks (1).mp4"
        autoPlay
        loop
        muted
        playsInline
        className="mb-8 md:mb-10 rounded-2xl shadow-xl w-[220px] h-[260px] md:w-[280px] md:h-[320px] object-cover"
      />
      <div className="space-x-4 relative">
        <Link
          href="/flower-page"
          className={`bg-[#FF9494] text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-xl md:text-2xl hover:bg-[#FF7676] transition-all duration-300 inline-block shadow-md hover:shadow-lg`}
          style={{
            transform: `scale(${yesButtonSize})`,
            animation: wiggle ? "wiggle 0.5s ease-in-out" : "none",
          }}
          onClick={handleYesClick}
        >
          Yes
        </Link>
        <button
          style={{
            position: noButtonPosition.x !== null ? "fixed" : "static",
            left: noButtonPosition.x !== null ? `${noButtonPosition.x}px` : "auto",
            top: noButtonPosition.y !== null ? `${noButtonPosition.y}px` : "auto",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          className="bg-gray-300 text-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-full text-xl md:text-2xl hover:bg-gray-400 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          No
        </button>
      </div>
      <style jsx global>{`
        @keyframes wiggle {
          0% { transform: rotate(0deg) scale(3); }
          25% { transform: rotate(-5deg) scale(3); }
          50% { transform: rotate(5deg) scale(3); }
          75% { transform: rotate(-5deg) scale(3); }
          100% { transform: rotate(0deg) scale(3); }
        }
      `}</style>
    </div>
  )
}

