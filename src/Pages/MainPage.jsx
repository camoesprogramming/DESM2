import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Selector from "../Components/Selector";
import GlobalStyle from "../Style/GlobalStyle";
import axios from "axios";



export default function MainPage() {
  const [selectedCity, setSelectedCity] = useState("Asgard")
  

  return (
    <>
      <GlobalStyle />
      <Header />
      <Selector 
      setSelectedCity = {setSelectedCity}
      selectedCity = {selectedCity}/>
    </>
  )
}