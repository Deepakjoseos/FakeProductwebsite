import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { getProducts } from '../redux/productSlice';

import { NavLink } from "react-router-dom";
import "./product.css";

export default function ShowProducts() {
  const { products, loading} = useSelector((state) => state.product)
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(products);

  useEffect(() => {
    dispatch(getProducts());
    (setFilter(products));

  },[]);

  
  const filterProduct = (cat) => {
    const updatedList = products.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const DisplayProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(products)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4 ">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <p className="card-text lead fw-bold" style={{color:"gray"}}>
                      Rating {product.rating && product.rating.rate}
                      <i style={{color:"yellow"}} className="fa fa-star"></i>(
                      {product.rating && product.rating.count})
                    </p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <h1>Loading...</h1> : <DisplayProducts />}
        </div>
      </div>
    </div>
  );
}