// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";

// Define reusable components
import Title from "@/components/global/typography/title";

// Include image assets if necessary
// import {} from "@/images/";

// Fetch or import data required for the page
// import {} from "@/data/";

// Apply styles or link external stylesheets
import style from "./newsletter.module.scss";

// Define the main functional component
export const Newsletter = () => {
    return (
        <>
            {/* Page content goes here */}
            <section
                className={`${style.newsletter} newsletter-lg text-center text-lg-start`}
                id="newsletter"
            >
                <Container>
                    <div className={`${style.newsletterWrapper} bg-mask`}>
                        <Row className="align-items-center justify-content-center">
                            {/* Title */}
                            <Col lg={6}>
                                <Title
                                    tag="h2"
                                    text="Let's sign up for planning services."
                                    className="white-color heading-h2 weight-medium"
                                />
                            </Col>
                            {/* Newsletter sign up */}
                            <Col
                                lg={6}
                                className="d-flex justify-content-center justify-content-lg-end"
                            >
                                {/* Sign up form */}
                                <div className={`${style.signInWrapper}`}>
                                    <form>
                                        <div className="d-flex align-items-center flex-column flex-sm-row gap-3">
                                            {/* Email input */}
                                            <input
                                                type="email"
                                                name="newsletter-email"
                                                className={`radius-small white-color input-gl`}
                                                id="newsletter-email"
                                                placeholder="Enter Your Email"
                                            />
                                            {/* Button */}
                                            <button
                                                type="submit"
                                                className="button-primary button-large w-100 w-sm-auto"
                                            >
                                                Sign Up
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
};

// Export the component as default
export default Newsletter;
