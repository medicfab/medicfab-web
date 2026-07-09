export default function Nosotros() {
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="text-3xl font-bold text-teal-700">
            MEDIC FAB
          </h1>

          <nav className="space-x-8 font-medium">
            <a href="/" className="hover:text-teal-600">
              Inicio
            </a>

            <a href="/#productos" className="hover:text-teal-600">
              Productos
            </a>

            <a href="/nosotros" className="text-teal-600 font-bold">
              Nosotros
            </a>

            <a
              href="https://wa.me/51952260788"
              className="hover:text-teal-600"
            >
              Contacto
            </a>
          </nav>

        </div>
      </header>

      <main className="bg-gray-100 min-h-screen">

        {/* Banner */}
        <section className="bg-teal-600 text-white py-20">
          <div className="max-w-6xl mx-auto text-center px-8">

            <h1 className="text-6xl font-bold">
              Sobre MEDIC FAB
            </h1>

            <p className="text-2xl mt-6 opacity-90">
              Calidad y confianza para profesionales de la salud.
            </p>

          </div>
        </section>

        <div className="max-w-6xl mx-auto px-8 py-16">

          {/* Historia */}
          <div className="bg-white rounded-3xl shadow-xl p-10 mb-12">

            <h2 className="text-4xl font-bold text-teal-700 mb-8">
              🏥 Nuestra Historia
            </h2>

            <p className="text-gray-700 text-xl leading-9">
              MEDIC FAB nació con el propósito de brindar a odontólogos,
              médicos, clínicas y profesionales de la salud acceso a
              productos originales y de alta calidad.
            </p>

            <p className="text-gray-700 text-xl leading-9 mt-8">
              Nuestro compromiso es ofrecer una experiencia de compra
              segura, atención personalizada y envíos a todo el Perú,
              convirtiéndonos en un aliado confiable para nuestros clientes.
            </p>

          </div>

          {/* Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-4xl font-bold text-teal-700 mb-8">
                🎯 Nuestra Misión
              </h2>

              <p className="text-gray-700 text-xl leading-9">
                Brindar productos médicos y odontológicos originales,
                ofreciendo calidad, confianza, atención personalizada
                y un servicio eficiente para los profesionales de la salud.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-4xl font-bold text-teal-700 mb-8">
                🌟 Nuestra Visión
              </h2>

              <p className="text-gray-700 text-xl leading-9">
                Ser una empresa referente en la distribución de productos
                médicos y odontológicos en el Perú, reconocida por la
                excelencia de nuestros productos y el compromiso con
                nuestros clientes.
              </p>

            </div>

          </div>

          {/* Valores */}
          <div className="bg-white rounded-3xl shadow-xl p-10 mt-12">

            <h2 className="text-4xl font-bold text-teal-700 mb-8">
              💚 Nuestros Valores
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-xl text-gray-700">

              <p>✔ Calidad</p>

              <p>✔ Confianza</p>

              <p>✔ Compromiso</p>

              <p>✔ Atención personalizada</p>

            </div>

          </div>

          {/* Envíos */}
          <div className="bg-teal-600 rounded-3xl text-white p-12 text-center mt-12">

            <h2 className="text-4xl font-bold">
              📦 Enviamos a todo el Perú
            </h2>

            <p className="text-xl mt-5">
              Atendemos pedidos de clínicas, consultorios,
              odontólogos y profesionales de la salud
              con rapidez y seguridad.
            </p>

            <a
              href="https://wa.me/51952260788"
              className="inline-block mt-8 bg-white text-teal-700 font-bold px-10 py-4 rounded-xl hover:bg-gray-100"
            >
              📞 Contactar por WhatsApp
            </a>

          </div>

        </div>

      </main>
    </>
  );
}