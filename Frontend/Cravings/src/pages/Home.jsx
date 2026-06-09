import FeaturedRestaurants from "../components/FeaturedRestaurants"
import HeroSection from "../components/HeroSection"
import PartnerSection from "../components/PartnerSection"
import ReviewSection from "../components/ReviewSection"
import StatsSection from "../components/StatsSection"

function Home() {
  return (
    <> 
    <HeroSection/>
    <FeaturedRestaurants/>
    <StatsSection/>
    <ReviewSection/>
    <PartnerSection/>
    </>
  )
}

export default Home