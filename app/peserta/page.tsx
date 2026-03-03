"use client"
import { useState } from "react"

export default function Home() {
  const [nama, setNama] = useState<string>("")
  const [data, setData] = useState<string[]>([])
  const [editIndex, setEditIndex] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!nama.trim()) return

    if (editIndex !== null) {
      const updated = [...data]
      updated[editIndex] = nama
      setData(updated)
      setEditIndex(null)
    } else {
      setData([...data, nama])
    }

    setNama("")
  }

  const handleEdit = (index: number) => {
    setNama(data[index])
    setEditIndex(index)
  }

  const handleDelete = (index: number) => {
    setData(data.filter((_, i) => i !== index))
  }

  return (
    <div className="max-w-2xl mx-auto">

      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md">

        <h1 className="text-2xl font-bold mb-6 text-black">
          Daftar Peserta OpenTrip
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Masukkan nama..."
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-black"
/>
          <button
            type="submit"
            className={`px-5 py-3 rounded-lg font-semibold transition ${
              editIndex !== null
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {editIndex !== null ? "Update" : "Tambah"}
          </button>
        </form>

        {/* LIST DATA */}
        <div className="space-y-3">
          {data.length === 0 && (
            <p className="text-center text-black">
              Belum ada data...
            </p>
          )}

          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg"
            >
              <span className="font-medium text-gray-800">
                {item}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-gray-600 text-white hover:bg-gray-500 px-3 py-1 rounded text-sm transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-black text-white hover:bg-gray-800 px-3 py-1 rounded text-sm transition"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}