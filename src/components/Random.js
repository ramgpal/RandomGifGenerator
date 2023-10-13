import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false); // Changed to boolean

    // async function fetchData() {
    //     setLoading(true); // Changed to boolean
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false); // Changed to boolean
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center mt-[25px] gap-y-5">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        A Random GIF
      </h1>
      {loading ? (<Spinner />) : (<img src={gif} width="450" alt="Random GIF" />)}

      <button
        onClick={fetchData} 
        className="w-10/12 bg-white opacity-60 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
