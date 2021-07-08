import React, { useState } from "react";
import '../CreationRecipe.css';


export function Steps ({ handleStepsCallBack }) {

    const [steps, setSteps] = useState([]);


    // Steps Handlers:
    const handleNewSteps = () => {
        const updatedSteps = [...steps,  '']
        setSteps(updatedSteps);
        handleStepsCallBack(updatedSteps)
    }
    
    const handleStepsChange = (event) => {
        const updatedSteps = [...steps, steps[Number(event.target.id)] = event.target.value]     
        handleStepsCallBack(updatedSteps)

    };
    
    const handleStepsRemove = () => {
        steps.pop();
        const updatedSteps = [...steps];
        setSteps(updatedSteps);
        handleStepsCallBack(updatedSteps)
    };
    
    return (
        <div className='creation-steps general-form'>
            <div className='creation-steps-head'>
                <label>Steps:</label>
                <button className='primary-btn' type='button' onClick={handleNewSteps}>Add Step!</button>
            </div>
            
            <div className='steps'>
                {steps.map((step, i) => {
                    return (
                    <div>
                        <span>{i + 1}.</span>
                        <textarea rows='3' id={i} onChange={handleStepsChange}></textarea>
                        {steps.length === (i + 1) && 
                        <button className='primary-btn' type='button' onClick={handleStepsRemove}>X</button>}
                    </div>
                    );
                })}
            </div>
    </div>
)};


