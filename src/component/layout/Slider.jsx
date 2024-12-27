import React from 'react'

function Slider() {
  return (
    <>
    
<div class="carousel slide" data-bs-ride="carousel" id="a">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#a"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button type="button" data-bs-target="#a" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#a" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#a" data-bs-slide-to="3"></button>
      </div>
     


      <div class="carousel-inner">
        

        <div class="carousel-item active"data-bs-interval="2000" >
          <img
            src="https://pn-paul.netlify.app/image/slider1.jpg"
            alt=""
            class="w-100"
          />
          <div class="carousel-caption"></div>
        </div>

        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://pn-paul.netlify.app/image/slider22.jpg"
            alt=""
            class="w-100"
          />
          <div class="carousel-caption"></div>
        </div>

        <div class="carousel-item"data-bs-interval="2000">
          <img
            src="https://pn-paul.netlify.app/image/slidwr33.jpg"
            alt=""
            class="w-100"
          />
          <div class="carousel-caption"></div>
        </div>

        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://pn-paul.netlify.app/image/slidwr44.jpg"
            alt=""
            class="w-100"
          />
          <div class="carousel-caption"></div>
        </div>
      </div>
    
    </div>
    
      
      <div
        className="carousel-control-prev"
        type="button"
        data-bs-target="#a"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </div>
      <div
        className="carousel-control-next"
        type="button"
        data-bs-target="#a"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </div>
    
    </>
  )
}

export default Slider
