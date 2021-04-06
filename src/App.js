import UserList from './components/user-list/UserList';

import './App.scss';

function App() {
  return (
    <div className="App">
      <UserList datasource="https://jsonplaceholder.typicode.com/users" />
    </div>
  );
}

export default App;
