import AvailableCities from '@/components/AvailableCities'
import Banner from '@/components/Banner'
import Category from '@/components/Category'
import ContactPage from '@/components/ContactPage'
import Featured from '@/components/Featured'
import FeaturedAgent from '@/components/FeaturedAgent'
import Sponsors from '@/components/Sponsors'
import Testimonial from '@/components/Testimonial'
import WorkProcess from '@/components/WorkProcess'
import Image from 'next/image'

export default function Home() {
  return (
   <main className='max-w-7xl mx-auto'>
     {/* <Header></Header> */}
     <Banner></Banner>
     <Category></Category>
     <Featured></Featured>
     <AvailableCities></AvailableCities>
     <WorkProcess></WorkProcess>
     <FeaturedAgent></FeaturedAgent>
     <Testimonial></Testimonial>
     <Sponsors></Sponsors>
    <ContactPage></ContactPage>
     
   </main>
  )
}
