import React from 'react';

//css
import './App.css';

//components
import Navbar from './components/header/navbar';
import ProductGallary from './components/productGallary/productGallary';

//assets
import casio from './assets/casio.webp';
import timeweare from './assets/timewear.webp';
import matrix from './assets/matrix.webp';
import topFashion from './assets/topFashion.webp';
import ibso from './assets/ibso.webp';


function App() {

  const products = [
    {
      name:"Casio",
      description:'Vintage Series Digital Grey Dial Mens Watch-A-158WA-1Q',
      rating:'28,923',
      price:'1,694',
      oldPrice:'1,695',
      dealOfTheDay:false,
      buyItem:2,
      getOff:10,
      deleveryDate:'Saturday, January 28',
      isPrime:true,
      coupon:'',
      img:casio,
      isFreeDel:false,
      avgRate:4.2,
    
    },
    {
      name:"TIMEWEAR",
      description:'Analog New Track Number Dial Day Date Functioning Leather Strap Watch',
      rating:'31',
      price:'349',
      oldPrice:'1,499',
      offPercentage:77,
      dealOfTheDay:true,
      deleveryDate:'Saturday, January 28',
      isPrime:false, 
      coupon:'5%',
      isFreeDel:true,
      img:timeweare,
      avgRate:4.5,
    },
    {
      name:"Matrix",
      description:'Analog Day & Date Display Wrist Watch for Men & Boys (Black)',
      rating:'2,508',
      price:'299',
      offPercentage:77,
      oldPrice:'2,499',
      dealOfTheDay:true,
      deleveryDate:'Saturday, January 28',
      isPrime:true,
      coupon:'5₹',
      isFreeDel:true,
      img:matrix,
      avgRate:3.2,
    },
    {
      name:"Noise",
      description:'Noise ColorFit Pulse Grand Smart Watch with 1.69"(4.29cm) HD Display',
      rating:'31,455',
      price:'1,499',
      oldPrice:'3,455',
      offPercentage:63,
      dealOfTheDay:true,
      deleveryDate:'Saturday, January 28',
      isPrime:true,
      coupon:'',
      img:casio,
      isFreeDel:true,
      avgRate:3.9,

    },
    {
      name:"Top Fashion Watches",
      description:'Vintage Bronze Steam Train Mens Kids Quartz Gift Pocket Watch with Chain',
      rating:'420',
      price:'2,467',
      oldPrice:'5,820',
      offPercentage:77,
      dealOfTheDay:false,
      deleveryDate:'Saturday, February 11,',
      isPrime:true,
      coupon:'5%',
      isFreeDel:false,
      img:topFashion,
      avgRate:4.6,

    },
    {
      name:"IBSO",
      description:'Vintage Series Digital Grey Dial Mens Watch-A-158WA-1Q',
      rating:'28,923',
      price:'1,694',
      oldPrice:'5,820',
      offPercentage:77,
      dealOfTheDay:true,
      buyItem:2,
      getOff:10,
      deleveryDate:'Saturday, January 28',
      isPrime:true,
      coupon:'5%',
      isFreeDel:true,
      img:ibso,
      avgRate:4.6,

    },
    {
      name:"Casio",
      description:'Vintage Series Digital Grey Dial Mens Watch-A-158WA-1Q',
      rating:'28,923',
      price:'1,694',
      oldPrice:'1,695',
      dealOfTheDay:false,
      buyItem:2,
      getOff:10,
      deleveryDate:'Saturday, January 28',
      isPrime:true,
      coupon:'',
      img:casio,
      isFreeDel:false,
      avgRate:4.6,

    
    },
    {
      name:"TIMEWEAR",
      description:'Analog New Track Number Dial Day Date Functioning Leather Strap Watch',
      rating:'31',
      price:'349',
      oldPrice:'1,499',
      offPercentage:77,
      dealOfTheDay:true,
      deleveryDate:'Saturday, January 28',
      isPrime:false, 
      coupon:'5%',
      isFreeDel:true,
      img:timeweare,
      avgRate:4.6,

    },
    {
      name:"Matrix",
      description:'Analog Day & Date Display Wrist Watch for Men & Boys (Black)',
      rating:'2,508',
      price:'299',
      offPercentage:77,
      oldPrice:'2,499',
      dealOfTheDay:true,
      deleveryDate:'Saturday, January 28',
      isPrime:true,
      coupon:'5₹',
      isFreeDel:true,
      img:matrix,
      avgRate:4.6,

    },
    {
      name:"Noise",
      description:'Noise ColorFit Pulse Grand Smart Watch with 1.69"(4.29cm) HD Display',
      rating:'31,455',
      price:'1,499',
      oldPrice:'3,455',
      offPercentage:63,
      dealOfTheDay:true,
      deleveryDate:'Saturday, January 28',
      isPrime:true,
      coupon:'',
      img:casio,
      isFreeDel:true,
      avgRate:4.6,

    },
    {
      name:"Top Fashion Watches",
      description:'Vintage Bronze Steam Train Mens Kids Quartz Gift Pocket Watch with Chain',
      rating:'420',
      price:'2,467',
      oldPrice:'5,820',
      offPercentage:77,
      dealOfTheDay:false,
      deleveryDate:'Saturday, February 11,',
      isPrime:true,
      coupon:'5%',
      isFreeDel:false,
      img:topFashion,
      avgRate:4.6,

    },
    {
      name:"IBSO",
      description:'Vintage Series Digital Grey Dial Mens Watch-A-158WA-1Q',
      rating:'28,923',
      price:'1,694',
      oldPrice:'5,820',
      offPercentage:77,
      dealOfTheDay:true,
      buyItem:2,
      getOff:10,
      deleveryDate:'Saturday, January 28',
      isPrime:true,
      coupon:'5%',
      isFreeDel:true,
      img:ibso,
      avgRate:3.1,

    },
   
  ]

  return (
    <div className="App">
        <div className='navbarmain'>
          <Navbar />
        </div>
        <div className='product_gallary_main'>
          <ProductGallary products={products}/>
        </div>
    </div>
  );
}

export default App;
