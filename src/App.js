import logo from './logo.svg';
import './App.css';
import ProgressBar from './components/ProgressBar';
import Progress1 from './component1/Progress1';

function App() {
  return (
    <div className="App">
   {/*   <ProgressBar/> */}               {/* Progress bar Approach - 1 */}
    <Progress1/>                           {/* Approach - 2 */}
    </div>
  );
}

export default App;
