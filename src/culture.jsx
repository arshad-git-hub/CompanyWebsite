import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {cultureData} from './Data/details'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import cul1 from "./images/cul1.avif";
import cul2 from "./images/cul2.avif";
import cul3 from "./images/cul3.avif";
import cul4 from "./images/cul4.avif";
import cul5 from "./images/cul5.avif";
import cul6 from "./images/cul6.avif";
import cul7 from "./images/cul7.avif";
import cul8 from "./images/cul8.avif";
import cul9 from "./images/cul9.avif";

export default function Culture() {
  return (
    <section className="culContainer" id="cultimonials">
      <h1 className="culHead">Our <span>Culture</span></h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {cultureData.map((cul, index) => (
          <SwiperSlide key={index}>
            <div className="culBox">
              <img src={cul.image} alt={cul.name} className=""/>
              <div className="culText">
                <h3 className="culName">{cul.heading}</h3>
                <p className="culDetails">{cul.details}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

// import { cultureData } from "./Data/details"

// function Culture(){
//     return (
//         <section className="culture" id="culture">
//             <h1 className="culHead">Our Culture</h1>
//             <div className="culContainer">
//                 {cultureData.map((culData => {
//                     return (
//                         <div className="culBox">
//                             <img src={culData.image} alt="" />
//                             <div className="culDetails">
//                                 <h2>{culData.heading}</h2>
//                                 <p>{culData.details}</p>
//                             </div>
//                         </div>
//                     )
//                 }))}
//             </div>
//         </section>
//     )
// }

// export default Culture



                    