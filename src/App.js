import './styles/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Favorites from './components/Favorites';
import InformationBlock from './components/InformationBlock';

import Shoes from './img/orange_sneakers.png'
import Wood from './img/wood.png'
import Collage from './img/collage.png'
import EmailSubscription from './components/EmailSubscription';

export default function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Favorites />
      <InformationBlock
        img={Shoes}
        title={'Seasons Change. Your Shoes Don’t Have To.'}
        paragraph={'Soft and cozy wool shoes to keep you comfortable all year round.'}
        buttons={[
          {
            link: '/',
            name: 'shop men'
          },
          {
            link: '/',
            name: 'shop women'
          }
        ]}

        styles={{
          para: {
            fontWeight: 700,
          }
        }}
      />
      <InformationBlock
        img={Wood}
        title={'Made From Nature, For Nature'}
        paragraph={'We craft with planet-friendly natural materials, like merino wool and eucalyptus trees, because they\'re our best chance for a sustainable future.'}
        buttons={[
          {
            link: '/',
            name: 'See How'
          },
        ]}

        styles={{
          image: {
            marginBottom: '4.4rem',
          },
          title: {
            marginBottom: '2.2rem',
          },
          para: {
            marginBottom: '2.6rem',
            maxWidth: '65.5rem'
          },
        }}
      />
      <InformationBlock
        img={Collage}
        title={'Reversing Climate Change Through Better Business'}
        paragraph={'Reducing our environmental impact has been a top priority since day one. But now, we’re taking things further. Explore our overall sustainability approach, our progress thus far, and our bold list of commitments for 2025.'}
        buttons={[
          {
            link: '/',
            name: 'Our Sustainable Practices'
          },
        ]}

        styles={{
          image: {
            marginBottom: '5.2rem',
          },
          title: {
            marginBottom: '1.6rem',
            maxWidth: '65rem'
          },
          para: {
            marginBottom: '2.6rem',
            maxWidth: '64.5rem'
          },
        }}
      />
      <EmailSubscription />
      <Footer />
    </div>
  );
}