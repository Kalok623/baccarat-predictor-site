
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-100">
      <Head><title>{t('hero_title')}</title></Head>
      <section className="bg-gradient-to-r from-red-600 to-red-400 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">{t('hero_title')}</h1>
        <p className="text-xl mb-6">{t('hero_subtitle')}</p>
      </section>
      <section className="text-center py-16 bg-white">
        <h2 className="text-3xl font-bold mb-6">{t('user_reactions')}</h2>
        <div className="grid md:grid-cols-2 gap-6 justify-center">
          <div>
            <img src="/money.jpg" alt="Shut up and take my money" className="mx-auto rounded-xl shadow-lg w-72" />
            <p className="mt-2 text-lg font-semibold">{t('reaction1')}</p>
          </div>
          <div>
            <img src="/money2.webp" alt="Pepe with cash" className="mx-auto rounded-xl shadow-lg w-72" />
            <p className="mt-2 text-lg font-semibold">{t('reaction2')}</p>
          </div>
        </div>
      </section>
      <section className="bg-yellow-100 text-center py-12">
        <h2 className="text-2xl font-bold mb-4">{t('earn_title')}</h2>
        <p className="text-lg">{t('earn_subtext')}</p>
      </section>
    </div>
);
}
