import './App.css';
import { useContext } from 'react';
import { AuthContext } from '../src/context/AuthContext'
import { ProfileContext } from '../src/context/ProfileContext'

function App() {
  const { isLogged } = useContext(AuthContext)
  const { name } = useContext(ProfileContext)
  return (
    <div className="App">
      {isLogged === true ? <p>Logged In</p> : <p>Not Logged In</p>}
      <p>{name}</p>
    </div>
  );
}

export default App;
