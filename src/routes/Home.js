import Heroimg from '../components/Heroimg';
import Work from '../components/Work';
import AboutContent from '../components/AboutContent';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Heroimg/>
      <AboutContent/>
      <Work/>
    </div>
  )
}

export default Home
