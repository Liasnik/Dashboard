import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { montserrat } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${montserrat.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg] md:h-16 md:w-16" />
      <p className="text-[44px]">FinCo.</p>
    </div>
  );
}
