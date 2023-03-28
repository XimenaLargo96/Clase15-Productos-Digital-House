import React, { useEffect, useState, useParams} from "react";
import Product from "./Product";
import style from './styles.module.css'

export default function Products() {
  const [products, setProducts] = useState([]);

  const [updates, setUpdates] = useState(0)

  const handleRequest = ()=>{
    setUpdates(products + 1)
  }

  const getProducts = async () => {
    const res = await fetch("api/products");
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, [updates]);


  return (
    <div className={style.container}>
      {products.length &&
        products.map((product) => (
        <div key={product.id} className={style.card}>
            <Product
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              stock={product.stock}
              brand={product.brand}
              category={product.category}
              image={product.image}
              update={handleRequest}
            />
        </div>
        ))}
    </div>
  );
}
