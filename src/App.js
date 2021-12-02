import './styles/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Favorites from './components/Favorites';

export default function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Favorites />
      <Footer />
    </div>
  );
}