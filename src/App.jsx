

import { listTools, listProyek } from './data';
import DataImage from './data';

function App() {

  return (
    <>
      {/* Hero */}
      <div className="hero grid grid-cols-1 items-center gap-6 pt-10 md:grid-cols-2 xl:gap-0">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="mb-6 flex w-fit items-center gap-3 rounded-2xl bg-zinc-800 p-4">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Wiwok de tok, Not onle tok de tok</q>
          </div>

          <h1 className="mb-6 text-5xl/tight font-bold">
            Halo, Saya Irsyad Syafiq
          </h1>

          <p className="mb-6 text-base/loose opacity-50">
            Saya mempunyai ketertarikan dalam bidang Programming dan Designer,
            terutama pada pembuatan Website dan Desain seperti Poster, Pamflet
            serta Banner, ketertarikan pada bidang ini sudah berlangsung lebih
            dari 4 Tahun untuk semua Bidang.
          </p>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#"
              className="rounded-2xl bg-violet-700 p-4 hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>

            <a
              href="#proyek"
              className="rounded-2xl bg-zinc-700 p-4 hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-full animate__animated animate__fadeInUp animate__delay-4s md:ml-auto md:w-11/12"
          loading="lazy"
        />
      </div>

      {/* Tentang Saya */}
      <section id="tentang" className="tentang mt-32">
        <h1
          className="mb-6 text-center text-4xl/snug font-bold" data-aos="fade-up" data-aos-duration="1000" >
          Tentang Saya
        </h1>

        <div
          className="mx-auto w-full rounded-lg bg-zinc-800 p-7 lg:w-3/4 xl:w-2/3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="mb-10 w-12 rounded-md sm:hidden"
            loading="lazy"
          />

          <p className="mb-10 text-base/loose">
            Hi, perkenalkan saya Irsyad Syafiq, seorang Full Stack Web Developer
            dan Designer untuk UI/UX Design maupun Product Digital. Saya percaya
            bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga
            setiap proyek yang saya kembangkan tidak hanya terlihat menarik
            tetapi juga memberikan pengalaman pengguna yang optimal.
          </p>

          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="hidden w-12 rounded-md sm:block"
              loading="lazy"
            />

            <div className="flex items-center gap-6">
              <div>
                <h2 className="mb-1 text-4xl">
                  45<span className="text-violet-500">+</span>
                </h2>
                <p>Proyek Selesai</p>
              </div>

              <div>
                <h2 className="mb-1 text-4xl">
                  4<span className="text-violet-500">+</span>
                </h2>
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
            Tools yang dipakai
          </h2>

          <p
            className="w-full text-base/loose opacity-50 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut beberapa tools yang saya pakai untuk mengikuti tutorial ini.
          </p>

          <div className="tools-box mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listTools.map((tool) => (
              <div
                className="group flex items-center gap-2 rounded-md border border-zinc-600 p-3 hover:bg-zinc-800"
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
      <div id="proyek" className="proyek mt-32 py-10">
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
          Berikut ini beberapa proyek yang pernah saya buat.
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
                    <p
                      className="rounded-md border border-zinc-500 bg-zinc-600 px-3 py-1 font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="block rounded-lg border border-zinc-600 bg-violet-700 p-3 hover:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kontak */}
      <div id="kontak" className="kontak mt-32 p-0">
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
          Mari terhubung dengan saya
        </p>

        <form
          action="https://formsubmit.co/irsyadsyafiq2012@gmail.com"
          method="POST"
          className="mx-auto w-full rounded-md bg-zinc-800 p-10 sm:w-fit"
          autoComplete="off"
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
                className="rounded-md border border-zinc-500 p-2"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Example@gmail.com"
                className="w-full rounded-md border border-zinc-500 p-2"
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
                className="rounded-md border border-zinc-500 p-2"
                required
              ></textarea>
            </div>

            <div className="w-full cursor-pointer rounded-lg border border-zinc-600 bg-violet-700 p-3 text-center hover:bg-violet-600">
              <button type="submit">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
