import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [product, setProduct] = useState([]);
  const[searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/product?'+searchParams)
    .then(res => res.json())
    .then(res => setProduct(res.products))
  },[searchParams])

  return<Fragment>


    <h1 id="products_heading">Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
        {product.map(products => <ProductCard products={products} />)}
      </div>
    </section>

  </Fragment>
}