
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';
export default function Navbar() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link href="/"><a className="font-bold">BaccaratPredictor</a></Link>
        <Link href="/buy"><a>{t('cta_button')}</a></Link>
      </div>
      <div className="flex items-center space-x-4">
        <LanguageSwitcher />
        <Link href="/login"><a>Login</a></Link>
      </div>
    </nav>
  );
}
