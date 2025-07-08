import React from 'react'
import { FaSearch } from 'react-icons/fa'

type Props = {}

export default function Header({}: Props) {
  return (
     <div className="flex items-center justify-between bg-white px-6 py-4 border-b">
      <div className="relative w-1/2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded border border-gray-300"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="flex items-center space-x-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="rounded-full w-10 h-10"
        />
        <span className="font-medium">Emma Kwan</span>
      </div>
    </div>
  )
}