// Import dependencies here
import { Row, Col } from "react-bootstrap";

// Include image assets if necessary
import Image from "next/image";

// Apply styles or link external stylesheets
import style from "./service-card.module.scss";

// Define the main functional component
import Title from "@/components/global/typography/title";
export const ServicesCard = ({ img, title, description }) => {
    return (
        <>
            {/* Page content goes here */}
            <div
                className={`${style.ServiceBoxWrapper} d-flex align-items-start text-center text-sm-start`}
            >
                <div className="d-flex align-items-center align-items-sm-start flex-column flex-sm-row ">
                    {/* Service icon image */}
                    <div className="d-flex justify-content-center justify-content-md-start mb-3 mb-sm-0 ">
                        <div className={`${style.ImageWrapper}`}>
                            <Image
                                src={img.src}
                                height={img.height}
                                width={img.width}
                                alt={img.alt}
                            />
                        </div>
                    </div>
                    {/* Service title and description*/}
                    <div className="ps-3">
                        <div className="text-center text-sm-start ">
                            <Title tag="h4" text={title} className="heading-h4 weight-semibold" />
                            <div className={`mt-2`}>
                                <p className="text-medium gray-light">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Export the component as default
export default ServicesCard;
