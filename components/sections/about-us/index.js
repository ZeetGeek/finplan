// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

// Define reusable components
import { SubTitle } from "@/components/global/typography/sub-title";

// Include image assets if necessary
import MainImage from "@/images/sections/about-us/1.png";
import CircleDotsShape from "@/images/sections/about-us/shapes/1.png";
import SquareDotsShape from "@/images/sections/about-us/shapes/2.png";
import SquareBgShapeImage from "@/images/sections/about-us/shapes/rectangle.png";

// Apply styles or link external stylesheets
import style from "./about-us.module.scss";

// Define the main functional component
export const AboutUs = () => {
    return (
        <>
            {/* Page content goes here */}
            <section className={`${style.about} about-gl`} id="about">
                <Container>
                    <Row className="align-items-center gap-4 gap-lg-0">
                        {/* About image */}
                        <Col
                            lg={6}
                            className="order-2 order-lg-1  d-flex align-items-center justify-content-center"
                        >
                            <div className={`${style.imageWrapper}`}>
                                {/* Main image */}
                                <div className={`${style.mainImage} `}>
                                    <Image
                                        src={MainImage}
                                        height={517}
                                        width={432}
                                        alt="About Us Main Image"
                                    />
                                    {/* square bg shape */}
                                    <div className={`${style.squareBgShape}`}>
                                        <Image
                                            src={SquareBgShapeImage}
                                            height={399}
                                            width={432}
                                            alt="Background Shape"
                                        />
                                    </div>
                                    {/* shapes */}

                                    {/* circle dots shape */}
                                    <div className={`${style.circleShape} bg-mask`}></div>

                                    {/* square dots shape */}
                                    <div className={`${style.squareShape} bg-mask`}></div>
                                </div>
                            </div>
                        </Col>

                        {/* About content */}
                        <Col lg={6} className="order-1 order-lg-2">
                            <div
                                className={`${style.contentWrapper} text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start`}
                            >
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
                                        className={`${style.extraInfo} d-flex align-items-center justify-content-center justify-content-lg-between gap-3 gap-sm-5 gap-lg-0`}
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
