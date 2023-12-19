// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";

// Define reusable components
// import {} from "@/components/";

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
            <section className={`${style.newsletter} newsletter-lg`} id="newsletter">
                <Container>
                    <div className={`${style.newsletterWrapper} bg-mask`}>
                        <Row className="align-items-center">
                            {/* Title */}
                            <Col lg={6}>
                                <h2 className="white-color heading-h2 weight-medium">
                                    Let&apos;s sign up for planning services.
                                </h2>
                            </Col>
                            {/* Newsletter sign up */}
                            <Col lg={6} className="d-flex justify-content-end">
                                {/* Sign up form */}
                                <div className={`${style.signInWrapper}`}>
                                    <form>
                                        <div className="d-flex align-items-center gap-3">
                                            {/* Email input */}
                                            <input
                                                type="email"
                                                name="newsletter-email"
                                                className={`${style.newsletterEmail} radius-small white-color`}
                                                id="newsletter-email"
                                                placeholder="Enter Your Email"
                                            />
                                            {/* Button */}
                                            <button className="button-primary button-large">
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
