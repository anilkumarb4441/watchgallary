import React, { useEffect, useState } from 'react'

//css
import './productGallary.css';

//assets
import star from '../../assets/star.png';
import prime from '../../assets/prime.png'


//component
import FourStarProducts from './fourStarProduct';
import NoRecords from '../noRecords/norecors';
import Modal from '../modal/modal';



function ProductGallary({ products }) {

    const [aboveFourStarItems, setAboveFourStarItems] = useState([]);
    const [itemdetails, setItemDetails] = useState({});
    const [openModal, setOpenModal] = useState(false);

    console.log(openModal,',,,,,,,,,,',itemdetails)

    useEffect(()=>{
        const filtArray =  products.filter((val)=>{
            return val.avgRate > 4;
        })
        setAboveFourStarItems(filtArray);
    },[])

    return (
        <div className='gallaryWraper'>
            {products && products.length > 0 ?
                <>
                    {aboveFourStarItems.length >0 && <FourStarProducts fourStarItems={aboveFourStarItems}/>}
                    <h4>More Results</h4>
                    <div className='product_container owlParent' >
                        {products.map((item, ind) => {
                            return (
                                <div className='productCard' key={ind} onClick={()=>{setOpenModal(true); setItemDetails({...item}) }}>
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
                    </div>

                </>
                :
               <NoRecords />
            }
            {openModal === true ? <Modal itemDetails={itemdetails} setOpenModal={setOpenModal}/> : null}
        </div>
    )
}

export default ProductGallary;
