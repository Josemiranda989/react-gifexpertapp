// rafc react arrow function component
import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  // export const AddCategory = ({setCategories, categories}) => { Metodo2
  const [inputValue, setInputValue] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      
      if (inputValue.trim().length > 2) {
              setCategories((cat) => [inputValue, ...cat]); //agrega a la lista
    //      setCategories([...categories, 'Dragon Ball']) Metodo2
          setInputValue(''); //para que se limpie el input
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};