import "./globals.css"
import Navbar from "./components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen max-w-6xl mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  )
}
