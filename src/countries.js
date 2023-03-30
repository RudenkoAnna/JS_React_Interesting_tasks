import React from "react";

export default function Countries(props){
  
  return(
  <ul className="Countries"> 
  
 {props.countries.map(function(country, index){ return (
   <li key="index"> The capital of {country.name} is {country.capital} </li>
 )})}
   </ul>
   )
}



