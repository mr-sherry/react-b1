import { useFetch } from '../Hooks/useFetch';

const Products = () => {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/posts');
  console.log('data of products in compo', data);

  return <div>products</div>;
};

export default Products;

// https://usehooks.com/
// https://jsonplaceholder.typicode.com/posts
