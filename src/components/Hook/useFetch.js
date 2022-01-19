import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("Error FetchData");

  const fetchData = async () => {
    try {
      const req = await fetch(url);
      const res = await req.json();
      setData(res);
   
    } catch (err) {
      if (err) {
        setError(err);
        console.log("Error FetchData");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { data, error };
};

export default useFetch;
