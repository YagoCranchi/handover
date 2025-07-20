import React from 'react';
import Image from 'next/image';

const infoCards = [
  {
    icon: '/warn-circle.svg',
    title: 'Escolher a melhor regra',
    description: 'É melhor aposentar por idade ou por tempo de contribuição?'
  },
  {
    icon: '/warn-circle.svg',
    title: 'Precisa contribuir mais?',
    description: 'Continuar pagando o INSS pode aumentar seu salário?'
  },
  {
    icon: '/warn-circle.svg',
    title: 'Precisa complementar?',
    description: 'É necessário complementar salários antigos abaixo do mínimo?'
  },
  {
    icon: '/warn-circle.svg',
    title: 'Preparar os documentos',
    description: 'Quais documentos preciso para resolver os indicadores de risco?'
  }
];

export default function InfoCardList() {
  return (
    <ul className="flex flex-col items-center gap-4 w-full
                   max-w-[360px] mx-auto mt-5 px-5
                   sm:flex-row sm:max-w-[1250px]">
      {infoCards.map((card, idx) => (
        <li 
          key={idx}
          className="bg-white rounded-2xl p-4 w-full min-h-[88px] 
                     shadow-[0_0px_5px_rgba(0, 0, 0, 0.4)]
                     border-l-4 border-l-[#3C3A80]"
        >
          <div className="flex">
            <div className="flex items-center justify-center w-6 h-6 mr-1">
                <Image src={card.icon} className='w-full h-full' alt="teste" width={50} height={50} />
            </div>
            <span className="font-montserrat font-semibold text-[18px]
                             leading-[1.2] tracking-[0.3px] text-[#3C3A80]">
              {card.title}
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-montserrat text-[15px] leading-[1.4] text-[#515054]">
              {card.description}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
