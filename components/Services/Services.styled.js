import styled from "styled-components";
import { motion } from "framer-motion";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { colors, theme } from '../Theme'

import {
  HeadingH2,
  HeadingH3,
  MainHeading,
  PrimaryButton,
  flexColumn,

  flexColumnCenter,
} from "../cssHelper";


export const Section = styled.section`
    width: 100vw;
    height: 100%;
    max-width:100%;
    background: #F8F5F0;
    padding: 50px 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 0px 0;
    } ;
`;

export const Container = styled.div`
  height: 100%;
  width: 90%;
  max-width:1600px;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 3rem;
  padding: 2rem 0rem;
  background: #F8F5F0;
  border-radius: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
  } ;
`;

export const ServiceHeader = styled.div`
  width: ${({ theme }) => theme.width[10]};
  margin-top: 3rem;
  font-family: "Playfair Display", serif;
  margin-bottom: 0.1rem;
  color: #1d1a26;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 5px 0;
    font-size:38px;
    
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
    margin: 5px 0;
    font-size:35px;
    
    font-size: 28px;
  }
`;

export const WhatWeDo = styled.h4`
  font-family: 'Lora', sans-serif;
  color: #353535;
  text-align: left;
  text-transform: uppercase;
  font-size: 1.25rem;
  letter-spacing: 2px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size:16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
    font-size:16px;
  }
`;

export const ServiceHeadingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 10px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallMobile}) {
    justify-content: flex-start;
  }
`
export const ServiceHeading = styled.h2`
  ${MainHeading}
  color: #1d1a26;
}
`
export const ContactButton = styled.button`
  ${PrimaryButton}
  font-size: 1.125rem;
  font-weight:600;
  background: #000;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.teritory};
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const ServiceContent = styled.div`
  width: 100%;
  height:100%;
  margin-top: 3rem;
  margin-bottom: 2rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows:  1fr;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    grid-template-columns: 1fr;
    grid-template-rows:  1fr;

  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows:  1fr;

  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallMobile}) {
    grid-template-columns: 1fr;
    grid-template-rows:  1fr;

  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    grid-template-columns: 1fr;
    grid-template-rows:  1fr;

  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.extraSmallMobile}) {
    grid-template-columns: 1fr;
    grid-template-rows:  1fr;

  }

`;

export const ServiceDetails = styled.div`
  color: #555;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    width: 60%;

  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    width: 80%;

  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.extraSmallMobile}) {
    width: 80%;
  }
`;

export const ServicesText = styled.div`
  ${flexColumn};

  width: 100%;
  margin-bottom: 4rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
   margin-bottom:3rem;

  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    margin-bottom:2rem;

  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.extraSmallMobile}) {
   margin-bottom:1rem;

  }
`;

export const ServiceDescription = styled.p`
  font-size: 20px;
  font-weight: normal;
  width: 85%;
  line-height: 150%;
  letter-spacing: 0.3px;
  margin-top:12px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    font-size: 15px;
    width: 100%;
    /* font-size: ${({ theme }) => theme.fontSizes?.xxxs}; */
  }
`;
export const HorizontalLine = styled.span`
  font-size: 35px;
  margin-right: 15px;
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    display: none;
  }
`;

// export const ServiceNavImage = styled.div`
//   ${flexRowCenter};
//   width: 100%;
//   margin-bottom: 150px;
//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     ${flexColumn}
//   }
// `;

export const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Service = styled(motion.div)`
  ${flexColumn};
  align-items: center;
  background: white;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    border-color: ${theme.colors.primaryBackground};
  }
`;

export const ServiceCta = styled.span`
  color: ${theme.colors.primaryBackground};
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  ${Service}:hover &::after {
    transform: translateX(3px);
  }
`;

export const ServiceIndex = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes?.xxs};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxs};
  }
`;

export const ServiceImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: grid;
  place-items: center;
  background: ${theme.colors.primaryBackground}15;
  border-radius: 50%;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

export const ServiceImage = styled(motion.img)`
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
`;

export const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.teritory};
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
`;

export const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes?.xxxs};
`;
export const ServiceLink = styled.p`
  font-size: ${({ theme }) => theme.fontSizes?.xxxs};
  font-weight: 500;
  margin-top: 20px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxxs};
  }
`;
export const ServiceTextMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
`;
export const ServiceLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const ArrowIcon = styled(BsFillArrowUpRightCircleFill)`
  color: #A51C30;
  font-size: 49px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.s};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xs};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
  }
`;
