import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import CategoryList from '../components/categoryList/CategoryList'
import AuthProvider from '@/providers/AuthProviders'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'lazywriter',
  description: 'Tulis ide, pemikiran ataupun keluhanmu disini!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className='container'>
            <Navbar />
                <div className='wrapper'>
                  
                  {children}
                  
                </div>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
