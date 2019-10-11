import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = () => {

    const [people, setPeoples] = useState({});
    const [count, setCount] =useState(1);
    const [home, setHome] = useState({});
    const [race, setRace] = useState({});

    let next = () => setCount(count + 1)
    let back = () => setCount(count - 1)

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/${count}/`)
        .then(response => setPeoples(response.data))
        .catch(err => console.log(`It's a trap ${err}`))
    },[count])

    // console.log(people)

    useEffect(() =>{
        axios
        .get(`${people.homeworld}`)
        .then(response => setHome(response.data))
        .catch(`homeworl err`)
    },[people.homeworld])

    useEffect(() =>{
        axios
        .get(`${people.species}`)
        .then(response => setRace(response.data))
        .catch(`species err`)
    },[people.species])

    // console.log(race);
    // console.log(home);

    // console.log(count)

    return(
        <div>
            {/* {
                people.map((pep => (
                    <CharacterCard 
                    name={people.name}
                    sex={people.gender}
                    eye={people.eye_color}
                    hairColor={people.hair_color}
                    color={people.skin_color}
                    height={people.height}
                    mass={people.mass}
                    />
                )))
            } */}
                  <CharacterCard 
                    // key={people.name}
                    name={people.name}

                    race={race.name}
                    sex={people.gender}
                    eye={people.eye_color}
                    hairColor={people.hair_color}
                    color={people.skin_color}
                    height={people.height}
                    mass={people.mass}

                    birth={people.birth_year}
                    classification={race.classification}
                    language={race.language}

                    home={home.name}
                    avgHeight={race.average_height}
                    avgLife={race.average_lifespan}
                    climate={home.climate}
                    diameter={home.diameter}
                    population={home.population}

                    add={next}
                    sub={back}

                    nextNum={count}
                    />
               
            
        </div>
    )

}

export default CharacterList;