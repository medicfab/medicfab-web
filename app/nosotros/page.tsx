export default function Nosotros() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-20">

      <h1 className="text-5xl font-bold text-teal-700 mb-12">
        Nosotros
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-teal-600 mb-6">
            Nuestra Misión
          </h2>

          <p className="text-gray-700 leading-8 text-lg">
            En MEDIC FAB trabajamos para conectar a odontólogos y profesionales
            de la salud con productos médicos y odontológicos originales,
            brindando calidad, confianza y atención personalizada.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-teal-600 mb-6">
            Nuestra Visión
          </h2>

          <p className="text-gray-700 leading-8 text-lg">
            Convertirnos en una empresa referente en el sector salud del Perú,
            reconocida por la excelencia de nuestros productos, nuestro servicio
            y el compromiso con cada profesional que confía en MEDIC FAB.
          </p>
        </div>

      </div>

    </main>
  );
}