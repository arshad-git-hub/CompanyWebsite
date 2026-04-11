import Header from "./header"
import Footer from './copyright';
import { useLocation } from "react-router-dom";
import Blog from "./blog";
import {cultureData} from './Data/details'
import { techArticles } from "./blog";
function BlogData() {

  let uselocation = useLocation();
  let currentId = uselocation.pathname.split('/')[2]
  let currentData = techArticles.filter((v)=>v.id==currentId)[0]
  console.log(currentData)

  return (
    <>
      <Header/>
      <section className="blogData">
        <h2>{currentData.heading}</h2>
        <h4>{currentData.date}</h4>
        <img src={currentData.img} alt="" />
        <p>{currentData.details}</p>
      </section>
      <Footer/>
    </>
  )
}

export default BlogData
