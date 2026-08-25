export default function ToneGirlPage() {
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
          </nav>

        </div>
      </header>

      {/* Producto */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Imagen */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border">

            <div className="w-full h-96 flex items-center justify-center bg-white overflow-hidden">

              <img
                src="/tone-girl.png"
                alt="Tone Girl"
                className="max-w-full max-h-full object-contain p-6"
              />

            </div>

          </div>

          {/* Información */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              OFERTA
            </span>

            <h1 className="text-4xl font-bold text-gray-900 mt-5">
              Tone Girl®
            </h1>

            <p className="text-gray-600 text-lg mt-4">
              Solución de peptonas activadas orientada a protocolos
              profesionales de estética corporal.
            </p>

            {/* Precio */}
            <div className="mt-6">

              <p className="text-gray-400 line-through text-xl">
                Antes: S/ 225.00
              </p>

              <p className="text-4xl font-bold text-red-600">
                Ahora: S/ 200.00
              </p>

            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/51952260788"
              className="inline-block mt-7 bg-teal-600 text-white px-7 py-4 rounded-xl hover:bg-teal-700 transition"
            >
              Comprar por WhatsApp
            </a>

            {/* Características */}
            <div className="mt-10">

              <h2 className="text-2xl font-bold text-teal-700 mb-5">
                Principales características
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">

                <li>
                  Producto destinado a protocolos profesionales de estética corporal.
                </li>

                <li>
                  Orientado a tratamientos de tonificación, firmeza y definición del contorno corporal.
                </li>

                <li>
                  Puede incorporarse a protocolos profesionales según indicaciones del fabricante.
                </li>

                <li>
                  Presentación comercial de 10 viales de 10 mL.
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* Información detallada */}
        <div className="bg-white rounded-3xl shadow-lg mt-10 p-8">

          <h2 className="text-2xl font-bold text-teal-700 mb-6">
            Información del producto
          </h2>

          <div className="space-y-6 text-gray-700 leading-7">

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Zonas de aplicación
              </h3>

              <p>
                Glúteos, piernas, brazos, pantorrillas, pectorales y bíceps,
                de acuerdo con el protocolo profesional correspondiente.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Composición reportada
              </h3>

              <p>
                Peptona activada, músculo estriado, colágeno, EGF,
                silicio orgánico y procaína.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Presentación
              </h3>

              <p>
                Caja con 10 viales de 10 mL cada uno.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Uso profesional
              </h3>

              <p>
                Producto destinado a protocolos profesionales de estética y salud.
                La aplicación debe realizarse por personal debidamente capacitado,
                siguiendo las indicaciones del fabricante y la normativa sanitaria
                aplicable.
              </p>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-500">
                Los resultados pueden variar según la persona, la zona tratada
                y el protocolo utilizado. Este producto no sustituye una
                alimentación adecuada, ejercicio ni una evaluación profesional.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-10">

        <div className="max-w-7xl mx-auto px-8 py-10 text-center">

          <h2 className="text-2xl font-bold text-teal-400">
            MEDIC FAB
          </h2>

          <p className="text-gray-400 mt-3">
            Insumos y soluciones para profesionales de la salud y estética.
          </p>

        </div>

      </footer>

    </main>
  );
}