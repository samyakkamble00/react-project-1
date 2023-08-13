import React from 'react'

const BodySection = () => {
  return (
    <>
    <main className='hero'>
        <div className='hero-coutent'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH SHOES. </p>
            <div className='hero-button'>
                <button>SHOP NOW</button>
                <button className='b-category'>Category</button>
            </div>
            <div className='shopping'>
                <p>Also Available</p>
                <div className='brand-icon'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-amazon"></i>
                </div>
            </div>
        </div>
        <div className='hero-image'>
        <img src="./images/sImage.png" alt='shoe-images'/>
        <img src="./download.png" alt='n-img'></img>
        </div>
    </main>
</>

  )
}

export default BodySection