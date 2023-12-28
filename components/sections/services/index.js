// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

// Define reusable components
import { SubTitle } from "@/components/global/typography/sub-title";
import Title from "@/components/global/typography/title";
import ServicesCard from "@/components/global/cards/services";

// Fetch or import data required for the page
import { ServicesData as data } from "@/data/services";

// Apply styles or link external stylesheets
import style from "./services.module.scss";

// Define the main functional component
export const Services = () => {
    return (
        <>
            {/* Page content goes here */}
            <section className={`${style.services} services_gl`} id="services">
                <Container>
                    <Row className="align-items-start">
                        {/* Services Title */}
                        <Col lg={4}>
                            <div className="text-center text-lg-start">
                                {/* Title and subtle */}
                                <div>
                                    <SubTitle text="services" />
                                    <Title
                                        tag="h2"
                                        text="Our services for financial future."
                                        className="heading-h2 black-color weight-medium"
                                    />
                                </div>
                                {/* Description */}
                                <div className={`${style.descriptionWrapper}`}>
                                    <p className="text-medium gray-light">
                                        Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus
                                        luctus ullamcorper.
                                    </p>
                                </div>
                                {/* Button */}
                                <div>
                                    <Link
                                        href="/"
                                        title="More Service"
                                        className="button-secondary button-medium d-none d-lg-inline-block"
                                    >
                                        More Service
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        {/* Services Content */}
                        <Col lg={8}>
                            <div className={`${style.contentWrapper} mt-4 mt-sm-4 mt-md-5 mt-lg-0`}>
                                <Row className="gap-4 gap-sm-0">
                                    {/* Services box */}
                                    {/* Print services dynamic data */}

                                    {/* Services Left */}
                                    <Col sm={6}>
                                        <div className={`${style.LeftServices}`}>
                                            {data.map((item, index) => {
                                                return (
                                                    index % 2 !== 0 && (
                                                        <ServicesCard
                                                            key={index}
                                                            img={{
                                                                ...item.img,
                                                                height: 50,
                                                                width: 50,
                                                            }}
                                                            title={item.title}
                                                            description={item.description}
                                                        />
                                                    )
                                                );
                                            })}
                                        </div>
                                    </Col>
                                    {/* Services Right */}
                                    <Col sm={6}>
                                        <div className={`${style.RightServices}`}>
                                            {data.map((item, index) => {
                                                return (
                                                    index % 2 == 0 && (
                                                        <ServicesCard
                                                            key={index}
                                                            img={{
                                                                ...item.img,
                                                                height: 50,
                                                                width: 50,
                                                            }}
                                                            title={item.title}
                                                            description={item.description}
                                                        />
                                                    )
                                                );
                                            })}
                                        </div>
                                    </Col>
                                </Row>
                                {/* Button */}
                                <div className={`text-center mt-sm-5 mt-4 d-block d-lg-none`}>
                                    <Link
                                        href="/"
                                        title="More Service"
                                        className="button-secondary button-medium"
                                    >
                                        More Service
                                    </Link>
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
export default Services;
