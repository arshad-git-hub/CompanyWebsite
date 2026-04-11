import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import marissa from './images/marrisa.avif';
import trevor from './images/trevor.avif';
import andrew from './images/andrew.avif';
import david from './images/david.avif';
import lisa from './images/lisa.avif';
import manoj from './images/manoj.avif';
import smriti from './images/smriti.avif';
import mike from './images/mike.avif';
import stefen from './images/stephen.avif';

const testimonials = [
  {
    name: "Marissa Luedy",
    role: "Vice President of Product and Operations",
    image: marissa,
    text: "We sincerely appreciate the incredible work the team has done on our integration projects. Their dedication, hard work, and resilience have been truly remarkable, especially in the face of challenging circumstances. ",
  },
  {
    name: "Trevor Orrick",
    role: "Vice President",
    image: trevor,
    text: "Mayank and the “Thoughts2Binary” team have been excellent and easy to collaborate with.  We had previously worked with two other developers that didn’t meet our expectations. Thoughts2Binary was able to take our project to the next level and deliver the App we have been wanting.",
  },
  {
    name: "Andrew Sissian",
    role: "Chief Executive",
    image: andrew,
    text: "Thoughts2Binary have been a fundamental addition to our in house technical development team, working diligently, collaboratively and thoughtfully across our application development and back-end platform including Database Administration.",
  },
  {
    name: "David Hergenroeder",
    role: "Founder & CEO",
    image: david,
    text: "We highly recommend Thoughts2Binary to anyone seeking expertise in software development. Mayank Shukla and his team have been amazing at understanding our specific needs and providing accurate solutions. The end product has consistently exceeded expectations and has been timely.",
  },
  {
    name: "Manoj Yadav",
    role: "Cheif Sales Officer",
    image: manoj,
    text: "It has been a good experience working with T2B over the year. The team is very professional in its approach and easily accessible anytime. Would continue to use their services in the future.",
  },
  {
    name: "Lisa Graystone",
    role: "Owner / Wardrobe Stylist",
    image: lisa,
    text: "I had a wonderful collaborative experience working with Thoughts2Binary on a widget for my Online Vintage eboutique, Evolution Vintage. The solution they created has made it easier for my clients to shop, faster and with less frustration. Turning my vision into a functioning element of my website has been a win for everyone.",
  },
  {
    name: "Mike Mikha",
    role: "Co-Founder at Satmodo",
    image: mike,
    text: "Thoughts2binary has been a life saving or should I say a business saving asset to everything we do as an eCommerce company for the last 6 months or so. Once they start running your projects you will never look back!UP TO",
  },
  {
    name: "Smriti Singh",
    role: "Director",
    image: smriti,
    text: "DeraMandawa, group of experiences and boutique hotel just launched a completely revamped website with fresh and unique design. We couldn't be happier with the way our new website has turned out. Our experience with thoughts2binary has been absolutely fantastic. Their team is the right mix for technical and asthetically sound solutions.",
  },
  {
    name: "Stefen Mulder",
    role: "Director",
    image: stefen,
    text: "OzoSoft is a ground floor start-up e-commerce business. We needed help with branding, our logo design, label designs, web site construction and our sales launch. We got the help we needed with this wide range of start up challenges from Mayank and his team at Thoughts2Binary. ",
  },
];

export default function Testimonials() {
  return (
    <section className="tesContainer" id="testimonials">
      <h1 className="tesHead">Testimonials</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="tesBox">
              <img src={t.image} />
              <div className="tesText">
                <h3 className="tesName">{t.name}</h3>
                <p className="tesRole">{t.role}</p>
                <p className="tesDetails">{t.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}






