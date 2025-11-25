import { useFetch } from '../Hooks/useFetch';

function Users() {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/users');
  console.log('data of users in compo', data);

  return <div>Users</div>;
}

export default Users;
// https://jsonplaceholder.typicode.com/users
