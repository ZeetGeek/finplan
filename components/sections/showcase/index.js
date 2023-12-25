// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

// Define reusable components
import { SubTitle } from "@/components/global/typography/sub-title";

// Include image assets if necessary
import CircleDotsImage from "@/images/sections/showcase/shapes/1.png";
import SquareDotsImage from "@/images/sections/showcase/shapes/2.png";

// Fetch or import data required for the page
import { ShowcaseData as data } from "@/data/showcase";

// Apply styles or link external stylesheets
import style from "./showcase.module.scss";

// Define the main functional component
export const Showcase = () => {
    return (
        <>
            {/* Page content goes here */}
            <section className={`${style.showcase} Showcase-gl section-bg-color-2`} id="Showcase">
                <Container>
                    <Row>
                        {/* Show case title*/}
                        <Col lg={6} className="mx-auto">
                            <div className={`${style.titleWrapper} text-center`}>
                                <SubTitle text="show case" />
                                <h2 className="heading-h2 black-color weight-medium">
                                    Expert financial planning Showcase studies.
                                </h2>
                            </div>
                        </Col>

                        {/* All studies*/}
                        <Col lg={12}>
                            <div className={`${style.StudiesWrapper} showcase-studio-wrapper-gl`}>
                                <Row>
                                    {/* Print all studies data */}
                                    {data.map((item) => {
                                        return (
                                            <Col lg={3} sm={6} key={item.id}>
                                                <div
                                                    className={`${style.StudiesImagesWrapper} ${
                                                        item.id % 2 === 0 ? style.odd : style.even
                                                    } radius-medium overflow-hidden`}
                                                >
                                                    <Image
                                                        src={item.image}
                                                        height={450}
                                                        width={280}
                                                        alt="show case Image"
                                                        className="w-100 radius-medium overflow-hidden"
                                                    />
                                                </div>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </div>
                        </Col>

                        {/* Background shapes */}
                        <div className={`${style.ShapeWrapper}`}>
                            {/* Round Dots Circle */}
                            {/* <Image
                                src={CircleDotsImage}
                                height={136}
                                width={136}
                                alt="Round Dots Circle Shape"
                            /> */}

                            <div className={`${style.CircleDotsImage} bg-mask`}></div>

                            {/* Square Dots Circle */}
                            {/* <Image
                                src={SquareDotsImage}
                                height={110}
                                width={165}
                                alt="Square Dots Circle Shape"
                            /> */}
                            <div className={`${style.SquareDotsImage} bg-mask`}></div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export the component as default
export default Showcase;
