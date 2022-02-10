import { useEffect } from 'react';
import axios from 'axios';

const AllProducts = ()=>{
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            document.querySelector("tbody").innerHTML="";
            res.data.forEach(function(product) {
                document.querySelector("tbody").innerHTML+=`
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.price}</td>
                        <td>${product.description}</td>
                    </tr>`;
            })
        })
    },[]);

    return(
        <div>
            <h1 className="text-center text-black pt-5">All Products</h1>
            <div className='w-100'>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Product_ID</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default AllProducts;