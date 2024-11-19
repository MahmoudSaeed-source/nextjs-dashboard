import './ui/global.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="w-full h-[200px] justify-center align-start bg-blue-900">
        <div className="flex items-center justify-start p-2 ">
          {/* Add Hero Images Here */}
          <Image
            src="/global.png"
            width={200}
            height={200}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
