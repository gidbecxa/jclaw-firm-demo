import React, { useRef } from 'react'
import data from './testimonialsData'
import {
  ArrowDiv,
  Avatar,
  Container,
  MobileArrowDiv,
  Review,
  Reviewer,
  ReviewerDetails,
  ReviewerPosition,
  Section,
  StarDiv,
  TestimonialCard,
  TestimonialDiv,
  TestimonialHeader,
  Testimonials
} from './Testimonials.styled'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconContext } from "react-icons";
import { AiFillStar } from 'react-icons/ai'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { theme } from '../Theme';

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: theme.breakpoints.smallestMobile,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: theme.breakpoints.tablet,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.laptop,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Section>
      <Container>
        <StarDiv aria-label="5 out of 5 stars" role="img">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} />
          ))}
        </StarDiv>

        <TestimonialHeader>
          Trusted by Clients & Peers
          <ArrowDiv>
            <BsFillArrowLeftCircleFill
              onClick={handlePrev}
              aria-label="Previous testimonial"
              role="button"
            />
            <BsFillArrowRightCircleFill
              onClick={handleNext}
              aria-label="Next testimonial"
              role="button"
            />
          </ArrowDiv>
        </TestimonialHeader>

        <Testimonials>
          <Slider {...settings} ref={sliderRef}>
            {data.map((obj) => (
              <TestimonialDiv aria-hidden="true" key={obj.key} className={obj.class}>
                <TestimonialCard>
                  <Review>
                    &ldquo;{obj.description}&rdquo;
                  </Review>
                  <ReviewerDetails>
                    <Avatar
                      src={obj.image}
                      alt={`${obj.name}'s profile`}
                      loading="lazy"
                    />
                    <div>
                      <Reviewer>{obj.name}</Reviewer>
                      <ReviewerPosition>{obj.position}</ReviewerPosition>
                    </div>
                  </ReviewerDetails>
                </TestimonialCard>
              </TestimonialDiv>
            ))}
          </Slider>
        </Testimonials>

        <MobileArrowDiv>
          <IconContext.Provider value={{ size: '2.5rem' }}>
            <BsFillArrowLeftCircleFill
              onClick={handlePrev}
              aria-label="Previous testimonial"
            />
            <BsFillArrowRightCircleFill
              onClick={handleNext}
              aria-label="Next testimonial"
            />
          </IconContext.Provider>
        </MobileArrowDiv>
      </Container>
    </Section>
  )
}

export default Testimonial