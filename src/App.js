import logo from './logo.svg';
import './App.css';
import { Button } from './components/button';
import { ProfilePicture } from './components/pp';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [buttons, setButtons] = useState([
    {
      name: "Loading",
      link: "#"
    }
  ])

  const [name, setName] = useState("Loading...");

  const GetButtons = () => {
    axios.get("data/links.json").then((res) => {
      setButtons(res.data);      
    })
  }

  const GetName = () => {
    axios.get("data/name.txt").then((res) => {
      setName(res.data);      
    })
  }

  useEffect(() => {
    GetButtons();
    GetName();
  }, [])

  return (
    <div className="App">
      <ProfilePicture url="img/pp.jpg"></ProfilePicture>
      <div>
        <h1 style={{color: "white"}}>
          {name}
        </h1>
      </div>
      {
        buttons.map((elem, i) => {
          return (
            <Button name={elem.name} img={elem.img} link={elem.link} key={i} />
          )
        })
      }
    </div>
  );
}

export default App;
