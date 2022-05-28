import { useState } from "react";
import { Users } from "./users";
import "./App.css";
import Table from "./Table";


function App() {

  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) => 
keys.some(key=>item[key].toLowerCase().includes(query))
    ) 
  };
  // const [query, setQuery] = useState("");
  // const keys = ["first_name", "last_name", "email"];
  // console.log(Users[0]);
  // const search = (data) => {
  //   return data.filter((item) => item.first_name.toLowerCase().includes(query)|| 
  //   item.last_name.toLowerCase().includes(query)|| 
  //   item.email.toLowerCase().includes(query)
  //   ) 
  // ;
  // };




  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Table data={search(Users)}/>


      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li className="listItem" key={user.id}>
            {user.first_name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;

