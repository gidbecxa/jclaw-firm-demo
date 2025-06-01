import styled from 'styled-components';

import AboutUs from "../../components/AboutUs"
import FAQ from "../../components/FAQ"
import Features from "../../components/Features"
import HeroSection from "../../components/HeroSection"
import Services from "../../components/Services"
import Testimonials from "../../components/Testimonials"
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import SuccessStories from '../../components/SuccessStories';
import FirmInfo from '../../components/MoreInfo';


const HomePage = () => {
  const scrollRef = useRef(null) 

  const FloatingButton = styled(motion.div)`
    position: fixed;
    bottom: 40px;
    left: 40px;
    background-color: #25d366;
    color: #fff;
    padding: 11px 16px;
    border-radius: 50%;
    display: grid;
    place-items:center;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    &:hover {
      box-shadow: 0 10px 8px rgba(0, 0, 0, 0.2);
    }
  `;

  const FloatingButtonIcon = styled.span`
    font-size: 30px;
  `;

  return (
    <>
      <HeroSection id="main-content"/>
      <AboutUs ref={scrollRef} />
      <Services />
      <SuccessStories />
      <Features />
      <Testimonials />
      <FAQ />
      {/* <ContactUs /> */}
      <FirmInfo />
      <a target='_blank' href="https://wa.me/+14156972610" aria-label="Chat with us on WhatsApp to Schedule Immediate Case Consultation">
        <FloatingButton 
          initial={{ opacity: 0 , y:25}}
          whileInView={{ opacity: 1, y:0 }}
        > 
          <FloatingButtonIcon><BsWhatsapp></BsWhatsapp></FloatingButtonIcon>
        </FloatingButton>
      </a>

    </>
  )
}

export default HomePage