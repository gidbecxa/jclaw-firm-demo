import styled from 'styled-components'
import Slider from 'react-slick';
import { theme } from '../Theme';

export const Section = styled.section`
    width: 100%;
    background-color: ${theme.colors.primaryBackground};
    padding: 5rem 0;
    color: white;
    position: relative;
    overflow: hidden;

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 3rem 0;
    }
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Testimonials = styled(Slider)`
    width: 100%;
    margin-top: 2rem;

    .slick-dots {
        bottom: -40px;
        
        li button:before {
            color: white;
            opacity: 0.5;
            font-size: 10px;
        }
        
        li.slick-active button:before {
            color: white;
            opacity: 1;
        }
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        .slick-dots {
            bottom: -30px;
        }
    }
`;

export const TestimonialDiv = styled.div`
  display: grid;
  place-items: center;
  border:0px;
  cursor:grab;
  height: auto;
  padding: 1.5rem 3rem 0.125rem 0;
  margin-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 1.5rem 3rem 1.125rem 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
      padding:0px;
    };
`

export const TestimonialCard = styled.div`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 2.5rem;
    /*margin: 0 1rem;*/
    height: auto;
    min-height: 300px;
    display: flex !important;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 2rem;
        margin: 0 0.5rem;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 1.5rem;
        min-height: 280px;
    }
`;

export const StarDiv = styled.div`
    display: flex;
    gap: 0.5rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #FFD700;
`;

export const TestimonialHeader = styled.h2`
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    @media (max-width: ${theme.breakpoints.tablet}) {
        font-size: 2rem;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 1.75rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
`;

export const ArrowDiv = styled.div`
    display: flex;
    gap: 1.5rem;
    font-size: 2rem;

    & > * {
        cursor: pointer;
        transition: transform 0.3s ease;
        
        &:hover {
            transform: scale(1.1);
        }
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        display: none;
    }
`;

export const MobileArrowDiv = styled.div`
    display: none;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
    font-size: 2rem;

    & > * {
        cursor: pointer;
        transition: transform 0.3s ease;
        
        &:hover {
            transform: scale(1.1);
        }
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        display: flex;
    }
`;

export const Review = styled.p`
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-family: 'Open Sans', sans-serif;
    flex-grow: 1;

    @media (max-width: ${theme.breakpoints.tablet}) {
        font-size: 1rem;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }
`;

export const ReviewerDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: ${theme.breakpoints.smallestMobile}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
`;

export const Avatar = styled.img`
    width: 80px !important;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    border: 2px solid rgba(255, 255, 255, 0.2);
    @media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
    height: 80px;
  }
`;

export const Reviewer = styled.h3`
    font-weight: 700;
    font-size: 1.5rem;
    color: ${theme.colors.secondaryBackground};
    letter-spacing:0.5px;
    margin-bottom: 0.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
      font-size: 1.25rem;
    };
    @media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
      font-size: 1.125rem; 
    }
`;

export const ReviewerPosition = styled.small`
    font-size: 1.125rem;
    opacity: 0.8;
    display: block;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 1rem;
    }
`;