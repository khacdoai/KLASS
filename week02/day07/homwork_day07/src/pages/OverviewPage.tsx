import React from 'react'

type Props = {}

export default function OverviewPage({}: Props) {
  return (
     <div className="grid grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded shadow">📊 <p className="text-xl font-semibold">3,256</p> <p>Total Patients</p></div>
      <div className="bg-white p-4 rounded shadow">👨‍⚕️ <p className="text-xl font-semibold">394</p> <p>Available Staff</p></div>
      <div className="bg-white p-4 rounded shadow">💰 <p className="text-xl font-semibold">$2,536</p> <p>Avg. Treat. Costs</p></div>
      <div className="bg-white p-4 rounded shadow">🚗 <p className="text-xl font-semibold">38</p> <p>Available Cars</p></div>
      <div className="col-span-2 bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Outpatients vs. Inpatients Trend</h2>
        <div className="text-gray-500">[Chart Placeholder]</div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Patients by Gender</h2>
        <div className="text-gray-500">[Pie Chart Placeholder]</div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Patients this Month</h2>
        <p className="text-3xl font-bold text-purple-600">3,240</p>
        <div className="text-gray-500">[Graph Placeholder]</div>
      </div>
      <div className="col-span-2 bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Time Admitted</h2>
        <div className="text-gray-500">[Line Chart Placeholder]</div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Patients by Division</h2>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>Cardiology: 247</li>
          <li>Neurology: 164</li>
          <li>Surgery: 86</li>
        </ul>
      </div>
    </div>
  )
}