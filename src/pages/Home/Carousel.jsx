import React from "react";
import '../../../src/style.css'
import {MDBCarousel, MDBCarouselItem, mdbbtn} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';

const Carousel = () => {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://wallpaperswide.com/download/dresden_elbe_river_germany_night-wallpaper-2560x1080.jpg'
        alt='img'
      >
        <h5>Cities</h5>
        <p>More Information about my Favourite Cities.</p>
        <Button href="/cities">More Info</Button>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://wallpaperswide.com/download/the_witcher_henry_cavill-wallpaper-2560x1080.jpg'
        alt='img'
      >
        <h5>Personality</h5>
        <p>More Information on my Favourite Personality.</p>
        <Button href="/personality">More Info</Button> 
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://a-static.besthdwallpaper.com/universal-studio-logo-s-sculpture-wallpaper-2560x1080-44692_14.jpg'
        alt='img'
      >
        <h5>Tourist Places</h5>
        <p>My Favourite Tourist Places.</p>
        <Button href="/tourist">More Info</Button> 
      </MDBCarouselItem>
      </MDBCarousel>
  );
}

export default Carousel