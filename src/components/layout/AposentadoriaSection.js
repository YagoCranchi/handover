import TitleBlock from '../TitleBlock';
import InfoCardList from '@/components/InfoCardList';
import GradientButton from '@/components/GradientButton';

export default function AposentadoriaSection() {
  return (
    <section className="flex flex-col items-center mt-8 border-b-2 border-[#D3D3D3]">
      <TitleBlock>
        O que falta para <strong>descongelar sua aposentadoria?</strong>
      </TitleBlock>
      <InfoCardList />
      <div className="mt-5 mx-11 mb-10">
        <GradientButton>
          Responda essas perguntas gratuitamente
        </GradientButton>
      </div>
    </section>
  );
}
