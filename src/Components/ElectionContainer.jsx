import styled from "styled-components"

export default function ElectionContainer({ selectedCity, arrayOfCandidates, arrayOfCities, arrayOfElections }) {

  let selectedCityObj = arrayOfCities.find(e => e.name === selectedCity)

  const numberOfCandidates = arrayOfElections.filter(e => e.cityId === selectedCityObj.id)

  

  return (
    <Container>
      {
        arrayOfCandidates.length === 0 ? "" : (
          <>
            <h1>Eleição em {selectedCityObj.name}</h1>
            <div>
              <p><span>Total de eleitores:</span> {selectedCityObj.votingPopulation}</p>
              <p><span>Abstenção:</span> {selectedCityObj.votingPopulation - selectedCityObj.presence}</p>
              <p><span>Comparecimento:</span> {selectedCityObj.presence}</p>
            </div>
            <p>{numberOfCandidates.length} candidatos</p>
          </>
        )
      }
    </Container>
  )
}

const Container = styled.div`
  width: 90%;
  margin: auto;
  border: 1px solid lightgray;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 20px;
    font-weight: bold;
  }

  div {
    margin-top: 10px;
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
  }

  span {
    font-weight: bold;
  }

`