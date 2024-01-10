import React from 'react'
import Hero from '../components/Hero/Hero'
import Emailsub from '../components/emailsub/Emailsub';
import Instaapi from '../components/Instaapi/Instaapi';
import Faq from '../components/FAQ/Faq';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/footer/Footer';
const Home = () => {
  return (
    <div>
     <Carousel/>
    <Hero/>
    <Instaapi/>
    <Emailsub/>
     <Faq/>
     <Footer />
     {/* menu={menu} setMenu={setMenu}  */}
    </div>
  )
}

export default Home