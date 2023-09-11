import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Selector from "../Components/Selector";
import GlobalStyle from "../Style/GlobalStyle";
import axios from "axios";




export default function MainPage() {

  const [selectedCity, setSelectedCity] = useState("Gotham")
  const [arrayOfCities, setArrayOfCities] = useState([])
  const URL = "http://localhost:3001"

  useEffect(() => {
    const promise = axios.get(`${URL}/cities`);
    promise.then(obj => setArrayOfCities(obj.data))
  }, [])
  

  return (
    <>
      <GlobalStyle />
      <Header />
      <Selector 
      setSelectedCity = {setSelectedCity}
      selectedCity = {selectedCity}
      arrayOfCities = {arrayOfCities}/>
    </>
  )
}