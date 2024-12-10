import {React,useState} from 'react'
import './Main.css';
import Content from './Content';
export default function Main() {
    let [page,setPage]=useState("Home");
    function changepage(event)
    {
        setPage(event.target.id);
    }
  return (
    <div className="container">
      <div id="m1">
        <button id="Home" onClick={changepage}>Home</button>
        <button id="About"onClick={changepage}>About</button>
      </div>
      <div id="m2" name="output">
       <Content pageno={page}/>
      </div>
    </div>
  )
}
