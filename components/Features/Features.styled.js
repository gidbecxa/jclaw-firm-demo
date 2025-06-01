import styled from "styled-components";
import { theme } from "../Theme";
import { MainHeading } from "../cssHelper";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding: 6rem 0;
  background: ${theme.colors.secondaryBackground};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -10%;
    width: 40%;
    height: 120%;
    background: url('/images/abstract-legal-pattern.svg') no-repeat;
    background-size: contain;
    opacity: 0.03;
    z-index: 0;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.125fr 1.5fr;
  gap: 60px;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 40px;
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-right: 0;
  }
`;


export const RightPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  background: white;
  border-radius: 24px;
  padding: 60px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  position: relative;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 40px 30px;
  }
`;

export const Header = styled.div`
  margin-bottom: 60px;
`;

// export const Caption = styled.span`
//   display: block;
//   font-family: 'Lora', sans-serif;
//   font-size: 1.1rem;
//   color: ${theme.colors.primaryBackground};
//   text-transform: uppercase;
//   letter-spacing: 2px;
//   margin-bottom: 20px;
//   font-weight: 500;
// `;

export const Caption = styled.h4`
color: #353535;
text-align: left;
text-transform: uppercase;
font-size: 1.25rem;
letter-spacing: 2px;
font-family: 'Lora', sans-serif;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  font-size:16px;
}
@media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
  font-size:16px;
}
`

export const Description = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  line-height: 1.6;
  color: #555;
  max-width: 80%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.25rem;
  margin-top: 1.5rem;
  ${MainHeading}
`;

export const Subtitle = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #555;
  max-width: 80%;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const StatCard = styled.div`
  padding: 30px;
  border-radius: 16px;
  background: white;
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    border-color: ${theme.colors.primaryBackground}20;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 25px 20px;
  }
`;

export const StatValue = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: ${theme.colors.accentBackground};
  line-height: 1;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease-out;
  
  /* Smooth transition for counter changes */
  & > span {
    display: inline-block;
    min-width: 0.5em;
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2.8rem;
  }
`;

export const StatLabel = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${theme.colors.teritory};
  margin-bottom: 15px;
`;

export const StatDescription = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${theme.colors.primaryBackground};
  color: white;
  padding: 18px 32px;
  border-radius: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 20px;
  width: 100%;
  text-align: center;
  border: none;
  cursor: pointer;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: ${theme.colors.teritory};
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);

    svg {
      transform: translateX(5px);
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 16px 24px;
    font-size: 1rem;
  }
`;