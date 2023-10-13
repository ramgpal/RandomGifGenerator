import React, {useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const Tag= () => {
    const[tag, setTag] = useState('Car');

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false); // Changed to boolean

    // async function fetchData() {
    //     setLoading(true); 
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false); 
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const {gif, loading, fetchData} = useGif(tag);

    function clickHandler() {
        fetchData(tag);
    }

    function changeHandler(event) {
        setTag(event.target.value);
    }

    return (
        <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center mt-[25px] gap-y-5">
            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">{tag} Random GIF</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} width="450" alt="Random GIF" />)
            }
            <input
            className="w-10/12 text-center bg-white opacity-60 text-lg py-2 rounded-lg mb-[3px]"
            onChange={changeHandler}
            value={tag}
            />
            <button onClick={clickHandler} className="w-10/12 bg-white opacity-60 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
        </div>
    );
};

export default Tag;
