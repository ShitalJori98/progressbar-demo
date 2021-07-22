import {useState}from 'react';
import Progress from "./Progress";
import './progressBar.css'

export default function ProgressBar(){
 const [progress, updateProgress] = useState(10);

  const onButtonClick = () =>
    updateProgress((value) => {
      return value >= 100 ? 0 : value + 10;
    });

  return (
    <>
      <h1 className="text-danger">React Progress Bar Approach - 1 </h1>
      <p >
        <progress value={progress} max="100" className=" bg-warning" style={{width:'500px'}} >
          {progress}%
        </progress>
      </p>
      <p>
        <Progress value={progress} />
      </p>
      <p>
        <button onClick={onButtonClick} className="btn btn-outline-success">Add 10%</button>
      </p>
    </>
  );
};
