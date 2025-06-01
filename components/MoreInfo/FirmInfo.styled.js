import styled from "styled-components";
import { theme } from "../Theme";

export const Section = styled.section`
  width: 100%;
  background-color: #f8f5f0;
  padding: 5rem 0;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.teritory};
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
    /*max-width: 600px;*/
    /*margin: 0 auto;*/
    justify-items: center;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const IconWrapper = styled.div`
//   background-color: ${theme.colors.primaryBackground};
  background-color: #FEC9C1;
  color: ##1d1a26;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 60px;
    width: 60px;
  }
`;

export const ContactText = styled.div`
  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${theme.colors.teritory};
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
    color: #555;
  }
`;

export const SocialLinks = styled.div`
  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${theme.colors.teritory};
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const SocialIcon = styled.a`
  background-color: #FEC9C1;
  color: #1d1a26;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  transition: all 0.3s ease;
  cursor: pointer;

  span {
    font-weight: 600;
  }

  &:hover {
    transform: translateY(-3px);
    background-color: ${theme.colors.primaryBackground};
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 60px;
    width: 60px;
  }
`;

export const BookBanner = styled.div`
  background-color: ${theme.colors.primaryBackground};
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const BookImage = styled.img`
  width: 128px;
  height: auto;
  padding: 6px 8px 4px 0;
  margin-right: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100px;
    margin-right: 1.5rem;
  }
`;

export const BookContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const BookTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

export const BookDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

export const DownloadButton = styled.button`
  background-color: white;
  color: ${theme.colors.primaryBackground};
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const Divider = styled.div`
  height: 1.5px;
  background-color: rgba(0, 0, 0, 0.15);
  margin: 1rem 0;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
`;

export const ModalBookImage = styled.img`
  width: 150px;
  height: auto;
  display: block;
  padding: 6px 8px 4px 0;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${theme.colors.teritory};
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primaryBackground};
  }
`;

export const SubmitButton = styled.button`
  background-color: ${theme.colors.primaryBackground};
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.accent};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;