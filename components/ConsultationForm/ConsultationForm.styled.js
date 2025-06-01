import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroForm = styled(motion.div)`
  width: 90%;
  margin: 0 auto;
  padding: 3rem;
  border-radius: 20px;
  height: 100%;
  background: white;
  /* max-height:90%; */
  
  @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
    width: 100%;
    padding: 5rem 4rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding:2rem;
    max-width:100%;
    border-radius: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
    padding:1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width:100%;
`;

export const FormTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  /*color: ${({ theme }) => theme.colors.primaryBackground};*/
  color: #0D0A19;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const FormDescription = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const ContactForm = styled.div`
  font-size:22px;
  font-weight:600;
  letter-spacing:1.5;
  color:#0D0A19;;
  line-height:200%;
  
  @media (max-width: 768px) {  
    font-size: 18px;
    line-height:200%;
}
`;

export const FormLabel = styled.label`
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing:1.5;
  color: #0D0A19;
  /*display: block;
  margin-bottom: 0.5rem;*/
`;

const baseInputStyles = `
  /* width:300px; */
height:60px;
min-width:100%;
border:none;
border-bottom:2px solid #0D0A19;; 
color: #0D0A19;;
outline:none;
margin-bottom: 40px;
font-size:1.125rem;
background-color: transparent;
&::placeholder {
  opacity:0.8;
  
}
@media (max-width: 768px) {
  font-size: 18px;
  line-height: 35px;
  width: 175px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #0D0A19;;
}
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 30px;
  }
`;

export const NameInput = styled.input`
  ${baseInputStyles}
`;

export const PhoneInput = styled.input`
  ${baseInputStyles}
`;

export const CaseInput = styled.textarea`
  ${baseInputStyles}
  min-height: 60px;
  resize: vertical;
`;

export const UrgencySelect = styled.select`
  ${baseInputStyles}
`;

export const TermsCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

export const CheckboxTitle = styled.span`
  font-size: 1rem;
  margin-left: 0.8rem;
  letter-spacing:0.8;
  opacity:0.8;
  @media (max-width: 768px) {
  font-size: 14px;
  
}
`;

export const Checkbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  accent-color: ${({ theme }) => theme.colors.primaryBackground};
`;

export const SubmitForm = styled.button`
  padding: 1rem 2rem;
  background-color: #0D0A19;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  margin-top: 1.5rem;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.875rem 1.5rem;
  }
`;