import Slider from "react-slick";
import {
    Container,
    Section,
    HeaderContainer,
    SectionTitle,
    SectionSubtitle,
    NavigationArrows,
    CardContainer,
    StoryCard,
    CardImage,
    CardContent,
    StoryTitle,
    StoryOutcome,
    StoryExcerpt,
    ReadMoreLink,
    ArrowIcon,
    StyledSlider
} from "./SuccessStories.styled";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef } from "react";
import { featuredStories } from "./storiesData";
import { motion } from "framer-motion";

const SuccessStories = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        prevArrow: <BsArrowLeft />,
        nextArrow: <BsArrowRight />,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const handlePrev = () => sliderRef.current.slickPrev();
    const handleNext = () => sliderRef.current.slickNext();

    return (
        <Section id="success-stories">
            <Container>
                <HeaderContainer>
                    <div>
                        <SectionTitle>Success Stories</SectionTitle>
                        <SectionSubtitle>Notable case victories that demonstrate our legal expertise</SectionSubtitle>
                    </div>
                    <NavigationArrows>
                        <ArrowIcon onClick={handlePrev}>
                            <BsArrowLeft />
                        </ArrowIcon>
                        <ArrowIcon onClick={handleNext}>
                            <BsArrowRight />
                        </ArrowIcon>
                    </NavigationArrows>
                </HeaderContainer>

                <CardContainer>
                    <StyledSlider {...settings} ref={sliderRef}>
                        {featuredStories.map((story) => (
                            <motion.div
                                key={story.id}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <StoryCard>
                                    <CardImage
                                        style={{ backgroundImage: `url(${story.image})` }}
                                        aria-label={`Case: ${story.title}`}
                                    />
                                    <CardContent>
                                        <StoryOutcome>{story.outcome}</StoryOutcome>
                                        <StoryTitle>{story.title}</StoryTitle>
                                        <StoryExcerpt>{story.excerpt}</StoryExcerpt>
                                        <ReadMoreLink href={`/cases/${story.slug}`}>
                                            Read Full Story
                                        </ReadMoreLink>
                                    </CardContent>
                                </StoryCard>
                            </motion.div>
                        ))}
                    </StyledSlider>
                </CardContainer>
            </Container>
        </Section>
    );
};

export default SuccessStories;