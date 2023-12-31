// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

// Include image assets if necessary

// Fetch or import data required for the page
import headerLogo from "@/images/logo/logo.png";

// Apply styles or link external stylesheets
import style from "./header.module.scss";

// Define the main functional component
export const Header = () => {
    return (
        <>
            {/* Page content goes here */}
            <header
                className={`${style.header} header_gl position-absolute top-0 left-0 w-100`}
                id="header"
            >
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="d-flex align-items-center justify-content-between">
                                {/* logo */}
                                <div className={`logoWrapper`}>
                                    <Link href="/" title="Finplan Logo" className="d-inline-block">
                                        <Image
                                            src={headerLogo}
                                            height={34}
                                            width={144}
                                            alt="Finplan Logo"
                                        />
                                    </Link>
                                </div>

                                {/* join now button */}
                                <div className={`buttonWrapper`}>
                                    <Link
                                        href="/"
                                        title="Join Now"
                                        className="button-primary button-small text-very-large weight-medium"
                                    >
                                        Join Now
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

// Export the component as default
export default Header;
