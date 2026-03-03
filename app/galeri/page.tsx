import Image from "next/image"

export default function Galeri() {

  const images = [
    "/galeri/trip1.jpeg",
    "/galeri/trip2.jpeg",
    "/galeri/trip3.jpeg",
    "/galeri/trip4.jpeg",
    "/galeri/trip5.jpeg",
    "/galeri/trip6.jpeg",
  ]

  return (
    <div className="max-w-6xl mx-auto">

      <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-md">

        <h1 className="text-3xl font-bold text-black mb-8">
          Galeri Perjalanan
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200 group"
            >
              <Image
                src={src}
                alt={`Trip ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-64 transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}