
import { useRouter } from 'next/router';
export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;
  const switchLang = locale === 'zh' ? 'en' : 'zh';
  const handleSwitch = () => {
    router.push({ pathname, query }, asPath, { locale: switchLang });
  };
  return (
    <button onClick={handleSwitch} className="px-2 py-1 bg-gray-600 rounded">
      {locale === 'zh' ? 'EN' : '中文'}
    </button>
  );
}
