export default function DoloNeurobionPage() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <a
            href="/"
            className="text-3xl font-bold text-teal-700"
          >
            MEDIC FAB
          </a>

          <nav className="space-x-8 font-medium">

            <a href="/">Inicio</a>

            <a href="/#productos">Productos</a>

            <a href="/nosotros">Nosotros</a>

            <a href="https://wa.me/51952260788">
              Contacto
            </a>

          </nav>

        </div>
      </header>

      {/* Breadcrumb */}

      <section className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-8 py-5 text-gray-500">

          <a href="/">Inicio</a>

          <span className="mx-2">›</span>

          <a href="/#productos">
            Productos
          </a>

          <span className="mx-2">›</span>

          <span className="font-semibold text-teal-700">
            Dolo Neurobión
          </span>

        </div>

      </section>

      {/* Producto */}

      <section className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Imagen */}

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <img
              src="/doloneurobion.png"
              alt="Dolo Neurobión"
              className="w-full hover:scale-105 transition duration-300"
            />

          </div>

          {/* Información */}

          <div>

            <div className="flex gap-3 mb-6">

              <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                🔥 OFERTA
              </span>

              <span className="bg-green-600 text-white px-4 py-2 rounded-full font-bold">
                ✔ EN STOCK
              </span>

            </div>

            <h1 className="text-5xl font-bold mb-4">
              Dolo Neurobión
            </h1>

            <p className="text-xl text-gray-500 mb-8">
              Complejo vitamínico con efecto analgésico para uso profesional.
            </p>

            <div className="mb-8">

              <p className="text-2xl text-gray-400 line-through">
                Antes: S/110.00
              </p>

              <p className="text-6xl font-bold text-red-600 mt-3">
                S/95.00
              </p>

              <p className="text-green-600 text-xl font-bold mt-3">
                Ahorras S/15.00
              </p>

            </div>

            <div className="space-y-4 text-lg mb-10">

              <p>✅ Producto Original</p>

              <p>✅ Presentación Sellada</p>

              <p>✅ Uso Profesional</p>

            </div>

            <a
              href="https://wa.me/51952260788"
              className="block text-center bg-green-600 hover:bg-green-700 text-white text-2xl font-bold py-5 rounded-2xl shadow-lg transition"
            >
              💬 COMPRAR POR WHATSAPP
            </a>

          </div>

        </div>

      </section>

      {/* Descripción */}

      <section className="max-w-7xl mx-auto px-8 pb-20">

        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <h2 className="text-3xl font-bold text-teal-700 mb-6">
            Descripción
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Dolo Neurobión es un medicamento inyectable que combina vitaminas
            del complejo B con componentes analgésicos y antiinflamatorios,
            formulado para el tratamiento del dolor de origen neurológico y
            musculoesquelético bajo indicación médica.
          </p>

          <p className="text-lg text-gray-700 leading-8 mt-6">
            Producto original, con presentación sellada de fábrica y
            distribuido con garantía de calidad por MEDIC FAB.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold text-teal-700 mb-6">
              Características
            </h2>

            <ul className="space-y-4 text-lg text-gray-700">

              <li>✔ Complejo vitamínico B1 + B6 + B12</li>

              <li>✔ Acción analgésica</li>

              <li>✔ Doble cámara</li>

              <li>✔ Producto original</li>

              <li>✔ Uso profesional</li>

            </ul>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold text-teal-700 mb-6">
              Información
            </h2>

            <div className="space-y-4 text-lg">

              <p><strong>Laboratorio:</strong> Merck</p>

              <p><strong>Presentación:</strong> Caja x 3 jeringas</p>

              <p><strong>Vía:</strong> Intramuscular</p>

              <p><strong>Disponibilidad:</strong> En Stock</p>

              <p><strong>Envíos:</strong> Todo el Perú</p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}