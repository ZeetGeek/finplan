// Import dependencies here
import Image from "next/image";

// Apply styles or link external stylesheets
import style from "./feature-card.module.scss";

// Define the main functional component
import Title from "@/components/global/typography/title";

export const FeatureCard = ({ img, title, description }) => {
    return (
        <>
            {/* Page content goes here */}
            <div className={`${style.featuresBoxWrapper} text-center text-lg-start`}>
                {/* Feature icon image */}
                <div className={`${style.ImageWrapper} mx-auto m-lg-0`}>
                    <Image src={img.src} height={img.height} width={img.width} alt={img.alt} />
                </div>
                {/* Feature title */}
                <div className={`${style.titleWrapper}`}>
                    <Title tag="h5" text={title} className="heading-h5 weight-semibold" />
                </div>
                {/* Feature description */}

                <p className="text-medium gray-light"> {description}</p>
            </div>
        </>
    );
};

// Export the component as default
export default FeatureCard;
