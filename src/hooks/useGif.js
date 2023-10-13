import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  async function fetchData() {
    setLoading(true);
    try {
      const url = tag ? tagMemeUrl : randomMemeUrl;
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      console.log(imageSource);
      setGif(imageSource);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
