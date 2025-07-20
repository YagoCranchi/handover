import TitleBlock from '@/components/TitleBlock';
import BeneficioCards from '@/components/BeneficioCards';

export default function Infos() {
  return (
    <section className="infos flex flex-col items-center mt-8 mb-10">
      <div className='text-[24px] text-center'>
        <TitleBlock>
          Com o que mais você <strong>pode contar?</strong>
        </TitleBlock>
      </div>
      <BeneficioCards />
    </section>
  );
}
