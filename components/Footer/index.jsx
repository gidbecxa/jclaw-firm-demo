import Link from "next/link";
import {
  Container,
  FooterColumns,
  FooterColumn,
  FooterTitle,
  FooterLink,
  Copyright,
  Divider,
  FooterBottom,
  DeveloperCredit,
} from "./Footer.styled";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <FooterColumns>
          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink href="#">About Our Firm</FooterLink>
            <FooterLink href="#">Practice Areas</FooterLink>
            <FooterLink href="#">Case Results</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Resources</FooterTitle>
            <FooterLink href="#">Legal Blog</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Client Testimonials</FooterLink>
            <FooterLink href="#">Success Stories</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Legal</FooterTitle>
            <FooterLink href="/#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Legal Disclaimer</FooterLink>
            <FooterLink href="#">Sitemap</FooterLink>
          </FooterColumn>
        </FooterColumns>

        <Divider />

        <FooterBottom>
          <Copyright>
            &copy; {currentYear} Chew Law Offices. All Rights Reserved.
          </Copyright>
          <DeveloperCredit>
            Designed by{" "}
            <Link href="https://gbecsen.vercel.app/" target="_blank">
              Gidbecxa
            </Link>
          </DeveloperCredit>
        </FooterBottom>
      </Container>
    </footer>
  );
};

export default Footer;
