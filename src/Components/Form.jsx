import React, { useState } from "react";
import style from "./styles.module.css";

export default function Form() {
  const [values, setValues] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    stock: "",
    brand: "",
    category: "",
    image: "",
  });

  const [message, setMessage] = useState(false)

  const onHandlerChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    postProducts(values);
    
    setValues({
      id: "",
      title: "",
      description: "",
      price: "",
      stock: "",
      brand: "",
      category: "",
      image: "",
    })

    setMessage(!message)
  }

  const postProducts = async (newProduct) => {
    const settings = {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-type": "application/json",
      },
    };
    const res = await fetch("api/products", settings);
    const data = await res.json();
  };

  return (
    <>
      {message && <div className={style.message}>Producto agregado exitosamente!</div>}
      <div className={style.formContainer}>
        
      <form onSubmit={onSubmitForm}>
      <h2>Agregar o actualizar un producto</h2>
        <input
          type="text"
          name="id"
          placeholder="id"
          onChange={onHandlerChange}
          value={values.id}
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={onHandlerChange}
          value={values.title}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={onHandlerChange}
          value={values.description}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          onChange={onHandlerChange}
          value={values.price}
        />
        <input
          type="text"
          name="stock"
          placeholder="stock"
          onChange={onHandlerChange}
          value={values.stock}
        />
        <input
          type="text"
          name="brand"
          placeholder="brand"
          onChange={onHandlerChange}
          value={values.brand}
        />
        <input
          type="text"
          name="category"
          placeholder="category"
          onChange={onHandlerChange}
          value={values.category}
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          onChange={onHandlerChange}
          value={values.image}
        />
        <button className={style.buttonSubmit} type="submit">
          Enviar
        </button>
      </form>
      </div>
    </>
  );
}
