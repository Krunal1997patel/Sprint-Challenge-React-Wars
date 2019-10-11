import React from 'react';
import styled from 'styled-components';

const CharacterCard = props => {

    const Card = styled.div`
    background: rgba(0,0,0, 0.7);
    width: 800px;
    margin: 0 auto;
    border-radius: 20px;
    color: white;
    `

    const Back = styled.button`
    background: #DF911B;
    color: white;
    border: 1px solid black;
    margin: 1%;
    padding: 2%;
    `
    const Next = styled.button`
    background: #DF911B;
    color: white;
    border: 1px solid black;
    margin: 1%;
    padding: 2%;
    `
    const Title = styled.h1`
    background-color: black;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color: white;
    margin-bottom: 0;
    padding: 10px 0 10px;
    `

    const SubText = styled.h3`
    background-color: #1B69DF;
    padding: 5px 0 5px;
    margin-top: ${props => props.noMargin ? 0 : null};
    `

    const CurrentNum = styled.span`
    background-color: #000;
    color: white;
    padding: 2%;
    `

    const Text = styled.p`
    color: white;
    font-size: 1.2rem;
    `

    // console.log(props.nextNum)


    return(
        <Card >
            <Title> {props.name}</Title>
            <div>
                <SubText noMargin >Physical description</SubText>
                <Text> Species: {props.race}</Text>
                <Text> Gender: {props.sex}</Text>
                <Text> Eye Color: {props.eye}</Text>
                <Text> Hair Color: {props.hairColor}</Text>
                <Text> Skin Color: {props.color}</Text>
                <Text> Height: {props.height}</Text>
                <Text> Mass: {props.mass}</Text>

                <SubText>Biographical information</SubText>
                <Text> Birthday: {props.birth}</Text>
                <Text> Classification: {props.classification}</Text>
                <Text> Language: {props.language}</Text>

                <SubText>Homeworld information</SubText>
                <Text> Home World: {props.home}</Text>
                <Text> Average Height: {props.avgHeight} </Text>
                <Text> Average Lifespan: {props.avgLife}</Text>
                <Text> Climate: {props.climate}</Text>
                <Text> Diameter: {props.diameter}</Text>
                <Text> Population: {props.population}</Text>

                <Back onClick={() => props.sub()}>{props.nextNum -1} &#8592; Back</Back>
                <CurrentNum>{props.nextNum}</CurrentNum>
                <Next onClick={() => props.add()}>Next 	&#8594; {props.nextNum + 1}</Next>
            </div>
        </Card>
        
    )
}

export default CharacterCard;