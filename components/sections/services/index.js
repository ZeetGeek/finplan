// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";

// Define reusable components
import { SubTitle } from "@/components/global/typography/sub-title";
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
                    <Row className="d-flex align-items-start">
                        {/* Services Title */}
                        <Col lg={4}>
                            <div className="text-center text-lg-start">
                                {/* Title and subtle */}
                                <div className={`${style.titleWrapper}`}>
                                    <SubTitle text="services" />
                                    <h2 className="heading-h2 black-color weight-medium">
                                        Our services for financial future.
                                    </h2>
                                </div>
                                {/* Description */}
                                <div className={`${style.descriptionWrapper}`}>
                                    <p className="text-medium gray-light">
                                        Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus
                                        luctus ullamcorper.
                                    </p>
                                </div>
                                {/* Button */}
                                <div className={`${style.buttonWrapper}`}>
                                    <button
                                        className="button-secondary button-medium"
                                        name="More Service"
                                    >
                                        More Service
                                    </button>
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
                                            {data.map((item) => {
                                                return (
                                                    item.id <= 1 && (
                                                        <ServicesCard
                                                            key={item.id}
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
                                            {data.map((item) => {
                                                return (
                                                    item.id >= 2 && (
                                                        <ServicesCard
                                                            key={item.id}
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
