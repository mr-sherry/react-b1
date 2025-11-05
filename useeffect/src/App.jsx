import { useEffect, useState } from 'react';
import SimpleCircleSpinner from './Components/Loader/Loader';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let dataGot = await response.json();

      setData(dataGot);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  console.log(data);

  useEffect(() => {
    let timer = setTimeout(() => {
      getData();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  //https://jsonplaceholder.typicode.com/

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {loading ? (
        <h1>
          <SimpleCircleSpinner
            size={40}
            speed={1.5}
            className='text-indigo-600'
          />
        </h1>
      ) : data ? (
        data.map((post, index) => (
          <div
            key={index}
            style={{ width: '20%', border: '2px solid black', padding: '20px' }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <h1>{error.message}</h1>
      )}
    </div>
  );
}

export default App;
