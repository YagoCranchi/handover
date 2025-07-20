import GradientButton from '@/components/GradientButton';
import TitleBlock from '@/components/TitleBlock';
import Image from 'next/image';

const cards = [
  {
    img: '/wallet.png',
    title: <span>Receba <strong>hoje mesmo</strong> com o pré-consignado</span>,
    desc: <>Confiamos tanto no sucesso da sua aposentadoria que começamos a te pagar a <b>partir de hoje</b> como garantia.</>,
    button: 'Simular o pré-consignado',
    disabled: false,
  },
  {
    img: '/review-benefit.png',
    title: <span>Revisão constante do <strong>seu benefício</strong></span>,
    desc: <>Por 10 anos, revisamos seu benefício sem custo para buscar melhorias.</>,
    button: 'Ativar revisão',
    disabled: true,
  },
  {
    img: '/fraud-protection.png',
    title: <span>Proteja sua aposentadoria <strong>contra fraudes</strong></span>,
    desc: <>Aposentadoria protegida: identificamos fraudes e garantimos o que é seu.</>,
    button: 'Ativar proteção',
    disabled: true,
  },
];

export default function BeneficioCards() {
  return (
    <ul className="flex flex-col items-center gap-5 mt-5 sm:flex-row sm:max-w-[1250px]">
      {cards.map((card, idx) => (
        <li key={idx} className="bg-white rounded-2xl p-6 w-[320px] border 
                                 shadow-[0_2px_8px_rgba(60,58,128,0.10)]
                                  border-[#E5E7EB] flex flex-col items-center">
          <div className="relative h-[130px] mb-5">
            <Image src={card.img} alt="Ícone" className="w-full h-full" width={500} height={500} />
            {card.disabled && (
              <div className='absolute top-0 right-[-25px] flex items-center
                              justify-center w-[32px] h-[32px] bg-[#D9D9D9] p-[8px] rounded-full'>
                <Image src="/lock.svg" alt="Bloqueado" className="w-full h-full" width={500} height={500} />
              </div>
            )}
          </div>
          <div className='text-[22px]'>
            <TitleBlock>
              {card.title}
            </TitleBlock>
          </div>
          <span className="font-montserrat text-[16px] leading-[1.5]
                           tracking-[0.3px] text-[#515054]
                           text-center mb-5 mt-2">
            {card.desc}
          </span>
          <GradientButton disabled={card.disabled}>{card.button}</GradientButton>
        </li>
      ))}
    </ul>
  );
}
