import logo from './logo.svg';
import './App.css';
import Random from './Components/Random';
import Tag from './Components/Tag';

function App() {
  return (
    <div className="w-full h-full  flex flex-col bg-gradient-to-r from-orange-400 to-rose-400 ">
       <h2 className=' rounded-md w-10/12 mx-auto text-center my-7 py-4 text-2xl font-semibold ' >Random GIFs Generator</h2>
       <div className="w-10/12 mx-auto text-center flex flex-col justify-center space-y-5 mb-5" >
          <Random/>
          <Tag/>
       </div>
    </div>
  );
}

export default App;
