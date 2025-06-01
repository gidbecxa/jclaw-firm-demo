import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYelp,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone, BsBook } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import {
  Container,
  Section,
  Title,
  ContentWrapper,
  InfoColumn,
  ContactBlock,
  IconWrapper,
  ContactText,
  SocialLinks,
  SocialIcon,
  BookBanner,
  BookContent,
  BookTitle,
  BookDescription,
  DownloadButton,
  Divider,
  ContactMethod,
  BookImage,
  ModalOverlay,
  ModalContent,
  ModalClose,
  ModalBookImage,
  FormGroup,
  FormLabel,
  FormInput,
  SubmitButton,
} from "./FirmInfo.styled";

const FirmInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
    //   await axios.post("https://api.example.com/submit-form", formData);
    console.log({formData});

      // Download the book after successful submission
      handleDownload();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/09_11_24_Case_Results_Letterhead_1.pdf";
    link.download = "Jonah_Chew_Legal_Insights.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Section>
      <Container>
        <Title>Learn More About Us</Title>

        <ContentWrapper>
          <InfoColumn>
            <ContactBlock>
              <ContactMethod>
                <IconWrapper>
                  <MdLocationOn />
                </IconWrapper>
                <ContactText>
                  <h4>Our Office</h4>
                  <p>1388 Sutter Street Suite 805</p>
                  <p>San Francisco, CA 94109</p>
                </ContactText>
              </ContactMethod>

              <ContactMethod>
                <IconWrapper>
                  <BsTelephone />
                </IconWrapper>
                <ContactText>
                  <h4>Mobile</h4>
                  <p>(415) 484-0906</p>
                  <p>Text: (415) 697-2610</p>
                </ContactText>
              </ContactMethod>

              <ContactMethod>
                <IconWrapper>
                  <HiOutlineMail />
                </IconWrapper>
                <ContactText>
                  <h4>Email</h4>
                  <p>info@chewlawoffices.com</p>
                </ContactText>
              </ContactMethod>
            </ContactBlock>

            <Divider />

            <SocialLinks>
              <h4>Connect With Us</h4>
              <div>
                <a
                  href="https://www.facebook.com/Law-Office-of-Jonah-Chew-418532392323387/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon>
                    <FaFacebook />
                  </SocialIcon>
                </a>
                <a
                  href="http://twitter.com/baycrimlawyer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon>
                    <FaTwitter />
                  </SocialIcon>
                </a>
                <a
                  href="http://www.linkedin.com/pub/jonah-chew/4/146/607"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon>
                    <FaLinkedin />
                  </SocialIcon>
                </a>
                <a
                  href="http://www.yelp.com/biz/jonah-chew-san-francisco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon>
                    <FaYelp />
                  </SocialIcon>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCGWxELBNVB6684MtpqhUBFA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon>
                    <FaYoutube />
                  </SocialIcon>
                </a>
                <a
                  href="https://www.instagram.com/chewlawoffices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon>
                    <FaInstagram />
                  </SocialIcon>
                </a>
                {/* Placeholders for Avvo and SuperLawyers */}
                <a
                  href="http://www.avvo.com/attorneys/94103-ca-jonah-chew-306646.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon>
                    <span className="avvo-icon">A</span>
                  </SocialIcon>
                </a>
                <a
                  href="https://profiles.superlawyers.com/california-northern/san-francisco/lawyer/jonah-chew/6027d770-5cc2-4a3e-82fa-40678b57ebd2.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon>
                    <span className="super-lawyers-icon">SL</span>
                  </SocialIcon>
                </a>
              </div>
            </SocialLinks>
          </InfoColumn>

          <BookBanner>
            <BookImage
              src="/images/book-icon.png"
              alt="Criminal Defense Insights Book Cover"
            />

            <BookContent>
              <BookTitle>Free Legal Resource</BookTitle>
              <BookDescription>
                <strong>Charged With A Drug Crime In California?</strong> Tips
                From An Experienced Attorney That Will Save Your Future. This
                comprehensive guide provides valuable information about your
                rights and the legal process in California.
              </BookDescription>
              <DownloadButton onClick={openModal}>
                Download Free Book
              </DownloadButton>
            </BookContent>
          </BookBanner>
        </ContentWrapper>

        {isModalOpen && (
          <ModalOverlay>
            <ModalContent>
              <ModalClose onClick={closeModal}>×</ModalClose>
              <ModalBookImage
                src="/images/book-icon.png"
                alt="Criminal Defense Insights Book Cover"
              />
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel htmlFor="name">Full Name</FormLabel>
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="phone">Phone Number</FormLabel>
                  <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Submit & Download"}
                </SubmitButton>
              </form>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </Section>
  );
};

export default FirmInfo;
