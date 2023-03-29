import React, { useEffect, useRef, useState } from 'react';
import ConstructStyles from './ConstructorTests.module.css';
import TestBlock from './TestBlock';

import {v4 as uuidv4} from "uuid";

function ConstructorTests() {

    const errorParagraph = useRef(null);

    const [numberBlocks, setNumberBlocks] = useState([]);


   

    const addTestBlock = () =>{
        const blockId = uuidv4();
        setNumberBlocks(prev => ([...prev, blockId]));
    }


    useEffect(()=>{
        const id = uuidv4();
        setNumberBlocks(prev=> ([...prev, id]));
    },[])

    
   
    return (
        <div className={ConstructStyles.ConstructorTests}>
            <h2>Констуктор тестів</h2>
            <div>

                {numberBlocks.map((id, index) => {

                    return(<TestBlock index = {index} key={id}/>)
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