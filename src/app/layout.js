import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import CategoryList from './component/categoryList/CategoryList'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'lazywriter',
  description: 'Tulis ide, pemikiran ataupun keluhanmu disini!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          {/* <div className='layer'> */}
            {/* <CategoryList /> */}
              <Navbar />
              <div className='wrapper'>
                
                {children}
                
              </div>
              <Footer />
          {/* </div> */}
        </div>
      </body>
    </html>
  )
}
