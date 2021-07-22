import react, {useState, useRef, useEffect }from 'react';

export const Progress = ({ value = 0, symbol = "%" }) => {
    // initialization of ref with value only happens first time
    const oldValue = useRef(value); // we will use useRef to keep the intermediate values
    const interval = useRef(null);  
    const [display, setDisplay] = useState(oldValue.current);
  
    useEffect(() => {
      interval.current && clearInterval(interval.current);
      
      interval.current = setInterval(() => {
        setDisplay((val) => {
          console.log(val);
          if (val >= value) {
            oldValue.current = value;
            clearInterval(interval.current);
            return val;
          }
          return val + 1;
        });
      }, 50);
  
      return () => clearInterval(interval.current);
    }, [value]);
  
    return (
      <span>
        {display}
        {symbol}
      </span>
    );
  };
  export default Progress;