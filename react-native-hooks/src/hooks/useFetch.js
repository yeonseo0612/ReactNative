import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inProgress, setInProgress] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setInProgress(true);
      try {
        const res = await fetch(url);
        const result = await res.json();

        if (res.ok) {
          setData(result);
          setError(null);
        } else {
          throw result;
        }
      } catch (err) {
        setError(err);
      } finally {
        setInProgress(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, inProgress };
};