import AvailableCities from '@/components/AvailableCities'
import Banner from '@/components/Banner'
import Category from '@/components/Category'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'

import Header from '@/components/Header'
import WorkProcess from '@/components/WorkProcess'
import Image from 'next/image'

export default function Home() {
  return (
   <div className='max-w-7xl mx-auto'>
     <Header></Header>
     <Banner></Banner>
     <Category></Category>
     <Featured></Featured>
     <AvailableCities></AvailableCities>
     <WorkProcess></WorkProcess>
     <Footer></Footer>
   </div>
  )
}
