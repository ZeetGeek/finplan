// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

// Define reusable components
import { SubTitle } from "@/components/global/typography/sub-title";

// Include image assets if necessary
import MainImage from "@/images/sections/about-us/1.png";
import CircleDotsShape from "@/images/sections/about-us/shapes/1.png";
import SquareDotsShape from "@/images/sections/about-us/shapes/2.png";

// Apply styles or link external stylesheets
import style from "./about-us.module.scss";

// Define the main functional component
export const AboutUs = () => {
    return (
        <>
            {/* Page content goes here */}
            <section className={`${style.about} about-gl`} id="about">
                <Container>
                    <Row className="d-flex align-items-center">
                        {/* About image */}
                        <Col lg={6} className="d-flex align-items-start">
                            <div className={`${style.imageWrapper}`}>
                                {/* Main image */}
                                <div className={`${style.mainImage} bg-mask`}>
                                    <Image
                                        src={MainImage}
                                        height={517}
                                        width={432}
                                        alt="About Us Main Image"
                                    />
                                </div>
                                {/* shapes */}
                                <div className={`${style.shapes}`}>
                                    {/* circle dots shape */}
                                    <Image
                                        src={CircleDotsShape}
                                        height={102}
                                        width={102}
                                        alt="Circle Shape"
                                        className={`${style.shape}`}
                                    />
                                    {/* square dots shape */}
                                    <Image
                                        src={SquareDotsShape}
                                        height={73}
                                        width={110}
                                        alt="Square Shape"
                                        className={`${style.shape}`}
                                    />
                                    {/* square bg shape */}
                                    <div className={`${style.squareBgShape} ${style.shape}`}></div>
                                </div>
                            </div>
                        </Col>

                        {/* About content */}
                        <Col lg={6}>
                            <div className={`${style.contentWrapper}`}>
                                {/* Title and subtitle */}
                                <div className={`${style.titleWrapper}`}>
                                    <SubTitle text="about us" />
                                    <h2 className="heading-h2 black-color weight-medium">
                                        Experience & expertise in financial planning.
                                    </h2>
                                </div>
                                {/* Description*/}
                                <div className={`${style.descriptionWrapper}`}>
                                    <p className="text-medium gray-light">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                                        leo eiusmod tempor.
                                    </p>
                                    <div
                                        className={`${style.extraInfo} d-flex align-items-center justify-content-between`}
                                    >
                                        <div className={`${style.infoBox}`}>
                                            <h2 className="heading-h2 black-color weight-medium">
                                                78 %
                                            </h2>
                                            <span className="text-medium gray-light">
                                                Conversion rate.
                                            </span>
                                        </div>
                                        <div className={`${style.infoBox}`}>
                                            <h2 className="heading-h2 black-color weight-medium">
                                                780 K
                                            </h2>
                                            <span className="text-medium gray-light">
                                                Total join members.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* button */}
                                <div className={`${style.buttonWrapper}`}>
                                    <button
                                        className="button-secondary button-medium"
                                        name="More About"
                                    >
                                        More About
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export the component as default
export default AboutUs;
