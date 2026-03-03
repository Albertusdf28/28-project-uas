import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center mt-24">

      {/* Logo */}
      <Image
        src="/logo.jpeg"
        alt="Logo OpenTrip"
        width={120}
        height={120}
        className="object-contain mb-6"
      />

      {/* Title */}
      <h1 className="text-5xl font-bold mb-6 text-white">
        MARS Adventure
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-xl">
        Ambil cutimu, mari pergi bersama kami.
      </p>

      {/* Decorative Line */}
      <div className="mt-10 w-20 h-1 bg-black"></div>

    </div>
  )
}