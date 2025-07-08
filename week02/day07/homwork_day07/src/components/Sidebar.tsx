import React from 'react'
import { NavLink } from 'react-router'
import {
  FaUserInjured,
  FaChartPie,
  FaMapMarkedAlt,
  FaBuilding,
  FaUserMd,
  FaHistory,
  FaCog
} from 'react-icons/fa'


type Props = {}

const menuItems = [
  { name: 'Patients', path: '/patients', icon: <FaUserInjured /> },
  { name: 'Overview', path: '/overview', icon: <FaChartPie /> },
  { name: 'Map', path: '/map', icon: <FaMapMarkedAlt /> },
  { name: 'Departments', path: '/departments', icon: <FaBuilding /> },
  { name: 'Doctors', path: '/doctors', icon: <FaUserMd /> },
  { name: 'History', path: '/history', icon: <FaHistory /> },
  { name: 'Settings', path: '/settings', icon: <FaCog /> },
]

export default function Sidebar({}: Props) {
  return (
       <div className="w-64 bg-white p-4 border-r">
      <h1 className="text-xl font-bold mb-6">H-care</h1>
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded hover:bg-purple-100 transition ${
                  isActive ? 'bg-purple-200 font-semibold' : ''
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}