import { useEffect, useState, useRef } from "react";
import logo from "./assets/react.svg";
import "./App.css";
import "./styles/scss/index.scss";

//Services
import axios from './utils/axios.config.js';

//Mocks
import {getObservable} from './services/Http.service.js'; 

import { app } from './shared/core-game.js'

function App() {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  const productsLink = 'https://fakestoreapi.com/products';

  const ref = useRef(null);

  
  useEffect( () =>{
    getProductList();
    setUser(getObservable(productsLink));
debugger
    ref.current.appendChild(app.view);
    // Start the PixiJS app
    app.start();

    return () => {
      // On unload completely destroy the application and all of it's children
      app.destroy(true, true);
    };
  }, []);

  const getProductList = () => {
    
          axios.get(productsLink).subscribe(
              res => {
                  setProducts(res.data);
              },
              error => console.log(error),
              () => console.log('success')
          ).unsubscribe();
  }
  return (
    <div className="app">
      {/* <p>{userMocking ? userMocking.name : ""}</p> */}
      <p>{user.name}</p>
      <div ref={ref} />
      <h1>
        Hola React 
        <img src={logo} width="25" alt="react logo" />
      </h1>
      <div>
        <label htmlFor="name">Nombre: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
