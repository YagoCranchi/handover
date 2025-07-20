import Header from './Header';
import CardList from '../CardList';
import Image from 'next/image';

export default function Head() {
  return (
    <div className="bg-gradient-to-bl from-[#504DC5] to-[#3C3A80] rounded-b-3xl">
      <Header />
      <div className='text-white flex flex-col px-5 mt-[10px]'>
        <span className='text-2xl font-bold'>
          Visão geral
        </span>
        <span className="text-[#999999] font-montserrat text-sm">
          Simulado em 20/03/2025
        </span>
      </div>
      <CardList />
      <div className='text-white w-full mt-10 px-5 pb-5'>
        <Image src='/icecube.png' className='mx-auto' alt='teste' width={250} height={195} />
        <span className='text-[28px] mt-5 px-2 block text-center font-montserrat tracking-[0.3px] leading-[1.2]'>
          Seu benefício ainda está congelado!
        </span>
      </div>
    </div>
  );
}
