import Landing from '../components/Landing'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'
import BestSeller from '../components/Bestseller'

const Home = () => {
  return (
    <div>
      <Landing /> {/*HERO*/}
      <LatestCollection />
      {/* <BestSeller /> */}
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </div>
  )
}

export default Home