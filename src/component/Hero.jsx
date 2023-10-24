import React from 'react'

function Hero() {
    return (
        <div className='hero-mane'>
         <h1>KING DEALS OF THE DAY</h1>
         <div className='hero'>
            <div className='hero-1'>
                <div class="col">
                    <div class="car">
                        <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">cookies, food, chocolate</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hero-2'>
                <div class="col">
                    <div class="car">
                        <img src="https://www.kelseys.ca/content/dam/cara/en/kelseys-image-library/home/gallery/4.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"> Chocolate Chip Cookie</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hero-3'>
                <div class="col">
                    <div class="car">
                        <img src="https://www.kelseys.ca/content/dam/cara/en/kelseys-image-library/home/gallery/Kelseys-Social-Oct-34867.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Kingfisher Beer</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hero-4'>
                <div class="col">
                    <div class="car">
                        <img src="https://cdn.shopify.com/s/files/1/0551/9779/4433/products/z4_31843972-2544-418b-9d9a-d95a6dce9160.jpg?v=1664449041&width=600" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card titleOats Chocolate </h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hero-5'>
                <div class="col">
                    <div class="car">
                        <img src="https://cdn.shopify.com/s/files/1/0551/9779/4433/products/w5_6c40ae09-6919-4c9a-97d6-fdaba0292e36.jpg?v=1667307876&width=600" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Choco Cream Fills</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hero-6'>
                <div class="col">
                    <div class="car">
                        <img src="https://cdn.shopify.com/s/files/1/0551/9779/4433/products/q5_a8dbef36-ff0c-44be-8d4d-82c7ac9e9755.jpg?v=1667307881&width=600" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Vanilla Cream Fills</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
        </div>
    )
}

export default Hero