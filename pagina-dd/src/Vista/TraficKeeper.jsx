import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Datos simulados de sedimentación y deterioro de caminos
const generateSimulatedData = () => {
  const data = [];
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  
  months.forEach((month, index) => {
    data.push({
      month,
      sedimentationRisk: Math.floor(Math.random() * 50 + 20),
      roadDegradation: Math.floor(Math.random() * 40 + 10),
      criticalAreas: Math.floor(Math.random() * 5 + 1)
    });
  });

  return data;
};

const DataAnalysisDashboard = () => {
  const [filterPeriod, setFilterPeriod] = useState('months');
  const simulatedData = generateSimulatedData();

  const criticalAreas = [
    { name: 'Ruta Nacional 5', risk: 85, degradation: 72 },
    { name: 'Autopista Sur', risk: 75, degradation: 65 },
    { name: 'Carretera Costera', risk: 68, degradation: 55 },
    { name: 'Camino Rural 12', risk: 62, degradation: 50 },
    { name: 'Vía Montañosa', risk: 58, degradation: 45 }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Análisis Predictivo de Sedimentos</h2>
      
      <div className="flex space-x-4 mb-6">
        {['días', 'semanas', 'meses', 'años'].map((period) => (
          <button 
            key={period}
            className={`px-4 py-2 rounded ${filterPeriod === period ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setFilterPeriod(period)}
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Evolución de Riesgos</h3>
          <LineChart width={500} height={300} data={simulatedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sedimentationRisk" stroke="#8884d8" name="Riesgo Sedimentación" />
            <Line type="monotone" dataKey="roadDegradation" stroke="#82ca9d" name="Degradación Vial" />
          </LineChart>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Top 5 Áreas Críticas</h3>
          <table className="w-full bg-gray-100 rounded">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2 text-left">Ruta</th>
                <th className="p-2 text-center">Riesgo (%)</th>
                <th className="p-2 text-center">Degradación (%)</th>
              </tr>
            </thead>
            <tbody>
              {criticalAreas.map((area, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{area.name}</td>
                  <td className="p-2 text-center text-red-600 font-bold">{area.risk}</td>
                  <td className="p-2 text-center text-yellow-600">{area.degradation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Resumen</h3>
        <p>Total de áreas monitoreadas: 25</p>
        <p>Probabilidad promedio de fallo: 42%</p>
        <p>Áreas en estado crítico: 5</p>
      </div>
    </div>
  );
};

export default DataAnalysisDashboard;