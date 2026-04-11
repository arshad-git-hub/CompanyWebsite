import val1 from './images/val1.avif';
import val2 from './images/val2.avif';
import val3 from './images/val3.avif';
import val4 from './images/val4.avif';
import val5 from './images/val5.avif';

const valueData = [
  {
    head: "Understand with Empathy",
    image: val1,
    details: "Always look at situations from the other’s perspective",
  },
  {
    head: "Become an Expert",
    image: val2,
    details: "Never stop gaining more knowledge and improving abilities.",
  },
  {
    head: "Honor Commitments",
    image: val3,
    details: "Deliver on promises and discuss deviations.",
  },
  {
    head: "Provide Transparency",
    image: val4,
    details: "Effectively communicate by not hiding any details.",
  },
  {
    head: "Lead With Humility",
    image: val5,
    details: "Provide insights and guidance while being open to feedback.",
  },
];

export default function Values() {
  return (
    <section className="values" id="values">
      <h1 className="valHead">Our <span>Values</span></h1>
      <div className="valContainer">
            {valueData.map((t, index) => (
                <div className="valBox">
                    <img src={t.image} />
                    <div className="valText">
                        <h3 className="valName">{t.head}</h3>
                        <p className="valDetails">{t.details}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}



// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import val1 from './images/val1.avif';
// import val2 from './images/val2.avif';
// import val3 from './images/val3.avif';
// import val4 from './images/val4.avif';
// import val5 from './images/val5.avif';

// const valueData = [
//   {
//     head: "Understand with Empathy",
//     image: val1,
//     details: "Always look at situations from the other’s perspective",
//   },
//   {
//     head: "Become an Expert",
//     image: val2,
//     details: "Never stop gaining more knowledge and improving abilities.",
//   },
//   {
//     head: "Honor Commitments",
//     image: val3,
//     details: "Deliver on promises and discuss deviations.",
//   },
//   {
//     head: "Provide Transparency",
//     image: val4,
//     details: "Effectively communicate by not hiding any details.",
//   },
//   {
//     head: "Lead With Humility",
//     image: val5,
//     details: "Provide insights and guidance while being open to feedback.",
//   },
// ];

// export default function Values() {
//   return (
//     <section className="valContainer" id="valtimonials">
//       <h1 className="valHead">Our <span>Values</span></h1>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={2}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 10000 }}
//         loop
//       >
//         {valueData.map((t, index) => (
//           <SwiperSlide key={index}>
//             <div className="valBox">
//               <img src={t.image} />
//               <div className="valText">
//                 <h3 className="valName">{t.head}</h3>
//                 <p className="valDetails">{t.details}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }