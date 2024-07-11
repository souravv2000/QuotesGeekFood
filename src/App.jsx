import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import quoteData from './quotes.json';
import Quote from './Quote.jsx';
import NavSection from './nav.jsx'
import Footer from './footer.jsx'
import logoIpsum from './assets/logoipsum.svg'

function App() {

  return (
    <>
      <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <NavSection />
        <div className='QuoteContainer'>
        {quoteData.map((quoteObj,index)=>(
          <Quote key={index} quote={quoteObj.quote} author={quoteObj.author} />
        ))}
        </div>
        <Footer 
      logoIpsum={logoIpsum}
      footerPara="Lorem ipsum dolor sit amet consectetur adipisicing elite. incidunt consequuntur amet culpa cum itaque neque."
      list1="About" list2="Careers" list3="History" list4="Services" list5="Projects" list6="Blogs"
      icon1={<i class="fa-brands fa-facebook"></i>}
      icon2={<i class="fa-brands fa-twitter"></i>}
      icon3={<i class="fa-brands fa-instagram"></i>}
      icon4={<i class="fa-brands fa-github"></i>}
      icon5={<i class="fa-brands fa-linkedin"></i>}
      />
      </div>
    </>
  )
}

export default App
