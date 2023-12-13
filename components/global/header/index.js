// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";
// Define reusable components

// Include image assets if necessary

// Fetch or import data required for the page
import headerLogo from "@/images/logo/logo.png";

// Apply styles or link external stylesheets
import style from "./header.module.scss";
import Image from "next/image";

// Define the main functional component
export const Header = () => {
     return (
          <>
               {/* Page content goes here */}
               <header className={`${style.header} header_gl position-absolute top-0 left-0 w-100`} id="header">
                    <Container>
                         <Row>
                              <Col lg={12}>
                                   <div className="d-flex align-items-center justify-content-between">
                                        {/* logo */}
                                        <div className={`${style.logoWrapper}`}>
                                             <Image src={headerLogo} height={34} width={144} alt="Finplan Logo" />
                                        </div>

                                        {/* join now button */}
                                        <div className={`${style.buttonWrapper}`}>
                                             <button className="button-primary button-small text-very-large weight-medium">
                                                  Join Now
                                             </button>
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
