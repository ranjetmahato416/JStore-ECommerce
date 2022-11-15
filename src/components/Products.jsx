import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useSelector, useDispatch } from "react-redux";
import { cartUpdate } from "../store/actions/cart";
import { decrementProduct, incrementProduct } from './../store/actions/product';

function Products(props) {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  //increase counter
  const increase = () => {
    if (counter < 6) {
      setCounter((count) => count + 1);
    }
    dispatch(incrementProduct(counter,product.id))
  };

  //decrease counter
  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
    dispatch(decrementProduct(counter,product.id))
  };

  
  console.log(props, "props");
  
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  
 
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      console.log(product);
      setLoading(false);
    };
    getProducts();
  }, []);

  const cartUpdateHandler = () => {
    dispatch(cartUpdate(product));
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={30} width={200} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    const price = (product.price*counter);
    return (
      <>
        <div className="row bg-success rounded">
          <div className="col-md-6 mt-3">
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6 mt-3 py-2">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-5">
              $ {price}
            </h3>
            <div className="btn__container">
              <button className="control__btn btn-dark" onClick={increase}>
                +
              </button>
              <span className="counter__output mx-3">{counter.toFixed(2)}</span>
              <button className="control__btn btn-dark" onClick={()=>{decrease()}}>
                -
              </button>
            </div>
            <p className="lead p-2">{product.description}</p>

            <NavLink to="/carts">
              <button
                onClick={cartUpdateHandler}
                className="btn btn-outline-dark px-3 py-2"
              >
                ADD TO CART
              </button>
            </NavLink>

            <NavLink
              to={`/carts/${product.id}`}
              className="btn btn-dark ms-4 px-2 py-2"
            >
              GO TO CART
            </NavLink>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-2">
        <div className="row py-2">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
