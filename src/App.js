import './App.css';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Howwemet from './Components/Howwemet';
import Official from './Components/Official';
import Rsvp from './Components/Rsvp';

function App() {
  return (
    <div className='body'>
      <Banner />
      <Howwemet />
      <Official />
      <Rsvp />
      <Footer/>
    </div>

  );
}

export default App;
