"use client";
// Import dependencies here
import Image from "next/image";

// Define reusable components
// import {} from "@/components/";

// Include image assets if necessary
// import {} from "@/images/";

// Fetch or import data required for the page
// import {} from "@/data/";

// Apply styles or link external stylesheets
import style from "./team-member-card.module.scss";

// Define the main functional component
export const ComponentName = ({ member }) => {
    return (
        <>
            {/* Page content goes here */}
            <div className={`${style.boxWrapper} ${member.id % 2 === 0 ? style.odd : style.even} `}>
                {/* member image */}
                <div className={`${style.imageWrapper} d-flex justify-content-center`}>
                    <Image src={member.image} height={310} width={266} alt={member.imageAlt} />
                </div>

                {/* member name */}
                <div className={`${style.nameWrapper} mt-3`}>
                    <h5 className="color-black heading-h4 weight-semibold">{member.name}</h5>
                </div>

                {/* member position */}
                <div className={`${style.positionWrapper}`}>
                    <span className="text-medium color-gray">{member.position}</span>
                </div>
            </div>
        </>
    );
};

// Export the component as default
export default ComponentName;
