export default function TirzepatidaZPHCDPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      {/* ================= HEADER ================= */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-5">

          <a
            href="/"
            className="text-2xl md:text-3xl font-bold text-teal-700"
          >
            MEDIC FAB
          </a>

          <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-700">

            <a
              href="/"
              className="hover:text-teal-700 transition"
            >
              Inicio
            </a>

            <a
              href="/#productos"
              className="hover:text-teal-700 transition"
            >
              Productos
            </a>

            <a
              href="/nosotros"
              className="hover:text-teal-700 transition"
            >
              Nosotros
            </a>

            <a
              href="https://wa.me/51952260788"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-teal-700 px-5 py-2.5 text-white hover:bg-teal-800 transition"
            >
              Contacto
            </a>

          </nav>

        </div>
      </header>


      {/* ================= BREADCRUMB ================= */}
      <section className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 text-sm text-gray-500">

          <a href="/" className="hover:text-teal-700">
            Inicio
          </a>

          <span className="mx-2">›</span>

          <a href="/#productos" className="hover:text-teal-700">
            Productos
          </a>

          <span className="mx-2">›</span>

          <span className="font-semibold text-teal-700">
            Tirzepatida ZPHCD
          </span>

        </div>

      </section>


      {/* ================= PRODUCTO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* IMAGEN */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">

            <div className="flex justify-center items-center bg-gray-50 rounded-2xl p-6 md:p-10">

              <img
                src="/tirzepatida-zphcd.png"
                alt="Tirzepatida ZPHCD 15 mg"
                className="w-full max-w-[520px] object-contain hover:scale-105 transition duration-500"
              />

            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">

              <div className="rounded-xl bg-teal-50 p-3">
                <p className="text-xs text-gray-500">
                  Presentación
                </p>
                <p className="font-bold text-teal-700">
                  15 mg
                </p>
              </div>

              <div className="rounded-xl bg-teal-50 p-3">
                <p className="text-xs text-gray-500">
                  Estado
                </p>
                <p className="font-bold text-green-600">
                  En stock
                </p>
              </div>

              <div className="rounded-xl bg-teal-50 p-3">
                <p className="text-xs text-gray-500">
                  Envíos
                </p>
                <p className="font-bold text-teal-700">
                  Perú
                </p>
              </div>

            </div>

          </div>


          {/* INFORMACIÓN PRINCIPAL */}
          <div className="bg-white rounded-3xl shadow-xl p-7 md:p-10">

            <div className="flex flex-wrap gap-3 mb-6">

              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                🔥 OFERTA
              </span>

              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                ✓ EN STOCK
              </span>

            </div>


            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              MEDIC FAB
            </p>


            <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
              Tirzepatida ZPHCD
            </h1>

            <p className="text-xl text-gray-500 mt-3">
              Presentación de 15 mg
            </p>


            {/* PRECIO */}
            <div className="mt-8 border-y py-7">

              <p className="text-lg text-gray-400 line-through">
                Antes: S/550.00
              </p>

              <div className="flex flex-wrap items-end gap-4">

                <p className="text-5xl md:text-6xl font-bold text-red-600">
                  S/490.00
                </p>

                <span className="mb-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                  Ahorras S/60
                </span>

              </div>

            </div>


            {/* DATOS */}
            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
                  Principio activo
                </p>

                <p className="mt-1 font-bold">
                  Tirzepatida
                </p>
              </div>


              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
                  Presentación
                </p>

                <p className="mt-1 font-bold">
                  15 mg
                </p>
              </div>


              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
                  Administración
                </p>

                <p className="mt-1 font-bold">
                  Subcutánea
                </p>
              </div>


              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
                  Disponibilidad
                </p>

                <p className="mt-1 font-bold text-green-600">
                  En stock
                </p>
              </div>

            </div>


            {/* WHATSAPP */}
            <a
              href="https://wa.me/51952260788"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center bg-green-600 hover:bg-green-700 text-white text-xl md:text-2xl font-bold py-5 rounded-2xl shadow-lg transition"
            >
              💬 CONSULTAR POR WHATSAPP
            </a>


            <p className="text-center text-sm text-gray-500 mt-4">
              Consulta disponibilidad, presentación y condiciones de compra.
            </p>

          </div>

        </div>

      </section>


      {/* ================= DESCRIPCIÓN ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16">

        <div className="bg-white rounded-3xl shadow-xl p-7 md:p-10">

          <p className="text-sm font-bold uppercase tracking-wider text-teal-600">
            Información del producto
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            ¿Qué es la tirzepatida?
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            La tirzepatida es un principio activo que actúa sobre los
            receptores GIP y GLP-1, relacionados con la regulación del
            apetito, la saciedad y el metabolismo de la glucosa.
          </p>

          <p className="text-lg text-gray-700 leading-8 mt-5">
            En las indicaciones aprobadas para el control del peso,
            su utilización se acompaña de alimentación adecuada y
            actividad física, siempre de acuerdo con la indicación
            de un profesional de la salud.
          </p>

        </div>

      </section>


      {/* ================= COMO FUNCIONA ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16">

        <div className="bg-white rounded-3xl shadow-xl p-7 md:p-10">

          <div className="text-center mb-10">

            <p className="text-sm font-bold uppercase tracking-wider text-teal-600">
              Tirzepatida
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              ¿Cómo funciona?
            </h2>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="rounded-2xl bg-gray-50 p-7">

              <div className="text-3xl font-bold text-teal-600">
                01
              </div>

              <h3 className="text-xl font-bold mt-5">
                Regulación del apetito
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Puede ayudar a disminuir la sensación de hambre
                y la ingesta de alimentos.
              </p>

            </div>


            <div className="rounded-2xl bg-gray-50 p-7">

              <div className="text-3xl font-bold text-teal-600">
                02
              </div>

              <h3 className="text-xl font-bold mt-5">
                Mayor saciedad
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Puede favorecer una sensación de llenura durante
                más tiempo.
              </p>

            </div>


            <div className="rounded-2xl bg-gray-50 p-7">

              <div className="text-3xl font-bold text-teal-600">
                03
              </div>

              <h3 className="text-xl font-bold mt-5">
                GIP + GLP-1
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Actúa sobre dos vías hormonales relacionadas con
                el metabolismo.
              </p>

            </div>


            <div className="rounded-2xl bg-gray-50 p-7">

              <div className="text-3xl font-bold text-teal-600">
                04
              </div>

              <h3 className="text-xl font-bold mt-5">
                Manejo del peso
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Ha demostrado eficacia para la reducción del peso
                en determinados pacientes.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CARACTERÍSTICAS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16">

        <div className="grid md:grid-cols-2 gap-8">

          {/* CARACTERÍSTICAS */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

            <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-7">
              Características
            </h2>

            <ul className="space-y-5 text-lg text-gray-700">

              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Presentación de 15 mg
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Producto sellado
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Presentación original
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Administración subcutánea
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                Uso bajo indicación profesional
              </li>

            </ul>

          </div>


          {/* INFORMACIÓN */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

            <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-7">
              Información
            </h2>

            <div className="space-y-5 text-lg text-gray-700">

              <p>
                <strong>Producto:</strong>{" "}
                Tirzepatida ZPHCD
              </p>

              <p>
                <strong>Principio activo:</strong>{" "}
                Tirzepatida
              </p>

              <p>
                <strong>Presentación:</strong>{" "}
                15 mg
              </p>

              <p>
                <strong>Administración:</strong>{" "}
                Subcutánea
              </p>

              <p>
                <strong>Disponibilidad:</strong>{" "}
                <span className="text-green-600 font-semibold">
                  En stock
                </span>
              </p>

              <p>
                <strong>Envíos:</strong>{" "}
                Todo el Perú
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EFECTOS ADVERSOS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16">

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

          <p className="text-sm font-bold uppercase tracking-wider text-teal-600">
            Seguridad
          </p>

          <h2 className="text-3xl font-bold mt-2">
            Posibles efectos adversos
          </h2>

          <p className="text-gray-600 text-lg mt-4 leading-8">
            Los efectos adversos más frecuentes pueden ser
            gastrointestinales.
          </p>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">

            {[
              "Náuseas",
              "Diarrea",
              "Vómitos",
              "Estreñimiento",
              "Dolor abdominal",
              "Disminución del apetito",
            ].map((effect) => (

              <div
                key={effect}
                className="rounded-2xl bg-gray-50 p-5 font-medium text-gray-700"
              >
                <span className="text-teal-600 mr-2">
                  •
                </span>

                {effect}
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= ADVERTENCIA ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16">

        <div className="rounded-3xl border border-red-200 bg-red-50 p-8 md:p-10">

          <div className="flex items-start gap-4">

            <div className="text-3xl">
              ⚠️
            </div>

            <div>

              <h2 className="text-2xl font-bold text-red-700">
                Advertencias importantes
              </h2>

              <div className="mt-5 space-y-4 text-gray-700 leading-7">

                <p>
                  El uso de tirzepatida debe realizarse bajo
                  indicación y supervisión de un profesional
                  de la salud.
                </p>

                <p>
                  No iniciar, aumentar ni modificar la dosis
                  por cuenta propia.
                </p>

                <p>
                  No combinar con otros productos que contengan
                  tirzepatida o agonistas GLP-1 salvo indicación médica.
                </p>

                <p>
                  Si utilizas otros medicamentos o tienes alguna
                  condición médica, consulta previamente con un
                  profesional de salud.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 pb-20">

        <div className="text-center mb-10">

          <p className="text-sm font-bold uppercase tracking-wider text-teal-600">
            Preguntas frecuentes
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Todo lo que necesitas saber
          </h2>

        </div>


        <div className="space-y-4">

          <details className="bg-white rounded-2xl shadow-md p-6">

            <summary className="cursor-pointer font-bold text-lg">
              ¿La tirzepatida sirve para bajar de peso?
            </summary>

            <p className="mt-4 text-gray-600 leading-7">
              La tirzepatida ha demostrado eficacia para la
              reducción del peso en determinados pacientes cuando
              se utiliza para indicaciones aprobadas y junto con
              cambios en el estilo de vida.
            </p>

          </details>


          <details className="bg-white rounded-2xl shadow-md p-6">

            <summary className="cursor-pointer font-bold text-lg">
              ¿Cómo se administra?
            </summary>

            <p className="mt-4 text-gray-600 leading-7">
              Se administra mediante inyección subcutánea.
              La dosis y frecuencia deben ser determinadas por
              un profesional de salud.
            </p>

          </details>


          <details className="bg-white rounded-2xl shadow-md p-6">

            <summary className="cursor-pointer font-bold text-lg">
              ¿Puedo comenzar directamente con 15 mg?
            </summary>

            <p className="mt-4 text-gray-600 leading-7">
              No debes determinar la dosis por cuenta propia.
              La dosis inicial y los incrementos deben establecerse
              de acuerdo con la indicación médica y la presentación
              específica del producto.
            </p>

          </details>


          <details className="bg-white rounded-2xl shadow-md p-6">

            <summary className="cursor-pointer font-bold text-lg">
              ¿Los resultados son iguales para todos?
            </summary>

            <p className="mt-4 text-gray-600 leading-7">
              No. La respuesta puede variar según cada persona,
              alimentación, actividad física, condiciones de salud
              y otros factores.
            </p>

          </details>

        </div>

      </section>


      {/* ================= CTA FINAL ================= */}
      <section className="bg-teal-700">

        <div className="max-w-5xl mx-auto px-6 py-16 text-center text-white">

          <p className="text-sm font-bold uppercase tracking-wider text-teal-200">
            MEDIC FAB
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            ¿Quieres más información?
          </h2>

          <p className="text-lg text-teal-100 mt-4 max-w-2xl mx-auto">
            Comunícate con nuestro equipo para consultar
            disponibilidad, presentación y condiciones de compra.
          </p>

          <a
            href="https://wa.me/51952260788"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-teal-700 font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:bg-gray-100 transition"
          >
            💬 Hablar por WhatsApp
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950 px-6 py-10 text-center">

        <p className="text-gray-400 text-sm leading-6 max-w-4xl mx-auto">
          La información presentada tiene carácter informativo y no
          sustituye la evaluación, diagnóstico ni prescripción de un
          profesional de la salud. El uso de medicamentos debe realizarse
          conforme a la indicación correspondiente y a la información
          técnica autorizada.
        </p>

        <p className="text-gray-500 text-sm mt-5">
          © {new Date().getFullYear()} MEDIC FAB. Todos los derechos reservados.
        </p>

      </footer>

    </main>
  );
}