function Inicio() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-4 text-green-400">Progreso Fitness</h1>
      <p className="text-lg text-gray-300 mb-6">
        Lleva un seguimiento de tus entrenamientos y mejora cada día.
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition">
        Comenzar Ahora
      </button>
    </div>
  );
}

export default Inicio;
