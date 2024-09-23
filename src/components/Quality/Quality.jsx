import React, {useState} from "react";
import best from "./../../assets/best-selection.svg";
import higher from "./../../assets/higher-profits.svg";
import robust from "./../../assets/robust-scaling.svg";
import CustomCard from "../common/customCard/CustomCard";
import "./quality.scss";
const Quality = () => {
    const [image] = useState([
        {
            image : best,
            heading : "Higher Profits",
            label : "We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
        },
        {
            image : higher,
            heading : "Robust Scaling",
            label : "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
        },
        {
            image : robust,
            heading : "Best Selection",
            label : "With 900+ products and top quality brands, you can choose the best products for your business."
        }
    ])
    return (
       <div className="container">
        <div className="hero-grid">
    {
        image.map((i, id) => (  
        <CustomCard 
        key = {id}
            heading = {i.heading}
            image = {i.image}
            label = {i.label}
            margin = {2}
            width = {320}
            height = {500}
            />
        
        ))
    }
        </div>
     
       </div>
    )
}
export default Quality;