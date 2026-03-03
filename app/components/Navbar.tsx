"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navbar() {
  const pathname = usePathname()

  const menu = [
    { name: "Home", path: "/" },
    { name: "Peserta", path: "/peserta" },
    { name: "Tentang", path: "/tentang" },
    { name: "Galeri", path: "/galeri" },
    { name: "Kontak", path: "/kontak" },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Logo OpenTrip"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-lg font-bold text-black tracking-wide">
            MARS
          </span>
        </Link>

        {/* Menu */}
        <div className="flex gap-8">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm uppercase tracking-wide transition ${
                pathname === item.path
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}