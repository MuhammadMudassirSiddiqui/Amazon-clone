import React from "react";
import "./Home.css";
import Product from "./Product";
import blender from "./images/blender.webp";
import TV from "./images/TV.jpg";
import Ps4 from "./images/ps4.jpg";
import s6 from "./images/s6.jpg";
import iPhone from "./images/iPhone.jpg";
import alexa from "./images/alexa.png";

export default function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG"
        alt=""
      />
      {/**Products we have to create component */}
      <div className="home__row">
        <Product
          id="598746"
          title="How constant innovation statrts "
          price={7900}
          rating={5}
          image={blender}
        />
        <Product
          id="145876"
          title="i-Phone 11 pro max "
          price={2900}
          rating={5}
          image={iPhone}
        />
      </div>
      <div className="home__row">
        <Product
          id="254368"
          title="SAMSUNG: S6  "
          price={22000}
          rating={5}
          image={s6}
        />
        <Product
          id="1589647"
          title="amazon: Alexa for 4th generation "
          price={59000}
          rating={5}
          image={alexa}
        />
        <Product
          id="59814546"
          title="its time to ready save the world"
          price={30000}
          rating={5}
          image={Ps4}
        />
      </div>
      <div className="home__row">
        <Product
          id="5987987"
          title="SAMSUNG:Make your vision perfect "
          price={75000}
          rating={5}
          image={TV}
        />
      </div>
    </div>
  );
}
