import Image from 'next/image';

const cardData = [
    {
        label: 'Risco',
        text: "6 pontos",
        icon: '/warn.svg',
        alt: 'User Icon',
    },
    {
        label: 'Valor previsto',
        text: "R$ 3.000,00",
        icon: '/money.svg',
        alt: 'User Icon',
    },
    {
        label: 'Data prevista',
        text: "20/10/2025",
        icon: '/calendar.svg',
        alt: 'User Icon',
    },
];

export default function CardList() {
    return (
        <ul
        
            className="flex gap-3 mt-2 px-5 overflow-x-auto scrollbar-hide tracking-[0.3px] leading-[1.5] sm:justify-center"
            style={{
                WebkitOverflowScrolling: 'touch',
                display: 'flex',
                flexWrap: 'nowrap',
            }}
        >
            {cardData.map((item, idx) => (
                <li
                    key={idx}
                    className="flex-shrink-0 flex items-center rounded-xl p-4 bg-white w-[180px] h-[66px] gap-3 border border-[#EFEFF6] card-shadow"
                >
                    <div
                        className="flex items-center p-1 bg-[#3c3a8033] w-[20px] h-[20px] rounded-full justify-center border-1 border-[#3C3A80]"
                    >
                        <Image src={item.icon} className='w-full h-full' alt={item.alt} width={50} height={50} />
                    </div>
                    <div>
                        <span className="font-montserrat font-medium text-[16px] leading-[1.5] tracking-[0.3px] text-[#515054] w-[115px] h-[11px] align-stretch">{item.label}</span>
                        <p className="text-[#3C3A80] font-bold">{item.text}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
