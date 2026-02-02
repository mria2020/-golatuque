import { getDictionary } from "../../i18n/get-dictionary";
import { Locale } from "../../i18n/config";
import Link from "next/link";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex justify-between items-center transition-colors duration-300">
        <div className="flex items-center gap-1">
          <div className="relative flex items-center font-black text-2xl tracking-tighter">
            <span className="text-primary">G</span>
            <div className="relative">
              <span className="text-primary">O</span>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary text-[10px] material-symbols-rounded" style={{ fontSize: "14px" }}>location_on</span>
            </div>
            <span className="text-slate-900 dark:text-white">latuque</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-slate-400">
          <span className="cursor-pointer hover:text-primary transition-colors">FR</span>
          <span className="w-[1px] h-3 bg-slate-300 dark:bg-slate-700"></span>
          <span className="cursor-pointer hover:text-primary transition-colors">EN</span>
          <span className="w-[1px] h-3 bg-slate-300 dark:bg-slate-700"></span>
          <span className="cursor-pointer hover:text-primary transition-colors">ATIK</span>
          <button className="bg-primary text-white p-1.5 rounded-lg flex items-center justify-center ml-1 shadow-sm hover:bg-green-600 transition-colors">
            <span className="material-symbols-rounded text-sm">directions_bus</span>
          </button>
        </div>
      </header>

      <main className="flex-grow pt-[60px]">
        {/* Hero Section */}
        <section className="relative w-full h-[520px] overflow-hidden">
          <img
            alt="Vue aérienne de La Tuque avec forêt et rivière"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvwhwmMYrDVnUAq5v0l1eLELNApN18uhtq8UW8QAypbYRqBQopxtjkCqabiMvLKxW3J4yFsd11TI2FN9s_3LOZwx47C3SCguxT_dSDtxqFgT1tZeIigz7viBnMzaV7aP7l3IArZNK8Fb7Tn-Q2AQckLDsCzsr2fyhxKyUt8zmfXoG5C47ch-dO45FpG1KTku9AyZSG2S9bFx5qIElnax7h80eVp5BoPgm-MyhM8qlr04x6r41HT48ih2nKONNZNB2ONaIBEsUx1dI"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900/90"></div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-10 pb-20">
            <div className="mb-2 scale-110">
              <div className="relative flex items-center font-black text-4xl tracking-tighter drop-shadow-lg">
                <span className="text-primary">G</span>
                <div className="relative">
                  <span className="text-primary">O</span>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary material-symbols-rounded" style={{ fontSize: "20px" }}>location_on</span>
                </div>
                <span className="text-white">latuque</span>
              </div>
            </div>
            <p className="text-white/90 text-sm font-medium mb-1 drop-shadow-md">514-677-5200</p>
            <p className="text-white/80 text-xs mb-6 drop-shadow-md">Pas un taxi. Pas un Uber. La solution.</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight drop-shadow-lg">
              Voyagez mieux.<br />
              Travel better.<br />
              <span className="text-primary">Miro matcatan.</span>
            </h1>
            <p className="text-white/90 text-sm max-w-xs mx-auto mb-8 leading-relaxed font-medium drop-shadow-md">
              Reliable regional transport service for the La Tuque community. Simple, fast, and connected.
            </p>
            <Link href={`/${lang}/calculator`} className="bg-white hover:bg-gray-50 text-slate-900 w-full max-w-xs py-4 px-6 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
              <span className="material-symbols-rounded text-primary group-hover:scale-110 transition-transform">calculate</span>
              <span className="text-primary">Calculer mon trajet</span>
            </Link>
          </div>
        </section>

        {/* Status & Services */}
        <div className="relative z-20 -mt-10 px-4 space-y-5">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 flex items-center justify-between transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-2 rounded-full flex items-center justify-center">
                <span className="material-symbols-rounded">check_circle</span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100">État du service / Status</h3>
                <p className="text-xs text-green-600 dark:text-green-400 font-medium">Opérationnel / Normal</p>
              </div>
            </div>
            <span className="material-symbols-rounded text-slate-400">chevron_right</span>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3 px-1">Services</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-md border-b-4 border-primary hover:shadow-lg transition-all flex flex-col items-center justify-center gap-2 group">
                <div className="bg-green-50 dark:bg-slate-700 p-3 rounded-full group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-rounded text-primary text-3xl">schedule</span>
                </div>
                <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">Horaires</span>
              </button>
              <button className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-md border-b-4 border-secondary hover:shadow-lg transition-all flex flex-col items-center justify-center gap-2 group">
                <div className="bg-red-50 dark:bg-slate-700 p-3 rounded-full group-hover:bg-secondary/10 transition-colors">
                  <span className="material-symbols-rounded text-secondary text-3xl">payments</span>
                </div>
                <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">Tarifs</span>
              </button>
              <Link href={`/${lang}/map`} className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-md border-b-4 border-secondary hover:shadow-lg transition-all flex flex-col items-center justify-center gap-2 group">
                <div className="bg-red-50 dark:bg-slate-700 p-3 rounded-full group-hover:bg-secondary/10 transition-colors">
                  <span className="material-symbols-rounded text-secondary text-3xl">map</span>
                </div>
                <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">Carte</span>
              </Link>
              <button className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-md border-b-4 border-primary hover:shadow-lg transition-all flex flex-col items-center justify-center gap-2 group">
                <div className="bg-green-50 dark:bg-slate-700 p-3 rounded-full group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-rounded text-primary text-3xl">support_agent</span>
                </div>
                <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">Support</span>
              </button>
            </div>
          </div>

          <div className="pb-6">
            <div className="flex justify-between items-end mb-3 px-1">
              <h2 className="text-lg font-bold">Nouvelles / News</h2>
              <a className="text-xs text-primary font-medium hover:underline" href="#">Voir tout</a>
            </div>
            <article className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800">
              <div className="relative h-32 w-full">
                <img
                  alt="Route forestière en été"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl5bQHsx8sPhjRfekxkrnxQ4ggZxm256v6_thVnXvDdxNaWQVu8PsDrkHpXrnHeU5XOiQCIE3f5DyzYjDVcj9DjXSeDKD0w6J5DDYEXR3Fde6PiHGyHWzhx-MiIcVa_u9vSbsNmqNsPujILqwPj2N7sc2m0AR6nX4fmlO1mwn-3lbBZTTLFHT0nNo1AV4iPzyIRY6NVCdBp8H_rcTQVj3MgViu_I0Q63DE-nQCelnfuQbUZMrzZCnP4z0BBKYR8-7ruG6B_BDSvPA"
                />
                <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">Info</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Horaire d&apos;hiver en vigueur</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">Veuillez noter que les horaires d&apos;hiver sont maintenant effectifs pour toutes les lignes régionales à partir du 1er novembre.</p>
                <div className="mt-3 flex items-center gap-1 text-primary text-xs font-semibold group cursor-pointer">
                  Lire plus <span className="material-symbols-rounded text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 w-full bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-slate-800 pb-safe z-50">
        <div className="flex justify-around items-center px-2 py-2">
          <Link className="flex flex-col items-center gap-1 p-2 w-16 text-primary" href="#">
            <span className="material-symbols-rounded text-2xl">home</span>
            <span className="text-[10px] font-medium">Accueil</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 p-2 w-16 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors" href="#">
            <span className="material-symbols-rounded text-2xl">confirmation_number</span>
            <span className="text-[10px] font-medium">Billets</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 p-2 w-16 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors" href={`/${lang}/map`}>
            <span className="material-symbols-rounded text-2xl">map</span>
            <span className="text-[10px] font-medium">Carte</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 p-2 w-16 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors" href="#">
            <span className="material-symbols-rounded text-2xl">person</span>
            <span className="text-[10px] font-medium">Profil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
