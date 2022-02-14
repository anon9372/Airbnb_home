import React from 'react';
import '../src/App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Image from "../src/img/image12.png"
import data from "../src/Components/data"
import './Components/Card.css'


function App() {



  const cardData = data.map((cdata) => {

    // console.log(cdata)
    return (
      <Card img={Image}
        key={cdata.id}
        rating={cdata.stats.rating}
        reviewCount={cdata.stats.reviewCount}
        country={cdata.country}
        title={cdata.title}
        price={cdata.price}
        openSport={cdata.openSpots}
        location={cdata.location}
      // cdata={cdata}
      />

    )

  })




  return (
    <div className='full-body'>
      <Navbar />
      <Hero />

      <section className='cards-list'>
        {cardData}
      </section>

    </div >
  )
}

export default App;
