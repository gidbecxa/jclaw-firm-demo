import styled from "styled-components";
import { theme } from "../Theme";
import Slider from "react-slick";
import { MainHeading } from "../cssHelper";

export const Section = styled.section`
  width: 100vw;
  padding: 80px 0;
  background: #ECEAD6;
  // background: ${theme.colors.primaryBackground};
  color: #1d1a26;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 50px 0;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1600px;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const SectionTitle = styled.h2`
${MainHeading}
  font-family: "Playfair Display", serif;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.5rem;
  /*max-width: 600px;*/
  margin-top: 1.5rem;
`;

export const NavigationArrows = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top:20px;
  }
`;

export const ArrowIcon = styled.button`
  background: transparent;
  border: none;
  color: #6f6f6f;
  cursor: pointer;
  font-size: xxx-large;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.teritory};
    transform: scale(1.1);
  }
`;


export const StyledSlider = styled(Slider)`
  cursor: grab;
`;

export const CardContainer = styled.div`
  padding: 20px 0;
`;

export const StoryCard = styled.article`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  height: 100%;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const CardContent = styled.div`
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StoryTitle = styled.h3`
  font-size: 1.3rem;
  font-family: "Playfair Display", serif;
  color: ${theme.colors.teritory};
  margin: 10px 0;
  line-height: 1.3;
`;

export const StoryOutcome = styled.span`
  display: inline-block;
  background: ${theme.colors.primaryBackground}15;
  color: ${theme.colors.primaryBackground};
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 10px;
  align-self: flex-start;
`;

export const StoryExcerpt = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
`;

export const ReadMoreLink = styled.a`
  color: ${theme.colors.primaryBackground};
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.teritory};
    gap: 8px;
  }

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(3px);
  }
`;