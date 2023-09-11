import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"

export default function Selector({selectedCity, setSelectedCity}) {
  
  const URL = "http://localhost:3001/cities"
  
  const handleSelectedValue = (event) => {
    const option = event.target.value;
    setSelectedCity(option)
  }

  const [arrayOfCities, setArrayOfCities] = useState([])

  useEffect(() => {
    const promise = axios.get(URL);
    let shallowCopy = []
    promise.then(obj => setArrayOfCities(obj.data))

   
    
  }, [])
  console.log(arrayOfCities)

  return (
    <SelectorDiv>
      <select name="cities" id="cities" onChange={handleSelectedValue} value={selectedCity}>
        
        {arrayOfCities.map(e => (
          <option value={e.name}>{e.name}</option>
        ))}
      
      </select>
    </SelectorDiv>
  )
}

const SelectorDiv = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
  select {
    width: 90px;
    border-radius: 5px;
    box-shadow: 0px 7px 13px -6px rgba(0,0,0,0.44);
    padding: 2px;
  }
`