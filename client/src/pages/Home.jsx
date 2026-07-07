import Carousel from '../components/Carousel'
import TabCategories from '../components/TabCategories'
import Stats from '../components/Stats'
import HowItWorks from '../components/HowItWorks'
import FeaturedCompanies from '../components/FeaturedCompanies'
import Testimonials from '../components/Testimonials'
import CareerResources from '../components/CareerResources'

const Home = () => {
  return (
    <div>
      <Carousel />
      <Stats />
      <TabCategories />
      <HowItWorks />
      <FeaturedCompanies />
      <Testimonials />
      <CareerResources />
    </div>
  )
}

export default Home

