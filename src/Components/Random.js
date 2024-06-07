
import { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";

import me from './asset/me.jpg';

function Random(){

    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const [gif,setGif] = useState("x");
    const [loading,setLoading] = useState(true);

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
        <div className="flex flex-col w-1/2 mx-auto h-[290px] bg-gradient-to-r from-rose-400 to-orange-300 items-center justify-evenly space-y-4 
            rounded-lg   shadow-lg " >

            <h1 className=" w-4/6 mx-auto font-semibold underline underline-offset-2 text-lg " >Random GIF</h1>

            <div>

                {loading?
                    <Spinner/>
                    :<img src={gif} alt="cooking"
                    className="w-full h-[150px] object-contain"
                /> }

            </div>


            
            <button onClick={clickHanler}
                className="w-4/6 bg-gradient-to-r from-sky-400 to-blue-500  text-center rounded-md font-semibold py-1"
            >Generate</button>
        </div>
    )
}

export default Random;