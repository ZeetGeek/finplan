// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

// Define reusable components
import { SubTitle } from "@/components/global/typography/sub-title";
import PricingCard from "@/components/global/cards/pricing";
import Title from "@/components/global/typography/title";

// Include image assets if necessary
// import {} from "@/images/";

// Fetch or import data required for the page
import { PricingData as data } from "@/data/pricing";

// Apply styles or link external stylesheets
import style from "./pricing.module.scss";

// Define the main functional component
export const Pricing = () => {
    return (
        <>
            {/* Page content goes here */}
            <section className={`${style.pricing} pricing_gl`} id="pricing">
                <Container>
                    <Row className="align-items-xl-start align-items-center justify-content-center text-center text-xl-start">
                        <Col xl={3} lg={6} className="mb-4 mb-sm-5">
                            {/* Title and subtle */}
                            <div>
                                <SubTitle text="pricing" />
                                <Title  
                                    tag="h2"
                                    text="Our pricing."
                                    className="heading-h2 black-color weight-medium"
                                />
                            </div>
                            {/* Description */}
                            <div className={`${style.descriptionWrapper}`}>
                                <p className="text-medium gray-light">
                                    Lorem ipsum dolor sit amet, amnet consectetur adipiscing elit
                                    ut.
                                </p>
                            </div>
                            {/* Button */}
                            <div>
                                <Link
                                    href="/"
                                    className="button-secondary button-medium"
                                    title="See FAQ"
                                >
                                    See FAQ
                                </Link>
                            </div>
                        </Col>

                        {/* Pricing Content */}
                        <Col xl={9}>
                            <div className={`pricing-box-wrapper-gl`}>
                                <Row className="align-items-end justify-content-center">
                                    {/* Map over the data array and render PricingCard for each item */}
                                    {data.map((item, index) => (
                                        <Col lg={4} sm={6} key={index}>
                                            <PricingCard
                                                name={item.name}
                                                price={item.price}
                                                details={item.details}
                                                planType={item.planType}
                                                buttonText="Choose Plan"
                                                buttonName={item.name}
                                            />
                                        </Col>
                                    ))}
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
export default Pricing;
