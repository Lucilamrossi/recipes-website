import React, { useState } from "react";
import '../CreationRecipe.css';


export function TypesForm ({  types, handleTypesCallBack }) {

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [createdTypes, setCreatedTypes] = useState([]);


  //Types Handlers:
  const handleTypesChange = (event) => {
    if(event.target.checked) {
        setSelectedTypes([...selectedTypes, event.target.value]);
    } else setSelectedTypes(selectedTypes.filter(type => type !== event.target.value));

    handleTypesCallBack(selectedTypes, createdTypes)
  };

  const handleCreatedType = (event) => {
    const updatedTypes = createdTypes.map((type, i) => {
        return i === Number(event.target.id) ? event.target.value : type
    });
    setCreatedTypes(updatedTypes);

    handleTypesCallBack(selectedTypes, createdTypes)
  };

  const handleRemoveType = (event) => {
    setCreatedTypes(createdTypes.filter((type, i) => {
        return i !== Number(event.target.id);
    }));

    handleTypesCallBack(selectedTypes, createdTypes)
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


