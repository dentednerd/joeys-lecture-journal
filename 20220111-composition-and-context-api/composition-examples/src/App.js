import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';
import FancyBorder from './components/FancyBorder';
import PostIt from './components/PostIt';
import Expandable from './components/Expandable';
import RequireLogin from './components/RequireLogin';
import './App.css';

function App() {
  const { logout } = useContext(UserContext);

  return (
    <div className="App">
      <h1>Composition</h1>
      <RequireLogin>
        <FancyBorder>
          <p>this has a fancy border</p>
        </FancyBorder>
        <PostIt title="to do list">
          <p>write some code</p>
          <p>test that code</p>
          <p>ship that code</p>
        </PostIt>
        <Expandable>
          <p>this is a child</p>
          <p>this is also a child</p>
          <p>this one, however, is a dinosaur</p>
        </Expandable>
        <Expandable className="fancy">
          <p>different</p>
          <p>children</p>
        </Expandable>
        <button onClick={logout}>Log out</button>
      </RequireLogin>
    </div>
  );
}

export default App;
