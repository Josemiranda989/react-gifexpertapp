// rafc > crea un componente

import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Digimon"]);

  /*     const handleAdd = () => {
        //setCategories([...categories, 'Dragon Ball'])
        setCategories(cat => [...cat, 'Dragon Ball'])
    } */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      {/* <AddCategory setCategories={setCategories} categories={categories} /> Metodo2 */}
      <hr />

      <ol>
        {categories.map((category, i) => {
          return <GifGrid category={category} key={category + i} />;
        })}
      </ol>
    </>
  );
};
