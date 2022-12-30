import { useState, useEffect } from "react";

const useFetch = (id = "") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/avocados/" + id);
      const dataJson = await response.json();
      setData(dataJson);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, loading, error };
};

export default useFetch;
