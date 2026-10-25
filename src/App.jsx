
import { listTools, listProyek } from "./data";
import DataImage from "./data";

function App() {
  return (
    <>
      {/* Hero */}
      <div className="hero grid grid-cols-1 items-center gap-6 pt-10 md:grid-cols-2 xl:gap-0">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          {/* Creative Label */}
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            ✳ Digital Creator / Portfolio 2026
          </p>

          {/* Profile Quote */}
          <div className="mb-6 flex w-fit items-center gap-3 rounded-2xl bg-zinc-800 p-4">
            <img
              src={DataImage.HeroImage}
              alt="Profil Irsyad Syafiq"
              className="w-10 rounded-md"
            />
            <q>Wiwok de tok, Not onle tok de tok</q>
          </div>

          <h1 className="mb-6 text-5xl/tight font-bold">
            Halo, Saya Irsyad Syafiq
          </h1>

          <p className="mb-6 text-base/loose opacity-70">
            Saya tertarik pada bidang programming dan desain, terutama
            pengembangan website, UI/UX, serta desain digital seperti poster,
            pamflet, dan banner. Saya telah menekuni bidang ini selama lebih
            dari 1 tahun.
          </p>

          {/* Specializations Card */}
          

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-zinc-300">
                <i className="ri-code-s-slash-line mr-2 text-blue-400"></i>
                Web Development
              </span>

              <span className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-zinc-300">
                <i className="ri-palette-line mr-2 text-blue-400"></i>
                UI/UX Design
              </span>

              <span className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-zinc-300 ">
                <i className="ri-brush-line mr-2 text-blue-400 "></i>
                Creative Design
              </span>
            </div>
          

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#proyek"
              className="rounded-2xl bg-zinc-700 p-4 transition hover:bg-zinc-600"
            >
              Lihat Proyek{" "}
              <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Visual utama portofolio Irsyad Syafiq"
          className="w-full animate__animated animate__fadeInUp animate__delay-4s md:ml-auto md:w-11/12 rounded-4xl"
        />
      </div>

      {/* Tentang Saya */}
      <section id="tentang" className="tentang mt-32">
        <h2
          className="mb-6 text-center text-4xl/snug font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Tentang Saya
        </h2>

        <div
          className="mx-auto w-full rounded-lg bg-zinc-800 p-7 lg:w-3/4 xl:w-2/3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={DataImage.HeroImage}
            alt="Profil Irsyad Syafiq"
            className="mb-10 w-12 rounded-md sm:hidden"
            loading="lazy"
          />

          <p className="mb-10 text-base/loose">
            Hai, perkenalkan saya Irsyad Syafiq, seorang Full Stack Web
            Developer dan Designer yang tertarik pada UI/UX Design serta
            produk digital. Saya percaya bahwa desain dan fungsionalitas
            harus berjalan beriringan, sehingga setiap proyek tidak hanya
            terlihat menarik, tetapi juga memberikan pengalaman pengguna
            yang baik.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6">
            <img
              src={DataImage.HeroImage}
              alt="Profil Irsyad Syafiq"
              className="hidden w-12 rounded-md sm:block"
              loading="lazy"
            />

            <div className="flex items-center gap-6">
              <div>
                <h3 className="mb-1 text-4xl">
                  45<span className="text-violet-500">+</span>
                </h3>
                <p>Proyek Selesai</p>
              </div>

              <div>
                <h3 className="mb-1 text-4xl">
                  1<span className="text-violet-500">+</span>
                </h3>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="tools mt-32">
          <h2
            className="mb-4 text-4xl/snug font-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools yang Digunakan
          </h2>

          <p
            className="w-full text-base/loose opacity-50 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut beberapa tools yang saya gunakan dalam proses
            pengembangan website dan desain digital.
          </p>

          <div className="tools-box mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listTools.map((tool) => (
              <div
                className="group flex items-center gap-2 rounded-md border border-zinc-600 p-3 transition hover:bg-zinc-800"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />

                <div>
                  <h3 className="font-bold">{tool.nama}</h3>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyek */}
      <section id="proyek" className="proyek mt-32 py-10">
        <h2
          className="mb-2 text-center text-4xl font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Proyek
        </h2>

        <p
          className="text-center text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Berikut beberapa proyek yang pernah saya kerjakan.
        </p>

        <div className="proyek-box mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {listProyek.map((proyek) => (
            <div
              className="rounded-md bg-zinc-800 p-4"
              key={proyek.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img
                src={proyek.gambar}
                alt={proyek.nama}
                className="mt-4"
                loading="lazy"
              />

              <div>
                <h3 className="my-4 text-2xl font-bold">
                  {proyek.nama}
                </h3>

                <p className="mb-4 text-base/loose">
                  {proyek.desk}
                </p>

                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <span
                      className="rounded-md border border-zinc-500 bg-zinc-600 px-3 py-1 text-sm font-semibold"
                      key={index}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <a
                    href={proyek.link || "#"}
                    target={proyek.link ? "_blank" : undefined}
                    rel={proyek.link ? "noreferrer" : undefined}
                    className="block rounded-lg border border-zinc-600 bg-violet-700 p-3 transition hover:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="kontak mt-32">
        <h2
          className="mb-2 text-center text-4xl font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Kontak
        </h2>

        <p
          className="mb-10 text-center text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Mari terhubung dengan saya.
        </p>

        <form
          action="https://formsubmit.co/irsyadsyafiq2012@gmail.com"
          method="POST"
          className="mx-auto w-full rounded-md bg-zinc-800 p-6 sm:w-fit sm:p-10"
          autoComplete="on"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="nama">Nama lengkap</label>
              <input
                type="text"
                name="nama"
                id="nama"
                placeholder="Masukkan nama..."
                className="rounded-md border border-zinc-500 bg-zinc-900 p-2"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="nama@example.com"
                className="w-full rounded-md border border-zinc-500 bg-zinc-900 p-2"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="pesan">Pesan</label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan Anda..."
                className="rounded-md border border-zinc-500 bg-zinc-900 p-2"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg border border-zinc-600 bg-violet-700 p-3 text-center transition hover:bg-violet-600"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </section>

      {/* Download CV */}
      <section
        id="download-cv"
        className="mt-32 px-4 py-10 text-center"
      >
        <h2 className="mb-3 text-3xl font-bold">
          Tertarik dengan Profil Saya?
        </h2>

        <p className="mb-6 opacity-50">
          Unduh CV saya untuk mengetahui lebih lanjut.
        </p>


<a
  href="/cv.png"
  download="CV-Irsyad-Syafiq.jpg"
  className="inline-flex items-center gap-2 rounded-xl bg-violet-700 p-4 transition hover:bg-violet-600"
>
  Download CV
  <i className="ri-download-line ri-lg"></i>
</a>

      </section>
    </>
  );
}

export default App;
