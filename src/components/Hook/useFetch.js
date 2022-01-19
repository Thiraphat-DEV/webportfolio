import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const req = await fetch(url);
        const res = await req.json();
        setData(res);
      } catch (err) {
        console.log("Error FetchData");
      }
    };

    fetchData();
  }, [url]);
  return data;
};

export default useFetch;
