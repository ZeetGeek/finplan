// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";

// Define reusable components
import { SubTitle } from "@/components/global/typography/sub-title";
import FeatureCard from "@/components/global/cards/feature";
import Title from "@/components/global/typography/title";

// Include image assets if necessary
// import {} from "@/images/";

// Fetch or import data required for the page
import { FeaturesData as data } from "@/data/features";

// Apply styles or link external stylesheets
import style from "./features.module.scss";

// Define the main functional component
export const Features = () => {
    return (
        <>
            {/* Page content goes here */}
            <section className={`${style.features} features_gl`} id="features">
                <Container>
                    <Row>
                        {/* Title and subtitle */}
                        <Col lg={6} className="mx-auto text-center">
                            <div className={`${style.titleWrapper}`}>
                                <SubTitle text="features" />
                                <Title
                                    tag="h2"
                                    text=" Trusted advisors for financial success."
                                    className="heading-h2 black-color weight-medium"
                                />
                            </div>
                        </Col>
                        {/* All features */}
                        <Col lg={12}>
                            <div className={`all_features_gl`}>
                                <Row className="align-items-center justify-content-center">
                                    {/* Feature box */}
                                    {/* Print Features Dynamic Data */}
                                    {data.map((item, index) => {
                                        return (
                                            <Col lg={4} sm={6} key={index}>
                                                <FeatureCard
                                                    img={{
                                                        ...item.img,
                                                        height: 50,
                                                        width: 50,
                                                    }}
                                                    title={item.title}
                                                    description={item.description}
                                                />
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export the component as default
export default Features;
