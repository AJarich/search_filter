import React, {useState} from 'react';
import './App.css';
import JSONDATA from './MOCK_DATA.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <div className="search-div">
      <h1>Search for a Name!</h1>
      <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
      {JSONDATA.filter((val) => {
        if (searchTerm === ""){
          return val;
        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        } else {
          return false;
        }}).map((val, key) => {
         if(searchTerm === ""){
           return "";
         } else {
          return (
            <div key={val.id}><p className="user">{val.first_name} {val.last_name}</p></div>
          );
        }
      })};
      </div>
    </div>
  );
}

export default App;
