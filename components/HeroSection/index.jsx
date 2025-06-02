import { motion, useAnimation } from "framer-motion";

import Slider from "react-slick";

import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import {
  Hero,
  HeroDescription,
  Container,
  Section,
  HeaderButton,
  StarDiv,
  StarImg,
  ShowText,
  PeopleFaces,
  ClientLogo,
  ClientSection,
  ClientsContainer,
  ClientLogoDiv,
  AnimatedHeadline,
} from "./HeroSection.styled";
import styled from "styled-components";
import Link from "next/link";
import CaseConsultationForm from "../ConsultationForm";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "../Theme";

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: 0;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 150px;
  line-height: 190px;
  letter-spacing: 1.2px;
  word-wrap: break-word;
  word-spacing: 1px;
`;

const HeroSection = () => {
  // const inputRef = useRef(null)
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: theme.breakpoints.smallestMobile,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.tablet,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: theme.breakpoints.laptop,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.40em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const headlineText = "Your Freedom. Our Fight.".split(" ");

  return (
    <>
      <Section id="hero-section">
        <Container>
          <Hero>
            <AnimatedHeadline ref={ref}>
              {headlineText.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctrls}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: [0.2, 0.65, 0.3, 0.9],
                      },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </AnimatedHeadline>

            <HeroDescription
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              San Francisco&apos;s premier criminal defense attorneys fighting to
              protect your rights, your freedom, and your future.
            </HeroDescription>

            <Link href="tel:+1415-000-0000" passHref>
              <a>
                <HeaderButton secondary>Call Now: (415) 484-0906</HeaderButton>
              </a>
            </Link>

            <StarDiv role="img" aria-label="5 out of 5 stars">
              <StarImg
                src="/images/star svg.svg"
                alt=""
                aria-hidden="true"
              ></StarImg>
              <StarImg
                src="/images/star svg.svg"
                alt=""
                aria-hidden="true"
              ></StarImg>
              <StarImg
                src="/images/star svg.svg"
                alt=""
                aria-hidden="true"
              ></StarImg>
              <StarImg
                src="/images/star svg.svg"
                alt=""
                aria-hidden="true"
              ></StarImg>
              <StarImg
                src="/images/star svg.svg"
                alt=""
                aria-hidden="true"
              ></StarImg>
            </StarDiv>

            <ShowText>Rated 10/10 by 100+ clients</ShowText>

            <PeopleFaces
              src="/images/clients-intelpik.png"
              alt="clients prfoile images"
            ></PeopleFaces>
          </Hero>
          <CaseConsultationForm />
        </Container>
      </Section>

      <ClientSection>
        <ClientsContainer>
          <Slider {...settings}>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo
                src="/images/CLIENTS/ThreeBest.png"
                alt="Three Best Rated 2021 badge"
                tabIndex={-1}
              />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo
                src="/images/CLIENTS/Yelp.png"
                alt="Yelp Reviews badge"
                tabIndex={-1}
              />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo
                src="/images/CLIENTS/CA_SF_DUI_Attorney_2020.png"
                alt="Best DUI Lawyers in SF badge"
                tabIndex={-1}
              />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo
                src="/images/CLIENTS/M.png"
                alt="Minority Bare Exchange logo"
                tabIndex={-1}
              />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo
                src="/images/CLIENTS/Acctla.png"
                alt="Acctla logo"
                tabIndex={-1}
              />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo
                src="/images/CLIENTS/Cali.png"
                alt="CPDA logo"
                tabIndex={-1}
              />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo
                src="/images/CLIENTS/AvvoClient.png"
                alt="Avvo Clients Choice badge"
                tabIndex={-1}
              />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo
                src="/images/CLIENTS/Asuian.png"
                alt="AABA Bay logo"
                tabIndex={-1}
              />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo
                src="/images/CLIENTS/Super.png"
                alt="Super Lawyers JC badge"
                tabIndex={-1}
              />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo
                src="/images/CLIENTS/Sate.png"
                alt="Calbar logo"
                tabIndex={-1}
              />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo
                src="/images/CLIENTS/TopThree.png"
                alt="Three Best Rated 2020 badge"
                tabIndex={-1}
              />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo
                src="/images/CLIENTS/AvvoJonahChew.png"
                alt="Avvo Top Attorney badge"
                tabIndex={-1}
              />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo
                src="/images/CLIENTS/AvvoJonahChew.png"
                alt="Avvo Superb badge"
                tabIndex={-1}
              />
            </ClientLogoDiv>
          </Slider>
        </ClientsContainer>
      </ClientSection>
    </>
  );
};

export default HeroSection;
