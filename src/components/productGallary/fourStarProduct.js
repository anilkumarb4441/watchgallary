import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

//css
import './productGallary.css'

//assets
import star from '../../assets/star.png';
import prime from '../../assets/prime.png';
import Modal from '../modal/modal';


function FourStarProducts({ fourStarItems }) {

    const [itemdetails, setItemDetails] = useState({});
    const [openModal, setOpenModal] = useState(false);

   const options={
        loop: false,
        // margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    }

    const cardStyle={
        border:'1px solid red !important'
    }

    return (
      <>
        <h4 className='fourStarHeader'>  4+ STAR STYLES</h4>
        <p className='fourStarDescription'>Shop coveted styles with many reviews</p>
        <div className='product_container'>
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
        {fourStarItems.map((item, ind) => {
            return (
                <div className='owlItems' key={ind} style={{cardStyle}} onClick={()=>{setOpenModal(true); setItemDetails({...item}) }}>
                    <div className='productimg_background'>
                        <div className='proImg'>
                            <img src={item.img} alt='img' />
                        </div>
                    </div>
                    <div className='itemDetails'>
                        <h5 className='name'>{item.name}</h5>
                        <p className='disc'>{item.description}</p>
                        <div className='rating'>
                            <img src={star} alt='star'/>
                            <p>{item.rating}</p>
                        </div>
                        {item.dealOfTheDay && <button>Deal of the Day</button>}
                        <div className='pricing'>
                            <p className='price'>{item.price}</p>
                            <s>₹{item.oldPrice}</s>
                            {item.offPercentage && <p className='priceoffer'>&#x28;{item.offPercentage}% off&#41;</p>}
                        </div>
                     { item.buyItem && <p className='buyGet'>Buy {item.buyItem} items, get {item.getOff}% off</p>}
                        {item.coupon !== '' && <p className='copan'><span>Save {item.coupon}</span> with coupon</p>}
                        <div className='delevery'>
                            {item.isPrime && <img src={prime} alt='primeImg'/>}
                            <p>Get it by <span>{item.deleveryDate}</span></p>
                        </div>
                        { item.isFreeDel && <p className='Freedelevery'>FREE Delivery by Amazon</p>}
                    </div>
                </div>
            )
        })
        }
        </OwlCarousel>
        
    </div>
    {openModal === true ? <Modal itemDetails={itemdetails} setOpenModal={setOpenModal}/> : null}
      </>
    )
}

export default FourStarProducts
