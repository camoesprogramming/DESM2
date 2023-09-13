import styled from "styled-components"
import antman from "../Images/antman.png"
import aquaman from "../Images/aquaman.png"
import batman from "../Images/batman.png"
import blackWidow from "../Images/blackWidow.png"
import captainAmerica from "../Images/captainAmerica.png"
import captainMarvel from "../Images/captainMarvel.png"
import flash from "../Images/flash.png"
import greenLantern from "../Images/greenLantern.png"
import ironMan from "../Images/ironMan.png"
import spiderMan from "../Images/spiderMan.png"
import superman from "../Images/superman.png"
import thor from "../Images/thor.png"
import wonderWoman from "../Images/wonderWoman.png"

export default function CandidateCard({candidateID, selectedCityObj, candidatesOfThisElection, arrayOfCandidates}) {
  // console.log(arrayOfCandidates)
  const candidateDataObj = arrayOfCandidates.find(e => e.id === candidateID )
  
  
  let candidateImage;

  switch (candidateDataObj.name) {
    case "Antman":
      candidateImage = antman;
      break;
    case "Aquaman":
      candidateImage = aquaman;
      break;
    case "Batman":
      candidateImage = batman;
      break;
    case "BlackWidow":
      candidateImage = blackWidow;
      break;
    case "CaptainAmerica":
      candidateImage = captainAmerica;
      break;
    case "CaptainMarvel":
      candidateImage = captainMarvel;
      break;
    case "Flash":
      candidateImage = flash;
      break;
    case "GreenLantern":
      candidateImage = greenLantern;
      break;
    case "IronMan":
      candidateImage = ironMan;
      break;
    case "SpiderMan":
      candidateImage = spiderMan;
      break;
    case "Superman":
      candidateImage = superman;
      break;
    case "Thor":
      candidateImage = thor;
      break;
    case "WonderWoman":
      candidateImage = wonderWoman;
      break;
    default:
      candidateImage = ""
      break;
  }

  const resultsOfCandidate = candidatesOfThisElection.find(e => e.candidateId === candidateID)

  const winnerId = (() => {
    let candidateID = candidatesOfThisElection[0].candidateId
    let mostVotes = candidatesOfThisElection[0].votes;
    for (let i = 1; i < candidatesOfThisElection.length; i++) {
      if (candidatesOfThisElection[i].votes > mostVotes) {
        mostVotes = candidatesOfThisElection[i].votes
        candidateID = candidatesOfThisElection[i].candidateId
      }
    }
    return candidateID
  })()
  
  
  const isElected = (() => {
    if (winnerId === candidateID ) {
      return true
    }
    return false
  })()

  const percentage = (() => {
    let votesCandidate = resultsOfCandidate.votes;
    let totalVotes = selectedCityObj.presence;
    return(((votesCandidate * 100)/totalVotes).toFixed(2))
    
  })()
console.log(selectedCityObj)
  return (
    <Card>
      <div>
        <img src={candidateImage} alt={candidateImage} />
        <div>
          <h2>{percentage}%</h2>
          <p>{resultsOfCandidate.votes} votos</p>
        </div>
      </div>
      <h1>{candidateDataObj.name}</h1>
      <h2  style={{color : isElected ? "green": "red"}}>{isElected ? "Eleito": "Não Eleito"}</h2>
    </Card>
  )
}

const Card = styled.div`
  max-width: 300px;
  height: 300px;
  box-shadow: 0px 7px 13px -6px rgba(0,0,0,0.44);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 28px;
    font-weight: bolder;
  }

  h2 {
    font-size: 22px;
    font-weight: bolder;
    
  }

  p {
    font-size: 16px;
    margin-top: 5px;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 60px;
  }

  div {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 25%;
    }
  }
`
