export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="text-3xl font-bold text-teal-700">
            MEDIC FAB
          </h1>

          <nav className="space-x-8 font-medium">
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">Nosotros</a>
            <a href="#">Contacto</a>
          </nav>

        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-10 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Productos Médicos y Odontológicos
              <span className="text-teal-600">
                {" "}de Calidad
              </span>
            </h2>

            <p className="text-gray-600 mt-8 text-xl">
              Distribuimos productos odontológicos y médicos originales,
              ofreciendo garantía, seguridad y envíos a todo el Perú.
            </p>

            <div className="mt-10 flex gap-5">

              <a
                href="https://wa.me/51952260788"
                className="bg-teal-600 text-white px-8 py-4 rounded-xl hover:bg-teal-700"
              >
                Contactar por WhatsApp
              </a>

              <a
                href="#productos"
                className="border border-teal-600 text-teal-600 px-8 py-4 rounded-xl"
              >
                Ver Productos
              </a>

            </div>

          </div>

          <div className="flex justify-center">

            <img
              src="/logo.png.jpeg"
              className="w-96"
              alt="Medic Fab"
            />

          </div>

        </div>

      </section>
{/* Productos */}
<section
  id="productos"
  className="max-w-7xl mx-auto px-10 py-20"
>

<h2 className="text-4xl font-bold text-center mb-12">
Productos Destacados
</h2>

<div className="grid md:grid-cols-2 gap-10">

{/* Kerr */}
<div className="bg-white rounded-2xl shadow-lg overflow-hidden border">

<img
src="/kerr.jpg.png"
alt="Resina Kerr"
className="w-full h-96 object-cover"
/>

<div className="p-6">

<h3 className="text-2xl font-bold">
Kerr Herculite Precis
</h3>

<p className="text-gray-600 mt-3">
Resina compuesta de excelente estética,
alta resistencia y fácil manipulación.
</p>

<p className="text-2xl font-bold text-teal-600 mt-5">
S/ 90
</p>

<a
href="https://wa.me/51952260788"
className="inline-block mt-6 bg-teal-600 text-white px-6 py-3 rounded-xl"
>
Consultar
</a>

</div>
</div>

{/* Lidocaina */}

<div className="bg-white rounded-2xl shadow-lg overflow-hidden border">

<img
src="/lidocaina.jpg.png"
alt="Lidocaína"
className="w-full h-96 object-cover"
/>

<div className="p-6">

<h3 className="text-2xl font-bold">
Lidocaína New Stetic
</h3>

<p className="text-gray-600 mt-3">
Caja con 50 cartuchos.
Anestésico local con epinefrina 1:80.000.
</p>

<p className="text-2xl font-bold text-teal-600 mt-5">
Consultar precio
</p>

<a
href="https://wa.me/51952260788"
className="inline-block mt-6 bg-teal-600 text-white px-6 py-3 rounded-xl"
>
Consultar
</a>

</div>
</div>

<div className="bg-white rounded-2xl shadow-lg overflow-hidden border">

<img
src="/neurobion10000.png"
alt="Neurobión DC 10000"
className="w-full h-96 object-cover"
/>

<div className="p-6">

<h3 className="text-2xl font-bold">
Neurobión DC 10000
</h3>

<p className="text-gray-600 mt-3">
Producto original.
Presentación sellada.
Uso profesional.
</p>

<div className="mt-5">
  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
    OFERTA
  </span>

  <p className="text-gray-400 line-through text-lg mt-4">
    Antes: S/ 100.00
  </p>

  <p className="text-3xl font-bold text-red-600">
    Ahora: S/ 85.00
  </p>
</div>

<a
href="https://wa.me/51952260788"
className="inline-block mt-6 bg-teal-600 text-white px-6 py-3 rounded-xl"
>
Comprar por WhatsApp
</a>

</div>
</div>

</div>

</section>
    </main>
  );
}
