import React, { useEffect, useRef, useState } from 'react';
import ConstructStyles from './ConstructorTests.module.css';
import TestBlock from './TestBlock';

function ConstructorTests() {

    const errorParagraph = useRef(null);

    const [numberBlocks, setNumberBlocks] = useState([1]);


   

    const addTestBlock = () =>{
        setNumberBlocks(prev => ([...prev, 1]));
    }

   
    return (
        <div className={ConstructStyles.ConstructorTests}>
            <h2>Констуктор тестів</h2>
            <div>

                {numberBlocks.map((el, index) => {
                    return(<TestBlock index = {index}/>)
                })}

                <div className={ConstructStyles.addTestsBtn}>
                    <button onClick={addTestBlock}>Додати блок запитань</button>
                </div>

            </div>
            <p ref={errorParagraph} style={{ color: 'red' }}></p>
        </div>
    )
}

export default ConstructorTests;