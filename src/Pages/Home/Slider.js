import React from 'react';

const Slider = () => {
    return (

      


        <div>
            <div className="carousel w-full h-screen text-red-500">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://fdn.gsmarena.com/imgroot/reviews/19/apple-iphone-11-pro-max/lifestyle/-1024w2/gsmarena_011.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     
      <a href="#slide4" className="btn btn-circle">❮</a> 
       
      <h1 className='text-center text-2xl lg:text-6xl'>Fair Condition <br/> <p className='text-center text-1xl lg:text-4xl'> Resale SmartPhones Huawei P50E </p></h1>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip4-5g-01.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <h1 className='text-center text-2xl lg:text-6xl'>Fair Condition <br/> <p className='text-center text-1xl lg:text-4xl'> Resale SmartPhones Apple iPhone 11 Pro </p></h1>
      
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p50e-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <h1 className='text-center text-2xl lg:text-6xl'>Fair Condition <br/> <p className='text-center text-1xl lg:text-4xl'> Resale SmartPhones Samsung Galaxy Z Flip4 </p></h1>

      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m13-5g-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <h1 className='text-center text-2xl lg:text-6xl'>Fair Condition <br/> <p className='text-center text-1xl lg:text-4xl'> Resale SmartPhones Samsung Galaxy M13 5G </p></h1>
    
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;