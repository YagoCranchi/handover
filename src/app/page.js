import Head from '@/components/layout/Head';
import AposentadoriaSection from '@/components/layout/AposentadoriaSection';
import Infos from '@/components/Infos';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Head />
      <AposentadoriaSection />
      <Infos />
      <Footer />
    </>
  );
}
