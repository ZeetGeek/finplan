// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";

// Define reusable components
import { SubTitle } from "@/components/global/typography/sub-title";
import FeatureCard from "@/components/global/cards/feature";

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
                                <SubTitle text="services"/>
                                <h2 className="heading-h2 black-color weight-medium">
                                    Trusted advisors for financial success.
                                </h2>
                            </div>
                        </Col>
                        {/* All features */}
                        <Col lg={12}>
                            <div className={`${style.allFeaturesWrapper} all_features_gl`}>
                                <Row>
                                    {/* Feature box */}
                                    {/* Print Features Dynamic Data */}
                                    {data.map((item) => {
                                        return (
                                            <Col lg={4} key={item.id}>
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
