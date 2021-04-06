import UserList from "./components/user-list/UserList";
import UserProfile from "./components/user-profile/UserProfile";

import "./App.scss";

function App() {
  const hostname = "https://jsonplaceholder.typicode.com";
  return (
    <div className="App">
      <UserList datasource={`${hostname}/users`}/>
      <UserProfile
        name="Suresha Ram"
        email="suriram.sam@gmail.com"
        datasource={`${hostname}/posts`}
      />
    </div>
  );
}

export default App;
