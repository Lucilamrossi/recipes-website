import React, { useState } from "react";
import '../CreationRecipe.css';


export function TypesForm ({  types, handleTypesCallBack }) {

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [createdTypes, setCreatedTypes] = useState([]);


  //Types Handlers:
  const handleTypesChange = (event) => {
    let updatedSelectedTypes;

    if(event.target.checked) {
      updatedSelectedTypes = [...selectedTypes, event.target.value]
        
    } else {
      updatedSelectedTypes = selectedTypes.filter(type => type !== event.target.value);
    };
    setSelectedTypes(updatedSelectedTypes);
    handleTypesCallBack(updatedSelectedTypes, createdTypes)
  };

  const handleCreatedType = (event) => {
    const updatedTypes = createdTypes.map((type, i) => {
        return i === Number(event.target.id) ? event.target.value : type
    });
    setCreatedTypes(updatedTypes);

    handleTypesCallBack(selectedTypes, updatedTypes)
  };

  const handleRemoveType = (event) => {
    const updatedTypes = createdTypes.filter((type, i) => {
        return i !== Number(event.target.id);
    });

    setCreatedTypes(updatedTypes);
    handleTypesCallBack(selectedTypes, updatedTypes)
  };

  const handlerAddTypes = () => {
    setCreatedTypes([...createdTypes, '']);
  };

    return (
      <div>
        <div className='creation-types'>
            <div className='types-btn'>
                <p>Types:</p>
                <button className='primary-btn' type='button' onClick={handlerAddTypes}>Add Type!</button>
            </div>
            
            <div className='c-types'>
                {types.map((type, i) => {
                return (
                    <div key={i}>
                    <input type='checkbox' id={type} value={type} onChange={handleTypesChange}/>
                    <label>{type}</label>
                    </div>
                );
                })}
            </div>
        </div>
        
        <div className='creation-newTypes general-form'>
        {createdTypes.map((type, i) => {
            return (
            <div>   
                <input type='text' id={i} onChange={handleCreatedType} value={type}/>
                <button type='button' className='primary-btn' id={i} onClick={handleRemoveType}>X</button>
            </div>
            );
        })}
        </div>
    </div>
)};


