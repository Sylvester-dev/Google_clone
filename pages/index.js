import Head from "next/head";
import Avatar from "../components/Avatar";
import {
  ViewGridIcon,
  MicrophoneIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <div className='flex flex-col items-center justify-center h-screen '>
      <Head>
        <title>GoogLe clone</title>
        <meta name='description' content='Generated by create next app' />
        <link
          rel='icon'
          href='https://image.pngaaa.com/358/1024358-middle.png'
        />
      </Head>

      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* left section */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* right section */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

          {/* Avatar */}
          <Avatar url='https://lh3.googleusercontent.com/ogw/ADea4I5Q9wujLLnva-QYg5htTjQAf8ABVipO27aq-qWa=s32-c-mo' />
        </div>
      </header>

      {/* Body */}
      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
          width={300}
          height={100}
        />

        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input
            ref={searchInputRef}
            type='text'
            className='focus:outline-none flex-grow'
          />
          <MicrophoneIcon className='h-4' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>
            Google Search
          </button>
          <button onClick={search} className='btn'>
            I'm feeling lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
