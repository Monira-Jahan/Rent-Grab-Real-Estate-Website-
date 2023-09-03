
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rent & Grab',
  description: 'Generated by create next app',
}

 function RootLayout({ children }) {
  return (
    <html lang="en" className="transition-all">
      <body className={inter.className} >
     <div className='max-w-7xl mx-auto'>
     <Header></Header>
     </div>
        {children}
      <Footer></Footer>
      
      </body>
    </html>
  )
}
export default RootLayout;
