import React from 'react'

export default function Home() {
    return (
        <div>
         <div className="container mt-4">
                    <div className="col-sm-4"></div>
                <h1>Welcome to Website Sanrio and friend!</h1>
                </div>
                <div id="demo" class="carousel slide" data-bs-ride="carousel">

                <div className="container mt-4">
                <div className="col-sm-4"></div>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
    <div>
    <div className="row"> 
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/1.jpg" alt="1" class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src="./images/2.jpg" alt="2" class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src="./images/3.jpg" alt="3" class="d-block w-100" />
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
<h3>About Me</h3>
                        <p>Sanrio is founded on the philosophy that a small gift can bring happiness and friendship to people of all ages </p>
                        <p>It’s more than just a catchy phrase; it’s the foundation of everything we do and we’re proud to say we’ve been creating smiles for over 50 years</p>
                        <p>At Sanrio we believe that a gift is more than just a gift. Rather, a gift is a means of expressing our heartfelt feelings for others </p>
                        <p>This philosophy guides all Sanrio activities, we invite all our friends and guests to experience the magic of these four simple words.</p>
                </div>
                </div>
                </div>
                </div>
          
        
        
    )
}