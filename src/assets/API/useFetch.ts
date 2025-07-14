import { useState, useEffect } from "react";

const API_URL = "https://api.thedogapi.com/v1";
const API_KEY =
  "live_s74hohurDrzBHdFBaCd6Zez9njoBd0VpYCeOmU51qDbCwmkXbN0YqFs7dyqaXc90";

const useFetch = <T>(category: string, params?: Record<string, any>): [boolean, T, boolean] => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState<T>();

  const fetchParams = new URLSearchParams(params || {}).toString();
  const fetchURL = `${API_URL}/${category}?${fetchParams}&api_key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading) {
        setLoading(true);
        setError(false);
      }

      try {
        const response = await fetch(fetchURL, { mode: "cors" });
        if (!response.ok) throw new Error("unknown error!");

        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchURL]);

  return [isLoading, data as T, isError];
};

export default useFetch;
