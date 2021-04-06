import UserList from "./components/user-list/UserList";
import UserProfile from "./components/user-profile/UserProfile";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <UserList datasource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile
        name="Suresha Ram"
        email="suriram.sam@gmail.com"
        datasource="https://jsonplaceholder.typicode.com/posts"
      />
    </div>
  );
}

export default App;
