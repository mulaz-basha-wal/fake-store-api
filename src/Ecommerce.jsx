import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";


const Ecommerce = ()=>{
    let [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setProducts(res.data);
        })
    },[]);
    return(
        <div className="wrapContainer d-block">
            <div className="row header-nav bg-primary m-0 p-0">
                <div className="col-lg-3 col-sm-12 bg-red border-bottom border-dark text-light">
                    <h3 className="text-center mb-0 pb-0">Jumbo Formals</h3>
                    <p className="text-center mt-0 pt-0"><i>Cosmos of Combo Deals</i></p>
                </div>
                <dir className='col'></dir>
                <div className="col-lg-3 bg-primary p-3 text-sm-center">
                    <a className="d-inline btn btn-primary m-2 active" href="#/">Shop</a>
                    <a className="d-inline btn btn-primary m-2" href="#/">About</a>
                    <a className="d-inline btn btn-primary m-2" href="#/">Contact</a>
                </div>
            </div>
            <h1 className="text-center text-white">Products</h1>
            <div className="productsContainer">
                {
                    products.map((val,index)=>{
                        return <Product
                            id={val.id}
                            title={val.title}
                            price={val.price}
                            desc={val.description}
                            category={val.category}
                            imageUrl={val.image}
                            rating={val.rating.rate}
                            ratingCount={val.rating.count}
                        />
                    })
                }
            </div>
        </div>
    )
}
export default Ecommerce;