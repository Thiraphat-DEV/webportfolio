import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("Error FetchData");
  const [isLoading, setIsLoading] = useState("Loading...");

  const fetchData = async () => {
    try {
      const req = await fetch(url);
      const res = await req.json();
      setData(res);
      if (isLoading) setIsLoading(isLoading);
    } catch (err) {
      if (err) {
        setError(err);
        console.log("Error FetchData");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
