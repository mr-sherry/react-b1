import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  async function getPosts() {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setData(data);
      console.log('data in uesfetch', data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPosts();
    console.log(data);
  }, []);

  return [data];
}
