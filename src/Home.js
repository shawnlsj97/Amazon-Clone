import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                {/*2 Products*/}
                    <Product id="1" title="Miss Dior Blooming Bouquet Eau De Toilette 100ml by Christian Dior" price={196.00} image="https://tangs-cdn.ascentismedia.com/ProductImages/61C20BD2-D6A0-44F9-BCC6-B455EBD9D1F0/1/std/miss-dior-blooming-bouquet-eau-de-toilette.jpg" rating={5}/>
                    <Product id="2" title="Bohemian Bluebells Eau De Parfum 90ml by Zara" price={59.95} image="https://fimgs.net/mdimg/perfume/375x500.58162.jpg" rating={4} />
                </div>

                <div className="home__row">
                    {/*3 Products*/}
                    <Product id="3" title="Lorna Jane Long Line Sports Bra" price={55.99} image="https://www.lornajane.com.au/dw/image/v2/BDXV_PRD/on/demandware.static/-/Sites-lornajane-master/default/dw070677d7/images/LB0308/lj-long-line-sports-bra-blue_lb0308-frn_1.jpg?sw=308&sh=433" rating={5} />
                    <Product id="4" title="Athleta Ultra High Rise Elation Tight" price={89.00} image="https://athleta.gap.com/webcontent/0017/660/809/cn17660809.jpg" rating={4} />
                    <Product id="5" title="Dior Sauvage Eau De Toilette 100ml by Christian Dior" price={156.00} image="https://image-optimizer-reg.production.sephora-asia.net/images/product_images/closeup_1_Product_188873_20Dior_20Sauvage_20EDT_20100ml_00474efafbfcd9b14ba8194221d2c567467ff573_1553097900.png" rating={3} />
                </div>

                <div className="home__row">
                    {/*1 Product*/}
                    <Product id="6" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home
