import React, { useEffect, useState } from "react";
import {
  Section,
  Container,
  LeftPanel,
  RightPanel,
  Header,
  Caption,
  Title,
  Description,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  StatDescription,
  CtaCard,
  CtaButton,
} from "./Features.styled";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAnimatedCounter } from "./useAnimatedCounter";

const Features = () => {
  const [casesCount, casesRef] = useAnimatedCounter(1000);
  const [dismissalCount, dismissalRef] = useAnimatedCounter(93);
  const [trialsCount, trialsRef] = useAnimatedCounter(125);

  return (
    <Section id="case-results">
      <Container>
        <LeftPanel>
          <Header>
            <Caption>Why Choose Us</Caption>
            <Title>Proven Defense. Exceptional Results.</Title>
            <Description>
              With over two decades of relentless advocacy, we’ve secured
              life-changing outcomes for clients facing severe charges.
            </Description>
          </Header>
        </LeftPanel>

        <RightPanel>
          <StatCard ref={casesRef} as={motion.div} whileHover={{ scale: 1.03 }}>
            <StatValue>{casesCount}+</StatValue>
            <StatLabel>Cases Defended</StatLabel>
            <StatDescription>
              Felonies, misdemeanors, DUIs, and complex white-collar crimes.
            </StatDescription>
          </StatCard>

          <StatCard
            ref={dismissalRef}
            as={motion.div}
            whileHover={{ scale: 1.03 }}
          >
            <StatValue>{dismissalCount}%</StatValue>
            <StatLabel>Dismissal/Acquittal Rate</StatLabel>
            <StatDescription>
              Charges reduced or dismissed in 9 out of 10 cases.
            </StatDescription>
          </StatCard>

          <StatCard
            ref={trialsRef}
            as={motion.div}
            whileHover={{ scale: 1.03 }}
          >
            <StatValue>{trialsCount}+</StatValue>
            <StatLabel>Jury Trials Won</StatLabel>
            <StatDescription>
              Courtroom-tested strategies that dismantle prosecutions.
            </StatDescription>
          </StatCard>

          {/* <StatCard>
            <StatValue>0</StatValue>
            <StatLabel>Life Sentences for Clients</StatLabel>
            <StatDescription>
            Prevented life imprisonment in all aggravated mayhem, homicide, and "Three Strikes" cases.
            </StatDescription>
          </StatCard> */}

          <Link href="/case-results" passHref>
            <CtaButton
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Defense Strategy →
            </CtaButton>
          </Link>
        </RightPanel>

        {/* <RightPanel>
          <StatsGrid>
            <StatCard>
              <StatValue>100%</StatValue>
              <StatLabel>Client Satisfaction</StatLabel>
              <StatDescription>
                Every client receives our undivided attention and relentless dedication.
              </StatDescription>
            </StatCard>

            <StatCard>
              <StatValue>78%</StatValue>
              <StatLabel>Case Success Rate</StatLabel>
              <StatDescription>
                Proven track record of favorable outcomes in complex cases.
              </StatDescription>
            </StatCard>

            <StatCard>
              <StatValue>3x</StatValue>
              <StatLabel>Faster Resolutions</StatLabel>
              <StatDescription>
                Strategic approach that accelerates justice without compromising quality.
              </StatDescription>
            </StatCard>
          </StatsGrid>
        </RightPanel> */}

        {/* <CtaCard>
          <Link href="#contact-form" passHref>
            <CtaButton>
              Begin Your Defense Strategy →
            </CtaButton>
          </Link>
        </CtaCard> */}
      </Container>
    </Section>
  );
};

export default Features;
