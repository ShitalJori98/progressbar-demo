import React from 'react'
const ProgressBar1 = (props) => {
    const {value, max} = props;

    return (
        <div>
            <progress value={value} max={max}  style={{width:"400px"}}/>
            <span>{(value / max) * 100 }%</span>
     </div>
    );
};

ProgressBar1.defaultProps = {
    max :100 
};

export default ProgressBar1;