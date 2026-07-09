export default function Nosotros() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Encabezado */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Sobre MEDIC FAB
          </h1>

          <p className="text-xl text-teal-100">
            Calidad y confianza para profesionales de la salud.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 py-20">

        {/* Historia */}
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-12">
          <h2 className="text-3xl font-bold text-teal-700 mb-6">
            🏥 Nuestra Historia
          </h2>

          <p className="text-gray-700 leading-8 text-lg">
            MEDIC FAB nació con el propósito de brindar a odontólogos, médicos,
            clínicas y profesionales de la salud acceso a productos originales
            y de alta calidad.

            <br /><br />

            Nuestro compromiso es ofrecer una experiencia de compra segura,
            atención personalizada y envíos a todo el Perú, convirtiéndonos
            en un aliado confiable para nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Misión */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-teal-700 mb-6">
              🎯 Nuestra Misión
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              Brindar productos médicos y odontológicos originales,
              ofreciendo calidad, confianza, atención personalizada
              y un servicio eficiente para los profesionales de la salud.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-teal-700 mb-6">
              🌟 Nuestra Visión
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              Ser una empresa referente en la distribución de productos
              médicos y odontológicos en el Perú, reconocida por la
              excelencia de nuestros productos y el compromiso con
              nuestros clientes.
            </p>
          </div>

        </div>

        {/* Valores */}
        <div className="mt-16">

          <h2 className="text-4xl font-bold text-center mb-10">
            💚 Nuestros Valores
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Calidad
              </h3>
              <p>
                Productos originales y cuidadosamente seleccionados.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Confianza
              </h3>
              <p>
                Relaciones transparentes y atención responsable.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Compromiso
              </h3>
              <p>
                Buscamos superar las expectativas de nuestros clientes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Atención
              </h3>
              <p>
                Asesoría personalizada para cada profesional.
              </p>
            </div>

          </div>

        </div>

        {/* Beneficios */}
        <div className="bg-white rounded-2xl shadow-lg p-10 mt-16">

          <h2 className="text-3xl font-bold text-teal-700 mb-8">
            ¿Por qué elegir MEDIC FAB?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg">

            <p>✅ Productos 100% originales.</p>

            <p>✅ Garantía de calidad.</p>

            <p>✅ Atención personalizada.</p>

            <p>✅ Envíos a todo el Perú.</p>

            <p>✅ Precios competitivos.</p>

            <p>✅ Atención rápida por WhatsApp.</p>

          </div>

        </div>

        {/* WhatsApp */}
        <div className="text-center mt-20">

          <h2 className="text-4xl font-bold mb-6">
            ¿Necesitas asesoría?
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Estamos listos para ayudarte.
          </p>

          <a
            href="https://wa.me/51952260788"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-xl px-10 py-5 rounded-2xl shadow-lg"
          >
            💬 Contactar por WhatsApp
          </a>

        </div>

      </div>

    </main>
  );
}
