// Import dependencies here
import Image from "next/image";

// Apply styles or link external stylesheets
import style from "./feature-card.module.scss";

// Define the main functional component
export const FeatureCard = ({ img, title, description }) => {
    return (
        <>
            {/* Page content goes here */}
            <div className={`${style.featuresBoxWrapper}`}>
                {/* Feature icon image */}
                <div className={`${style.ImageWrapper}`}>
                    <Image src={img.src} height={img.height} width={img.width} alt={img.alt} />
                </div>
                {/* Feature title */}
                <div className={`${style.titleWrapper}`}>
                    <h5 className="heading-h5 weight-bold">{title}</h5>
                </div>
                {/* Feature description */}
                <div className={`${style.descriptionWrapper}`}>
                    <p className="text-medium gray-light"> {description}</p>
                </div>
            </div>
        </>
    );
};

// Export the component as default
export default FeatureCard;
