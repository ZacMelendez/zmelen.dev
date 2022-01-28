import { useState } from "react";

function useLazyFetch({ onSuccess, onError }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(true);
  };

  const makeFetch = async ({ url, options = null }) => {
    setData(null);
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(url, options);
      const parsed = await response.json();

      if (response.status !== 200) {
        throw parsed;
      }

      if (onSuccess) onSuccess(parsed);
      setData(parsed);
      return setLoading(false);
    } catch (err) {
      if (err.name === 'AbortError') return;

      if (onError) onError(err);

      setData(null);
      setError(err);
      return setLoading(false);
    }
  };

  return [makeFetch, { data, error, loading, reset }];
}

export default useLazyFetch;
