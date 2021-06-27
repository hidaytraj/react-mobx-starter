import './App.css';
import { useObserver } from 'mobx-react';

// this is the hook function we have made on `stores/index.js` to access all of our stores
import { useStores } from "./stores";
import Note from './components/note/Note';


const App = () => {

  // here you can access all of the stores registered on the root store
  const { userStore } = useStores();

  // tracking the name change
  const handleNameChange = (e) => {
    e.preventDefault();

    const {
      target: { value }
    } = e;

    // access the user store set name action
    userStore.setUserName(value);
  };



  return useObserver(() => (
    <div className="App">
      <h1>hello {userStore.name}</h1>

      <h2>Change your name here</h2>
      <input type="text" value={userStore.name} onChange={handleNameChange} />

      <Note />
    </div>
  ));
}

export default App;
