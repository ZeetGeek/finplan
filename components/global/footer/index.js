// Import dependencies here
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

// Define reusable components
import Title from "@/components/global/typography/title";

// Include image assets if necessary
import FooterLogo from "@/images/logo/logo.png";

// Fetch or import data required for the page
import { socialMedia, MenuLinks, TermsLink, addressLinks } from "@/data/footer";

// Apply styles or link external stylesheets
import style from "./footer.module.scss";

// Define the main functional component
export const Footer = () => {
    return (
        <>
            {/* Page content goes here */}
            <footer className={`${style.footer} footer-gl section-bg-color-1`} id="footer">
                <Container>
                    <Row className="row-gap-4 row-gap-lg-0 text-center text-md-start">
                        {/* footer column 1 */}
                        <Col lg={5} md={6}>
                            <div
                                className={`${style.column1Wrapper} mx-auto m-md-0 d-flex justify-content-center flex-column align-items-center align-items-md-start`}
                            >
                                {/* footer logo */}
                                <div>
                                    <Link href="/" title="finplan logo">
                                        <Image
                                            src={FooterLogo}
                                            height={35}
                                            width={150}
                                            alt="finplan logo"
                                        />
                                    </Link>
                                </div>

                                {/* footer description */}
                                <div className={`mt-3`}>
                                    <p className="text-medium gray-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                        elit tellus, luctus nec ullamcorper mattis, pulvinar.
                                    </p>
                                </div>

                                {/* footer social links */}
                                <div>
                                    <ul className="d-flex align-items-center gap-3 mt-3 mt-lg-5 mt-md-4">
                                        {socialMedia.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link
                                                        href={item.navigate}
                                                        title={`Visit Are ${item.title}`}
                                                    >
                                                        {item.icon}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        {/* footer column 2 */}

                        <Col lg={2} md={6} className={` ps-lg-4 ps-md-5`}>
                            <div className={`${style.column2Wrapper}`}>
                                {/* Links Title */}
                                <Title
                                    tag="h5"
                                    text="Menu"
                                    className=" mb-2 mb-lg-4 mb-md-3 heading-h5 black-color weight-semibold"
                                />

                                {/* All Links */}
                                <ul>
                                    {MenuLinks.map((item, index) => {
                                        return (
                                            <li key={index} className="mb-2 mb-lg-4 mb-sm-3">
                                                <Link
                                                    href={item.navigate}
                                                    title={`visit ${item.text} page`}
                                                    className="text-medium gray-normal"
                                                >
                                                    {item.text}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Col>

                        {/* footer column 3 */}

                        <Col lg={2} md={6} className={` ps-lg-4`}>
                            <div className={`${style.column3Wrapper}`}>
                                {/* Links Title */}
                                <Title
                                    tag="h5"
                                    text="Links"
                                    className=" mb-2 mb-lg-4 mb-md-3 heading-h5 black-color weight-semibold"
                                />

                                {/* All Links */}
                                <ul>
                                    {TermsLink.map((item, index) => {
                                        return (
                                            <li key={index} className="mb-2 mb-lg-4 mb-sm-3">
                                                <Link
                                                    href={item.navigate}
                                                    title={`Read Are ${item.text}`}
                                                    className="text-medium gray-normal"
                                                >
                                                    {item.text}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Col>

                        {/* footer column 4 */}
                        <Col lg={3} md={6} className={` ps-lg-5 ps-md-5`}>
                            <div className={`${style.column4Wrapper}`}>
                                {/* Links Title */}
                                <Title
                                    tag="h5"
                                    text="Our Address"
                                    className=" mb-2 mb-lg-4 mb-md-3 heading-h5 black-color weight-semibold"
                                />

                                {/* All Links */}
                                <ul>
                                    {addressLinks.map((item, index) => {
                                        return (
                                            <li key={index} className="mb-2 mb-lg-4 mb-sm-3">
                                                <Link
                                                    href={item.navigate}
                                                    title={`get are ${item.title}`}
                                                    target={item.target}
                                                    className="text-medium gray-normal"
                                                >
                                                    {item.text}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Col>

                        {/* Copy right */}
                        <Col lg={12}>
                            <div className={`${style.copyRightWrapper}`}>
                                <span className="text-medium text-center d-block gray-normal">
                                    © 2023 Template Kit by Hello Word.
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

// Export the component as default
export default Footer;
