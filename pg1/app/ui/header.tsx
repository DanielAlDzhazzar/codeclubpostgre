'use client'

import { useState } from 'react'
import Link from 'next/link'
import { techs } from '@/app/lib/placeholder-data'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const logo = techs.find(tech => tech.name === 'Logo')

  return (
    <header className="relative">
      <div className="flex items-center justify-between relative">
        {logo && (
          <div className="flex items-center">
            <img
              src={logo.image_url}
              alt={logo.image_alt}
              width={logo.width}
              height={logo.height}
            />
          </div>
        )}

        <button
          onClick={() => setMenuOpen(true)}
          className="text-3xl md:hidden focus:outline-none cursor-pointer"
          aria-label="Open menu"
        >
          &#9776;
        </button>

        <nav className="hidden md:flex text-xl relative md:space-x-8 lg:absolute lg:-top-3.75 lg:-right-33.5 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-3 lg:bg-[#65d849] lg:border-4 lg:border-dotted lg:border-red-500 lg:p-2"aria-label="main">
          <Link href="../dashboard/" className="inline-block no-underline bg-blue-500 text-white rounded-[10px] font-bold border border-blue-500 w-25 text-center py-1.5 hover:bg-blue-600 transition">Home</Link>
          <Link href="../dashboard/scratch" className="inline-block no-underline bg-blue-500 text-white rounded-[10px] font-bold border border-blue-500 w-25 text-center py-1.5 hover:bg-blue-600 transition">Scratch</Link>
          <Link href="../dashboard/python" className="inline-block no-underline bg-blue-500 text-white rounded-[10px] font-bold border border-blue-500 w-25 text-center py-1.5 hover:bg-blue-600 transition">Python</Link>
          <Link href="../dashboard/web" className="inline-block no-underline bg-blue-500 text-white rounded-[10px] font-bold border border-blue-500 w-25 text-center py-1.5 hover:bg-blue-600 transition">Web</Link>
        </nav>
      </div>

      {menuOpen && (
        <section className="fixed inset-0 bg-green-500 text-5xl flex flex-col items-center z-50" aria-label="mobile">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-8xl self-end px-6 pt-20"
            aria-label="Close menu"
          >
            &times;
          </button>

          <nav className="flex flex-col min-h-screen items-center py-8">
            <Link onClick={() => setMenuOpen(false)} href="../dashboard/" className="w-full text-center py-6 hover:opacity-90 mt-5">Home</Link>
            <Link onClick={() => setMenuOpen(false)} href="../dashboard/scratch" className="w-full text-center py-6 hover:opacity-90 mt-5">Scratch</Link>
            <Link onClick={() => setMenuOpen(false)} href="../dashboard/python" className="w-full text-center py-6 hover:opacity-90 mt-5">Python</Link>
            <Link onClick={() => setMenuOpen(false)} href="../dashboard/web" className="w-full text-center py-6 hover:opacity-90 mt-5">Web</Link>
          </nav>
        </section>
      )}
    </header>
  )
}
