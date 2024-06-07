import { useState } from "react";
import axios from "axios";
import { useEffect } from "react"; 

import Spinner from "./Spinner";


function Tag(){
    
    const [gif,setGif] = useState("fake link");
    const [loading,setLoading] = useState(true); 
    const [text,setText] = useState('happy');

    function changeHandler(event){
        setText(event.target.value);
    }

    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${text}`; 

     async function fetchData(){
        // const output = await fetch(url);
        setLoading(true);
        const output = await axios.get(url);
        const imgUrl = output.data.data.images.downsized_large.url;
        setGif(imgUrl);
        setLoading(false);
        console.log(output);
     }
     
    
    useEffect(()=>{
        fetchData();
    },[])

    function clickHanler(){
        fetchData();
    } 
   

    return (
        <div className="flex flex-col w-1/2 mx-auto h-[350px] bg-gradient-to-r from-rose-400 to-orange-300  items-center justify-evenly space-y-4 mb-5
            rounded-lg   " >

            <h1 className=" w-4/6 mx-auto font-semibold underline underline-offset-2 text-lg " >Random {text} GIF</h1>

            {loading?<Spinner/>:<img src={gif} alt="cooking"
                className="w-1/3 h-[150px] object-contain"
            />  }

            

            <input type="text" placeholder="search gifs"
                className="w-4/6 text-center rounded-md font-semibold py-1"
                onChange={changeHandler}  
            />

            <button onClick={clickHanler}
                className="w-4/6 bg-gradient-to-r from-sky-400 to-blue-500 text-center rounded-md font-semibold py-1"
            >Generate</button>
        </div>
    )
}

export default Tag;