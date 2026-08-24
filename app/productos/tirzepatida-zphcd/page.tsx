import Image from "next/image";
import Link from "next/link";

export default function TirzepatidaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">

          {/* IMAGEN */}
          <div className="flex justify-center">
            <div className="relative flex h-[430px] w-full max-w-[430px] items-center justify-center rounded-3xl bg-white p-8 shadow-sm">
              <Image
                src="/tirzepatida-zphcd.png"
                alt="Tirzepatida ZPHCD 15 mg"
                width={430}
                height={430}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div>
            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              MEDIC FAB
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Tirzepatida ZPHCD
              <span className="block text-blue-600">15 mg</span>
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Tirzepatida para el manejo del peso y el metabolismo,
              bajo indicación y supervisión de un profesional de la salud.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Principio activo</p>
                <p className="mt-1 font-semibold">Tirzepatida</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Presentación</p>
                <p className="mt-1 font-semibold">15 mg</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Administración</p>
                <p className="mt-1 font-semibold">Subcutánea</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Atención</p>
                <p className="mt-1 font-semibold">MEDIC FAB</p>
              </div>
            </div>

            {/* PRECIO */}
            <div className="mt-8">
              <p className="text-sm text-gray-500">Precio</p>

              <div className="mt-1 flex items-center gap-3">
                <span className="text-4xl font-bold">
                  S/ XXX
                </span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  Disponible
                </span>
              </div>
            </div>

            {/* BOTÓN */}
            <a
              href="https://wa.me/519XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 block rounded-2xl bg-green-600 px-6 py-4 text-center text-lg font-bold text-white transition hover:bg-green-700"
            >
              Consultar por WhatsApp
            </a>

            <p className="mt-3 text-center text-xs text-gray-500">
              Consulta disponibilidad y condiciones de compra.
            </p>
          </div>
        </div>
      </section>

      {/* ¿QUÉ ES? */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Información
          </span>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            ¿Qué es la tirzepatida?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            La tirzepatida es un principio activo que actúa sobre los
            receptores GIP y GLP-1, relacionados con la regulación del
            apetito, la saciedad y el metabolismo de la glucosa.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            En las indicaciones aprobadas para el control del peso,
            su utilización se acompaña de alimentación adecuada y
            actividad física.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Tirzepatida
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              ¿Cómo funciona?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">01</div>
              <h3 className="mt-5 text-xl font-bold">
                Regula el apetito
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Puede ayudar a disminuir la sensación de hambre y
                la ingesta de alimentos.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">02</div>
              <h3 className="mt-5 text-xl font-bold">
                Mayor saciedad
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Puede favorecer una sensación de llenura durante
                más tiempo.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">03</div>
              <h3 className="mt-5 text-xl font-bold">
                GIP + GLP-1
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Actúa sobre dos vías hormonales relacionadas con
                el metabolismo.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">04</div>
              <h3 className="mt-5 text-xl font-bold">
                Manejo del peso
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Ha demostrado eficacia para la reducción del peso
                en determinados pacientes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRESENTACIÓN */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">

          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Presentación
            </span>

            <h2 className="mt-3 text-3xl font-bold">
              Tirzepatida ZPHCD 15 mg
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Producto presentado en una concentración de 15 mg.
              La administración y dosificación deben realizarse
              de acuerdo con la indicación correspondiente.
            </p>

            <div className="mt-7 space-y-4">

              <div className="flex items-center gap-4 rounded-2xl border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-600">
                  ✓
                </div>
                <span className="font-medium">
                  Presentación de 15 mg
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-600">
                  ✓
                </div>
                <span className="font-medium">
                  Administración subcutánea
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-600">
                  ✓
                </div>
                <span className="font-medium">
                  Uso bajo supervisión profesional
                </span>
              </div>

            </div>
          </div>

          <div className="rounded-3xl bg-gray-50 p-10">
            <h3 className="text-2xl font-bold">
              Importante
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              No iniciar, aumentar ni modificar la dosis sin la
              evaluación de un profesional de la salud.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              La respuesta al tratamiento puede variar entre
              personas.
            </p>
          </div>

        </div>
      </section>

      {/* EFECTOS ADVERSOS */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Seguridad
            </span>

            <h2 className="mt-3 text-3xl font-bold">
              Posibles efectos adversos
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Los efectos adversos más frecuentes pueden ser
              gastrointestinales.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">

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
                className="rounded-2xl bg-white p-5 font-medium shadow-sm"
              >
                {effect}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ADVERTENCIA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-red-200 bg-red-50 p-8 md:p-10">

          <h2 className="text-2xl font-bold text-red-700">
            ⚠️ Advertencias importantes
          </h2>

          <div className="mt-5 space-y-3 leading-7 text-gray-700">
            <p>
              El uso de tirzepatida debe realizarse bajo indicación
              y supervisión de un profesional de la salud.
            </p>

            <p>
              No combinar con otros productos que contengan
              tirzepatida o agonistas GLP-1 salvo indicación médica.
            </p>

            <p>
              Si presentas alguna condición médica, utilizas otros
              medicamentos o tienes dudas sobre su utilización,
              consulta previamente con un profesional de salud.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-16">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              FAQ
            </span>

            <h2 className="mt-3 text-3xl font-bold">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="mt-10 space-y-4">

            <details className="group rounded-2xl bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-bold">
                ¿La tirzepatida sirve para bajar de peso?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                La tirzepatida ha demostrado eficacia para la
                reducción del peso en determinados pacientes cuando
                se utiliza para indicaciones aprobadas y junto con
                cambios en el estilo de vida.
              </p>
            </details>

            <details className="group rounded-2xl bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-bold">
                ¿Cómo se administra?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                Se administra mediante inyección subcutánea.
                La dosis y frecuencia deben ser determinadas por
                un profesional de salud.
              </p>
            </details>

            <details className="group rounded-2xl bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-bold">
                ¿Puedo comenzar directamente con 15 mg?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                No debes determinar la dosis por cuenta propia.
                La dosis inicial y los incrementos deben establecerse
                de acuerdo con la indicación médica y la presentación
                específica del producto.
              </p>
            </details>

            <details className="group rounded-2xl bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-bold">
                ¿Los resultados son iguales para todos?
              </summary>

              <p className="mt-4 leading-7 text-gray-600">
                No. La respuesta puede variar según cada persona,
                alimentación, actividad física, condiciones de salud
                y otros factores.
              </p>
            </details>

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center text-white">

          <h2 className="text-3xl font-bold md:text-4xl">
            ¿Quieres más información?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Comunícate con MEDIC FAB para consultar disponibilidad,
            presentación y condiciones de compra.
          </p>

          <a
            href="https://wa.me/519XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 font-bold text-blue-600 transition hover:bg-gray-100"
          >
            Consultar por WhatsApp
          </a>

        </div>
      </section>

      {/* DISCLAIMER */}
      <footer className="bg-gray-950 px-6 py-10 text-center text-sm leading-6 text-gray-400">
        La información presentada tiene carácter informativo y no
        sustituye la evaluación, diagnóstico ni prescripción de un
        profesional de la salud. El uso de medicamentos debe realizarse
        conforme a la indicación correspondiente y a la información
        técnica autorizada.
      </footer>

    </main>
  );
}