import { Routes, Route, Navigate } from 'react-router'
import PatientsPage from './pages/PatientsPage'
import OverviewPage from './pages/OverviewPage'
import MapPage from './pages/MapPage'
import DepartmentsPage from './pages/DepartmentsPage'
import DoctorsPage from './pages/DoctorsPage'
import HistoryPage from './pages/HistoryPage'
import SettingsPage from './pages/SettingsPage'
import "tailwindcss";
import Sidebar from './components/Sidebar'
import Header from './components/Header'

function App() {


  return (
    
   <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50">
        <Header />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/overview" />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  
    
    
  )
}

export default App
