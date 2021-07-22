import React, {useState, useEffect}from 'react'
import ProgressBar1 from './ProgressBar1';

export default function Progress1() {
    const [value, updateValue] = useState(0);
     
    useEffect (()=>{
        const interval= setInterval(()=>{
            //its run every seconds
            updateValue(oldValue =>{
                //update the value by 10 
                const newValue = oldValue + 10;
                    if(newValue === 100){
                        //if the value hits 100 clear the interval
                        clearInterval(interval);
                    }
                 return newValue;   
            });
        }, 10000) // we set miliseconds to 1000 so method will execute the function once every 1 second
    }, []);

    return (
        <div style={{marginTop:'200px'}}>
            <h1> React Progress Bar Approach - 2 </h1>
            <ProgressBar1 value={value}/>
        </div>
    )
}
