import './styles/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Favorites from './components/Favorites';
import InformationBlock from './components/InformationBlock';
import Slider from './components/Slider';
import EmailSubscription from './components/EmailSubscription';

import Shoes from './img/orange_sneakers.png'
import Wood from './img/wood.png'
import Collage from './img/collage.png'
import Boots from './img/slider_boots.png'
import Runners from './img/slider_runners.png'
import Girl from './img/slider_girl.png'
import BootsBlack from './img/slider_boots_black.png'
import BootsWhite from './img/slider_boots_white.png'
import BootsRed from './img/slider_boots_red.png'
import RunningMan from './img/slider_running_man.png'
import GirlCollage from './img/slider_girl_boots_collage.png'
import StickersWall from './img/slider_weight_stickers_wall.png'

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
      <Slider
        header={'Shop The Collections'}
        itemsArray = {[
          {
            img: Boots,
            title: 'New Arrivals',
            p: 'The latest styles and limited edition colors that you can only find here (while they last, that is).'
          },
          {
            img: Runners,
            title: 'Natural Run Collection',
            p: 'Looking for more sustainable ways to break a sweat? We’ve got you covered from head to toe.'
          },
          {
            img: Girl,
            title: 'Fresh Long Sleeve Tee Colors',
            p: 'It’s crisp, clean and ready for wherever the day takes you.'
          },
          {
            img: Runners,
            title: 'Natural Run Collection',
            p: 'Looking for more sustainable ways to break a sweat? We’ve got you covered from head to toe.'
          },
        ]}
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
      <Slider
        styles={{
          container: {
            marginBottom: '13.8rem',
          },
          image: {
            backgroundColor: '#F5F5F5',
          },
          title: {
            marginBottom: '.6rem',
          }
        }}
        header={'New Arrivals'}
        itemsArray = {[
          {
            img: BootsBlack,
            title: 'Men\'s Trail Runner SWT',
            p: 'Classic Color, Natural Black'
          },
          {
            img: BootsWhite,
            title: 'Women\'s Trail Runner SWT',
            p: 'Classic Color, Natural White'
          },
          {
            img: BootsRed,
            title: 'Men\'s Trail Runner SWT',
            p: 'Limited Edition Color, Diablo'
          },
          {
            img: BootsWhite,
            title: 'Women\'s Trail Runner SWT',
            p: 'Classic Color, Natural White'
          },
        ]}
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
      <Slider
        styles={{
          container: {
            marginBottom: '18.6rem',
          },
          header: {
            fontWeight: '400',
          },
        }}
        header={'New Arrivals'}
        itemsArray = {[
          {
            img: RunningMan,
            title: 'Planet-Friendly Activewear',
            p: 'The Natural Run Collection is made with sustainable materials that can stand up to your toughest workout.'
          },
          {
            img: GirlCollage,
            title: 'adidas and Allbirds',
            p: 'Learn more about FUTURECRAFT.FOOTPRINT, our collaborative shoe coming soon.'
          },
          {
            img: StickersWall,
            title: 'Now any brand can use our Carbon Footprint tools to label their emissions.'
          },
          {
            img: GirlCollage,
            title: 'adidas and Allbirds',
            p: 'Learn more about FUTURECRAFT.FOOTPRINT, our collaborative shoe coming soon.'
          },
        ]}
      />
      <EmailSubscription />
      <Footer />
    </div>
  );
}