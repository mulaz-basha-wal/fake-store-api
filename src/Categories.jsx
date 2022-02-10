import { useState, useEffect } from "react";
import axios from "axios";

const Categories = ()=>{
    let [categories, setCategories]= useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories").then((res)=>{
            setCategories(res.data);
        })
    },[]);
    return(
        <div className="categories d-block">
            <h1 className="text-center text-black">Categories</h1>
            <ul className="text-capitalize text-center">
                {
                    categories.map((val,index)=>{
                        return <li key={index}>{val}</li>
                    })
                }
            </ul>
        </div>
    );
}
export default Categories;