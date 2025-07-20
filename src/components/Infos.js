import TitleBlock from '@/components/TitleBlock';
import BeneficioCards from '@/components/BeneficioCards';

export default function Infos() {
  return (
    <section className="infos flex flex-col items-center mt-8 mb-10">
      <TitleBlock>
        Com o que mais você <strong>pode contar?</strong>
      </TitleBlock>
      <BeneficioCards />
    </section>
  );
}
