import styled from "styled-components"

export default function Selector({selectedCity, setSelectedCity, arrayOfCities}) {
  
  const handleSelectedValue = (event) => {
    const option = event.target.value;
    setSelectedCity(option)
  }

  return (
    <SelectorDiv>
      <select name="cities" id="cities" onChange={handleSelectedValue} value={selectedCity}>
        
        {arrayOfCities.map(e => (
          <option value={e.name} key={e.id}>{e.name}</option>
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