import Link from "next/link";
import { motion } from "framer-motion";
import {
  ServiceContent,
  ServiceHeading,
  ServiceList,
  ServiceDetails,
  ServiceTitle,
  Service,
  Section,
  Container,
  ServiceImage,
  WhatWeDo,
  ServiceHeader,
  ServiceHeadingDiv,
  ContactButton,
  ServiceCta,
  ServiceImageWrapper,
} from "./Services.styled";

const Services = () => {
  return (
    <Section id="practice-areas">
      <Container>
        <ServiceHeader>
          <WhatWeDo>Legal Expertise</WhatWeDo>
          <ServiceHeadingDiv>
            <ServiceHeading>Defending Your Rights</ServiceHeading>
            <Link href="#contact-us">
              <ContactButton>Explore Practice Areas →</ContactButton>
            </Link>
          </ServiceHeadingDiv>
        </ServiceHeader>

        <ServiceContent>
          <ServiceList>
          <Service
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceImageWrapper>
                <ServiceImage
                  alt="Felonies Icon"
                  src="/images/felony.png"
                />
              </ServiceImageWrapper>
              <ServiceTitle>Felonies</ServiceTitle>
              <ServiceDetails>
                Aggressive defense for serious charges with potential prison sentences.
              </ServiceDetails>
              <ServiceCta>Learn how we protect your future</ServiceCta>
            </Service>

            <Service
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ServiceImageWrapper>
                <ServiceImage
                  alt="Misdemeanors Icon"
                  src="/images/misdemeanor_icon.png"
                />
              </ServiceImageWrapper>
              <ServiceTitle>Misdemeanors</ServiceTitle>
              <ServiceDetails>
                Strategic representation to minimize consequences of lesser charges.
              </ServiceDetails>
              <ServiceCta>Reduce penalties and protect your record</ServiceCta>
            </Service>

            <Service
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <ServiceImageWrapper>
                <ServiceImage
                  alt="White Collar Crime Icon"
                  src="/images/hacker_icon.png"
                />
              </ServiceImageWrapper>
              <ServiceTitle>White Collar Crimes</ServiceTitle>
              <ServiceDetails>
                Sophisticated defense for complex financial and corporate allegations.
              </ServiceDetails>
              <ServiceCta>Defend your reputation and assets</ServiceCta>
            </Service>
          </ServiceList>
        </ServiceContent>
      </Container>
    </Section>
  );
};

export default Services;
