import styled from "styled-components";
import { motion } from "framer-motion";
import { flexColumn, divCenter, HeadingH3, HeadingH2, flexRowCenter, flexColumnCenter, PrimaryButton, MainHeading } from "../cssHelper";
import { theme } from "../Theme";

export const Section = styled.section`
  width: 100vw;
  max-width:100%;
  padding: 50px 0;
  background-color:#F8F5F0 ;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: fit-content;  
  } ;
`;

export const Container = styled.div`
  width: 90%;
  max-width:1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
  } ;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    flex-direction: column;
  } ;
  
`;

export const About = styled.div`
  margin-top: 1.5rem;
  width: ${({ theme }) => theme.width[10]};
  ${divCenter}
  margin-bottom: 2.5rem;
`;
export const AboutTitle = styled.h2`
  ${MainHeading}
  color: #A51C30;
  text-transform: titlecase;
  letter-spacing: 1px;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  color:#232323;
  position: relative;
  width: 100%;
  height:100%;
  text-align: left;
  padding:0 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    gap: 30px;
    margin-top:1rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    gap: 20px;  
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallMobile}) {
    gap: 30px;  
  }
`;

export const AboutDescription = styled.p`
  font-size: 18px;
  line-height: 1.75rem;
  width: ${({ theme }) => theme.width[10]};
  font-family: "Open Sans", sans-serif;
  text-align: left;
  color:#0D0A19;
  /*margin-bottom:0.25rem;*/
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    margin-bottom:0px; 
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    font-size: 16px;
    margin-bottom:0px; 
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
  margin-bottom:0px;
    
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
   
    margin-bottom:0px;

  }
`;
export const AboutQuote = styled.p`
  grid-row: 2/3;
  line-height:180%;
  color:#0D0A19;;
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin-top:20px;
    margin-bottom:20px;
  }
`;

export const AboutLink = styled.p`
color:#0D0A19;;
cursor:pointer;
text-decoration:underline;
`;

export const AboutButton = styled.button`
  ${PrimaryButton}
  background: ${theme.colors.primaryBackground};
  font-size: 1.125rem;
  font-weight:600;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.accent};
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const AboutImageDiv = styled(motion.div)`
  height: auto;
  padding-right: 30px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    padding-right: 0px;
  }
`;

export const AboutImage = styled.img`
  width: ${({ theme }) => theme.width[10]};
  height: 600px;
  
  object-fit: cover;
  object-position: center;


  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    max-height: 500px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    max-height: 400px;
    
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxs};

  }
`;
export const AboutBelow = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr;
  width: ${({ theme }) => theme.width[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${flexColumn}
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
    display: flex;
    flex-direction:column;
  } ;
`;

export const AboutContentLowerContainer = styled.div`
  display: flex;
  color:#0D0A19;;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;
