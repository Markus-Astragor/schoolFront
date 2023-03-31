import React, { useEffect, useRef, useState } from 'react';
import ConstructStyles from './ConstructorTests.module.css';
import TestBlock from './TestBlock';

import {v4 as uuidv4} from "uuid";

function ConstructorTests() {

    const errorParagraph = useRef(null);

    const [numberBlocks, setNumberBlocks] = useState([]);

    const [GetValueMain, setgetValueMain] = useState(false); // Triger на кнопку зберегти

    const [testInfo, setTestInfo] = useState([]); // Інфа про тест


    function SaveToTestInfo(quesionBlckInfo)        // Функція яка буде витягати дані про питання та відповіді і пушити в головний масив 
    {
        setTestInfo(prev =>([...prev, quesionBlckInfo]));
    }

    useEffect(()=>{             // UseEffect для перевірки чи все працює // один пустий масив на початку тому що там є UseEffect який пушить його при рендері
        console.log(testInfo);
    },[testInfo])
   

    const addTestBlock = () =>{             //Функція додавання блок для питання
        const blockId = uuidv4();
        setNumberBlocks(prev => ([...prev, blockId]));
    }


    useEffect(()=>{             // UseEffect який при рендерінгу створює один блок питання по замовчуванню
        const id = uuidv4();
        setNumberBlocks(prev=> ([...prev, id]));
    },[])

    
   
    return (
        <div className={ConstructStyles.ConstructorTests}>
            <h2>Констуктор тестів</h2>
            <div>

                {numberBlocks.map((id, index) => {

                    return(<TestBlock SaveToTestInfo={SaveToTestInfo} setgetValueMain={setgetValueMain} GetValueMainState={GetValueMain} index = {index} key={id}/>)
                })}

                <div className={ConstructStyles.addTestsBtn}>
                    <button onClick={addTestBlock}>Додати блок запитань</button>
                    <button onClick={()=>{setgetValueMain(true)}} >Get Info</button>
                </div>

            </div>
            <p ref={errorParagraph} style={{ color: 'red' }}></p>
        </div>
    )
}

export default ConstructorTests;