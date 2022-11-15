import React, { useState, useEffect } from 'react';
import Skeleton from "react-loading-skeleton";
import { NavLink } from 'react-router-dom';

const Product = () => {
    const[data, setData] = useState([]);
    const[filter, setFilter] = useState(data);
    const[loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response =  await fetch("https://fakestoreapi.com/products");
            if(componentMounted)
            {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
            <div>Loading...</div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
            <div className="buttons d-flex justify-content-center mb-5 pb-2">
                <div className="btn btn-success me-2" onClick={() => setFilter(data)}>All</div>
                <div className="btn btn-success me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</div>
                <div className="btn btn-success me-2" onClick={() => filterProduct("women's clothing")}>WoMen's Clothing</div>
                <div className="btn btn-success me-2" onClick={() => filterProduct("jewelery")}>Jewelery</div>
                <div className="btn btn-success me-2" onClick={() => filterProduct("electronics")}>Electronics.</div>
            </div>
            {filter.map((product) => {
                return (
                    <>
                    <div className="col-md-3 mb-2">
                        <div className ="card h-90  text-center p-4 bg-success" key = {product.id}>
                            <img className ="card-img-top" height = "250px" src={product.image} alt={product.title}/>
                            <div className ="card-body">
                                <h5 className ="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                <p className ="card-text lead fw-bold">${product.price}.</p>
                                <NavLink to={`/products/${product.id}`} className ="btn btn-outline-dark">Buy Now</NavLink>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
            </>
        )
    }


  return (
    <div>
        <div className="container-fluid py-2">
            <div className="row">
                <div className="col-12">
                    <h1 className='display-6 fw-bolder text-center bg-success bg-opacity-75'>Latest Products</h1>
                </div>
            </div>
            <div className="row justify-content-center p-2">
                {loading? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
  );
}

export default Product