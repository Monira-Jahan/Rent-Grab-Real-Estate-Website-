import Banner from '@/components/Banner'

import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
   <div className='max-w-7xl mx-auto'>
     <Header></Header>
     <Banner></Banner>
   </div>
  )
}
