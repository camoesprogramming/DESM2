import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Selector from "../Components/Selector";
import GlobalStyle from "../Style/GlobalStyle";
import axios from "axios";
import ElectionContainer from "../Components/ElectionContainer";


export default function MainPage() {
  const URL = "http://localhost:3001";

  const [selectedCity, setSelectedCity] = useState("Gotham");

  const [arrayOfCities, setArrayOfCities] = useState([]);

  const [arrayOfCandidates, setArrayOfCandidates] = useState([]);

  const [arrayOfElections, setArrayOfElections] = useState([])




  useEffect(() => {

    const fetchData = async () => {

      try {
        const citiesResponse = await axios.get(`${URL}/cities`);
        setArrayOfCities(citiesResponse.data);

        const candidatesResponse = await axios.get(`${URL}/candidates`);
        setArrayOfCandidates(candidatesResponse.data);

        const electionsResponse = await axios.get(`${URL}/election`);
        setArrayOfElections(electionsResponse.data);

      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }

    };

    fetchData();

  }, [])


  return (
    <>
      <GlobalStyle />
      <Header />
      <Selector
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}
        arrayOfCities={arrayOfCities} />
      <ElectionContainer
        selectedCity={selectedCity}
        arrayOfCandidates={arrayOfCandidates}
        arrayOfCities={arrayOfCities}
        arrayOfElections={arrayOfElections} />
      
      
    </>
  )
}