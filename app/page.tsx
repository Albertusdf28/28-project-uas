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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-xl text-white">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          ✨ Daftar Peserta OpenTrip ✨
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Masukkan nama..."
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <button
            type="submit"
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              editIndex !== null
                ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                : "bg-green-400 hover:bg-green-500 text-black"
            }`}
          >
            {editIndex !== null ? "Update" : "Tambah"}
          </button>
        </form>

        {/* LIST DATA */}
        <div className="space-y-3">
          {data.length === 0 && (
            <p className="text-center text-white/70">
              Belum ada data...
            </p>
          )}

          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white/30 px-4 py-3 rounded-lg"
            >
              <span className="font-medium">{item}</span>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-sm text-black"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-sm text-black"
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