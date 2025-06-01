import {
  AboutTitle,
  About,
  AboutBelow,
  AboutImage,
  AboutContent,
  AboutDescription,
  AboutQuote,
  AboutLink,
  Section,
  Container,
  AboutContentLowerContainer,
  AboutButton,
  AboutImageDiv,
} from "./AboutUs.styled";
import Link from "next/link";

const AboutUs = () => {
  return (
    <Section id="about-us">
      <Container>
        <AboutBelow>
          <AboutImageDiv>
            <AboutImage
              src="/images/compassion.png"
              alt="An attorney providing legal guidance to a client"
            />
          </AboutImageDiv>
          <AboutContent>
            <AboutTitle>San Francisco Criminal Defense</AboutTitle>
            <AboutDescription>
              At Chew Law Offices, we don’t just handle cases—we defend futures.
              When criminal charges threaten your freedom, reputation, or
              livelihood, our battle-tested attorneys deploy over 30 years of
              combined experience to build an unshakable defense. From
              misdemeanors to complex felonies, we’ve secured dismissals,
              acquittals, and reduced sentences across every court in the Bay
              Area—because hesitation isn’t an option when your life is on the
              line.
            </AboutDescription>
            <AboutDescription>
              What sets us apart? Relentless advocacy meets white-glove service.
              While corporate firms treat clients as case numbers, we fight like
              we’re defending family. You’ll work directly with seasoned
              attorneys who know the San Francisco legal landscape inside-out,
              available 24/7 to answer your urgent questions. Our record speaks
              for itself, but your story is just beginning—let’s write the next
              chapter together.
            </AboutDescription>
            <Link href="#contact-us">
              <AboutButton>View Success Stories</AboutButton>
            </Link>
          </AboutContent>
        </AboutBelow>
      </Container>
    </Section>
  );
};

export default AboutUs;
