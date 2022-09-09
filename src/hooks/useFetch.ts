import { useCallback, useState } from 'react';

const useFetch = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [data, setData] = useState<T>();

  const request = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const json = await response.json();

      if (response.ok) {
        setError(undefined);
        setData(json);
      } else {
        setError(json);
      }
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return {
    isLoading,
    error,
    data,
    request,
  };
};

export default useFetch;
