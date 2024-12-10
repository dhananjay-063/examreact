import React from 'react'
import Home from "./Home";
import About from './About';
export default function Content({pageno}) {
    if(pageno=="Home")
    {
  return (
    <>
    <Home/>
    </>
  )
  }
  if(pageno=="About")
    {
  return (
    <>
    <About/>
    </>
  )
  }
}
