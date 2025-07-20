import Image from 'next/image';

export default function Header() {
    return (
        <div className='flex justify-between
                        px-5 pt-3 pb-2
                        border-b-2 border-[#615DD5]'>
            <div className="flex gap-2">
                <div className='rounded-full bg-[#00000084] p-[7px] flex items-center justify-center'>
                    <Image src="/icon-user.svg" alt="User Icon" width={24} height={24} />
                </div>
                <div className='flex justify-center flex-col'>
                    <div className='text-white'>
                        Olá, <strong>João</strong>
                    </div>
                </div>
            </div>
            <Image src="/logo.svg" alt="Logo" width={80} height={16} />
        </div>
    );
}
