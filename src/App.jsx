import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Collection from './pages/Collection';
import Contact from './pages/Contact'
import Product from './pages/Product';
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignedIn, SignUp, useAuth, useUser } from '@clerk/clerk-react';


const App = () => {

  {console.log('username: democheck@gmail.com')
  console.log('password: democheck123')}

  const { isSignedIn } = useAuth();
  
  if (!isSignedIn) {
    return <div className="flex justify-center items-center h-screen">
      <div className='signup h-screen w-full absolute'></div>
      <SignUp />
      <div className='demo bg-white/80 p-5 rounded-lg absolute right-5 bottom-4 font-bold text-black text-center'>
        <h1 className='text-xl font-extrabold'>For Demo check console</h1>
        <p className='text-sm font-medium'>(click SIGN-IN and copy paste details in console)</p>
      </div>
    </div> 
  }

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
      <SignedIn>
        <ToastContainer className='justify-center text-2xl  text-black font-bold text-center' />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
        <Footer />
      </SignedIn>
    </div>
  )
}

export default App
