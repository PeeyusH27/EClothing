import Landing from '../components/Landing'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'
// import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div className='w-full'>
      <Landing /> {/*HERO*/}
      <LatestCollection />
      <OurPolicy />
      <NewsLetter />
    </div>
  )
}

export default Home