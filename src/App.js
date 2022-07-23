import React, { useEffect,useState } from 'react';
import './App.css';

/**
 * Siempre que hablemos de useState -> me voy a imaginar en el example del contador 
 * useState -> returna una array -> [value (valor contador), setValue (funcion para actualizar el contador)]  
 */
function App() {

  function btnGetData(){
    console.log('Click')
  }

  return (
    <div className="my-3" style={{textAlign: 'center'}}>
      <button className="btn btn-success my-button" onClick={btnGetData}>Get data</button>
      <Card></Card>
    </div>
  );
}


/*Uso de hook useEffect*/
const Card=(props)=>{

  /*Simular mi propio API*/
  const data=[
    {id:1, name: 'Coyaks'},
    {id:2, name: 'Felix'},
    {id:2, name: 'Paula'},
  ];
  /**
   * Crear mi primer hook -> useState
   */
  const [valueUser, setUser]=useState([]);

  useEffect(()=>{
    console.log('useEffect success')
    getDataUserApi()
  },[])

  const getDataUserApi= async()=>{
    const data=await fetch('https://jsonplaceholder.typicode.com/users')
    const users=await data.json()
    setUser(users)
  }

  return (
    <div className="container border shadow p-3">
          <h3>Users</h3>
          <ul>
              {valueUser.map(o=>(
                <li key={o.id}>{o.name}</li>
              ))}

          </ul>
    </div>
  );
}

const Saludo=(props)=>{
  return (
    <div>
        <h2 className="title">Hola {props.name}</h2>
    </div>
  );
}

export default App;
