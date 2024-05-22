import { Link } from "react-router-dom";
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";

import { useState } from "react";
import img1 from "../images/aircooler1.webp";
import img2 from "../images/drafter1.jpg";
import img3 from "../images/kettle1.jpg";
import img4 from "../images/tablefan1a.webp";
import img5 from "../images/labcoat1a.jpg";
import img6 from "../images/shaon1.webp";

export const Blogs = ()=>{
    const[loading, setLoading] = useState(true);
    setTimeout(function(){
        setLoading(false);
    },1000)
    if(loading){
        return<div>
         <Appbar />
                <div className="flex justify-center">
                    <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    </div>
                </div>
        </div>
    }
    
    return <div >
        <Appbar />
        <div className="flex justify-center grid grid-col">
            <div >
                <Link to={"/post1"}>
                <BlogCard
                    
                    authorName="Aditya Mane"
                    title="Air Cooler"
                    content="Hi people, I have a Bajaj Air Cooler, just bought it last year, willing to sell, open for bargain"
                    publishedDate={"17th may 2024 "}
                    price="Rs:2500"
                    src={img1}
                /> 
                
                 </Link>                  
            </div>
            
            <div >
                <Link to="/post2">
                <BlogCard
                    
                    authorName="Akshat Sharma"
                    title="TA set(Drafter,scale,etc)"
                    content="My Engg drawing set is in pretty good condition, would like to sell it. It has beared close to zero damage"
                    publishedDate={"18th may 2024 "}
                    price="Rs:300"
                    src={img2}
                /> 
                </Link>
                                                
            </div>
            <div >
                <Link to={"/post3"}>
                <BlogCard
                    
                    authorName="Harshit Jaiswal"
                    title="Electric kettle"
                    content="2 year old kettle, in decent condition "
                    publishedDate={"4th april 2024 "}
                    price="Rs:700"
                    src={img3}
                /> 
                </Link>
                                                
            </div>
            <div >
                <Link to={"/post4"}>
                <BlogCard
                    
                    authorName="Shivam Shandi"
                    title="Table fan"
                    content="3 year old, Crompton table fan, Colour has gotten dull, else functions normal, can reduce price"
                    publishedDate={"5th april 2024 "}
                    price="Rs:1200"
                    src={img4}
                /> 
                </Link>
                                                
            </div>
            <div >
                <Link to={"/post5"}>
                <BlogCard
                    
                    authorName="Vedant Neekhra"
                    title="Chemistry lab apparell"
                    content="The coat is washed, Sunglasses are almost unused "
                    publishedDate={"3rd may 2024 "}
                    price="Rs:150"
                    src={img5}
                /> 
                </Link>
                                                
            </div>
            <div >
                <Link to={"/post6"}>
                <BlogCard
                    
                    authorName="Shaondeep Shandal"
                    title="CPI"
                    content="My second sem SPI is too much , hence i would like to sell it, open for bargain "
                    publishedDate={"7th May 2024 "}
                    price="Rs:25"
                    src={img6}
                /> 
                </Link>
                                                
            </div>
        </div>
    </div>
}