import Banner from '@/components/Banner'
import Category from '@/components/Category'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'

import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
   <div className='max-w-7xl mx-auto'>
     <Header></Header>
     <Banner></Banner>
     <Category></Category>
     <Featured></Featured>
     <Footer></Footer>
   </div>
  )
}
