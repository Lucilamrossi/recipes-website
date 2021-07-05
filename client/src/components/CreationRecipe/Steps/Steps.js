import React, { useState } from "react";
import '../CreationRecipe.css';


export function Steps ({ handleStepsCallBack }) {

    const [steps, setSteps] = useState([]);


    // Steps Handlers:
    const handleNewSteps = () => {
        setSteps([...steps,  '']);
        handleStepsCallBack(steps)
    }
    
    const handleStepsChange = (event) => {
        steps[Number(event.target.id)] = event.target.value;
        handleStepsCallBack(steps)
    };
    
    const handleStepsRemove = () => {
        const updatedStep = [...steps];
        updatedStep.pop();
        setSteps(updatedStep);
        handleStepsCallBack(steps)
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


