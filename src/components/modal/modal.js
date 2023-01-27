import React from 'react'

//css
import './modal.css'


function Modal({ itemDetails, setOpenModal }) {
    return (
        <div className='modalWraper'>
            <div className='modal'>
                <div className='closeModal' onClick={() => setOpenModal(false)}>x</div>
                <div className='imgHolder' style={{ width: '50%' }}>
                    <img src={itemDetails.img} alt='item' style={{ width: '60%' }} />
                </div>
                <div className='detailsHolder' style={{ width: '50%', textAlign:'center' }}>
                    <h4>{itemDetails.name}</h4>
                    <p>{itemDetails.description}</p>
                    <p className='modalprice'>₹{itemDetails.price}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
