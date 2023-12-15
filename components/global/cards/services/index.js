// Import dependencies here
import { Row, Col } from "react-bootstrap";

// Include image assets if necessary
import Image from "next/image";

// Apply styles or link external stylesheets
import style from "./service-card.module.scss";

// Define the main functional component
export const ServicesCard = ({ img, title, description }) => {
    return (
        <>
            {/* Page content goes here */}
            <div className={`${style.ServiceBoxWrapper} d-flex align-items-start`}>
                <Row>
                    {/* Service icon image */}
                    <Col sm={4}>
                        <div className={`${style.ImageWrapper}`}>
                            <Image
                                src={img.src}
                                height={img.height}
                                width={img.width}
                                alt={img.alt}
                            />
                        </div>
                    </Col>
                    {/* Service title and description*/}
                    <Col sm={8} className="ps-3">
                        <div className={`${style.titleWrapper}`}>
                            <h4 className="heading-h4 weight-semibold">{title}</h4>
                            <div className={`${style.descriptionWrapper}`}>
                                <p className="text-medium gray-light">{description}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

// Export the component as default
export default ServicesCard;
