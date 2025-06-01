import { useRouter } from 'next/router'
import React,{useState,useEffect} from 'react';
import { Container, Screen, Tagline, Title } from "./LoadingScreen.styled"



const LoadingScreen = () => {

    

  return (
   <Screen>
    <Container>
        <Title>Chew Law Offices</Title>
        <Tagline>San Francisco Criminal Defense Attorney</Tagline>
    </Container>
   </Screen>
  )
}

export default LoadingScreen