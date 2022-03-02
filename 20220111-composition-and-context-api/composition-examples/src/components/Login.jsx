import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // this is where an api call to check to login details would go
    setUser({ username });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <button>Login</button>
    </form>
  );
};

export default Login;
