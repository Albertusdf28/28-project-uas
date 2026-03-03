export default function Kontak() {
  return (
    <div className="max-w-3xl mx-auto">

      <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-md">

        <h1 className="text-3xl font-bold text-black mb-6">
          Kontak Kami
        </h1>

        <p className="text-black mb-4 leading-relaxed">
          Jika Anda memiliki pertanyaan atau ingin mengetahui informasi lebih lanjut
          mengenai paket perjalanan MARS Adventure, silakan hubungi kami melalui email berikut:
        </p>

        <div className="mt-6">
          <a
            href="mailto:marsadv28@gmail.com"
            className="text-lg font-semibold text-black border-b-2 border-black hover:text-gray-600 transition"
          >
            marsadv28@gmail.com
          </a>
        </div>

      </div>

    </div>
  )
}