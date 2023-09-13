import styled from "styled-components"
import CandidateCard from "./CandidateCard"
import { useEffect, useState } from "react";

export default function ElectionContainer({ selectedCity, arrayOfCandidates, arrayOfCities, arrayOfElections }) {

  const [selectedCityObj, setSelectedCityObj] = useState([])
  const [candidatesOfThisElection, setCandidatesOfThisElection] = useState([])
  

  useEffect(() => {
    const chosenCity = arrayOfCities.find(e => e.name === selectedCity);

    if (chosenCity) {
      setSelectedCityObj(chosenCity);
    }
  }, [arrayOfCities, selectedCity])

  useEffect(() => {
    const candidates = arrayOfElections.filter(e => e.cityId === selectedCityObj.id);

    if (candidates) {
      setCandidatesOfThisElection(candidates);
    }
  }, [selectedCityObj, arrayOfElections, selectedCity])



  return (
    <Container>
      {
        (arrayOfCandidates.length === 0 && arrayOfCities.length === 0 && arrayOfElections.length === 0) ? "Carregando dados..." : (
          <>
            <h1>Eleição em {selectedCityObj.name}</h1>
            <div>
              <p><span>Total de eleitores:</span> {selectedCityObj.votingPopulation}</p>
              <p><span>Abstenção:</span> {selectedCityObj.votingPopulation - selectedCityObj.presence}</p>
              <p><span>Comparecimento:</span> {selectedCityObj.presence}</p>
            </div>
            <p>{candidatesOfThisElection.length} candidatos</p>

            <CardsContainer>
              {candidatesOfThisElection.map(element => {
                return (
                  <CandidateCard
                    key={element.id}
                    candidateID={element.candidateId}
                    selectedCityObj={selectedCityObj}
                    candidatesOfThisElection={candidatesOfThisElection}
                    arrayOfCandidates = {arrayOfCandidates}
                  />
                )
              })}
             


              

            </CardsContainer>
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

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`