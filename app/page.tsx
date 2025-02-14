import Link from "next/link"
import { Modak as Monomakh } from "next/font/google"

const monomakh = Monomakh({ subsets: ["latin"], weight: "400" })

export default function ApologyPage() {
  return (
    <div
      className={`min-h-screen bg-[#FFF5E4] flex flex-col items-center justify-center p-4 text-center ${monomakh.className}`}
    >
      <div className="w-full max-w-3xl px-4 md:px-6 space-y-4 md:space-y-6">
        <p className="text-xl md:text-2xl text-[#FF9494] text-left">Dear Maisie,</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#FF9494] leading-tight">I&apos;m sorry it took me this long to ask u...</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-[#FF9494] leading-relaxed">But I wanted to make something special for u</p>
      </div>
      <video
        src="/theodore-chipmunk-sad-walk.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="my-8 md:my-10 rounded-2xl shadow-xl w-[280px] md:w-[400px] h-[220px] md:h-[300px] object-cover"
      />
      <Link
        href="/valentine-question"
        className="bg-[#FF9494] text-white px-6 py-3 rounded-full text-lg md:text-xl hover:bg-[#FF7676] transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        Next
      </Link>
    </div>
  )
}

