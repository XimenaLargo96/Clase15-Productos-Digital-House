import React, { useState, useEffect } from "react";
import Form from "./Form";

export default function Product({
  id,
  title,
  description,
  price,
  stock,
  brand,
  category,
  image,
  update,
}) {

  const deleteProduct = async (id) => {
    update();
    const settings = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    };
    const res = await fetch(`api/products/${id}`, settings);
    const data = await res.json();
  };

  const updateProduct = () =>{
    <Form/>
  }

  return (
      <>
        <h3>
          {id} - {title}
        </h3>
        <img src={image} alt={title} />
        <p>{description}</p>
        <p>Precio: {price}</p>
        <p>Stock: {stock} </p>
        <p>Marca: {brand ? brand :'No registra'}</p>        
        <p>Categoria: {category}</p>
        <button onClick={() => deleteProduct(id)}>Eliminar</button>
      </>
  );
}
