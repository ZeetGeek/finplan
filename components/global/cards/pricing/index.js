// Import dependencies here
import Image from "next/image";
import Link from "next/link";

// Include image assets if necessary
import NewIcon from "@/images/sections/pricing/icons/1.png";
import { Check, Xmark } from "iconoir-react";
import Title from "@/components/global/typography/title";

// Apply styles or link external stylesheets
import style from "./pricing-card.module.scss";

// Define the main functional component
export const PricingCard = ({ price, name, planType, details, buttonText, buttonName }) => {
    return (
        <>
            {/* Page content goes here */}
            <div className={`${style.pricingBoxWrapper}`}>
                {/* Plan price and name */}
                <div
                    className={`${style.PriceAndNameWrapper} ${
                        planType === "pro" ? "bg-light-blue-color-1" : "bg-primary-lighter"
                    } mb-2 radius-extra-large text-center`}
                >
                    {/* <h2>{price}</h2> */}
                    <Title
                        tag="h2"
                        text={price}
                        className={`heading-h2 weight-medium ${
                            planType === "pro" ? "secondary-normal" : "color-black"
                        } `}
                    />
                    <span className="text-very-large weight-medium">{name}</span>
                </div>
                {/* Plan details */}
                <div
                    className={`${style.PlanDetailsWrapper}  ${
                        planType === "pro" ? "bg-light-blue-color-1" : "bg-primary-lighter"
                    } radius-extra-large d-flex flex-column align-items-center`}
                >
                    <div className={`${style.PlanDetailsNamesWrapper}`}>
                        <ul>
                            {details.map((detail, index) => (
                                <li key={index} className="d-flex align-items-center">
                                    <div className="text-center">
                                        <span>
                                            {detail.include ? (
                                                <Check strokeWidth={4} />
                                            ) : (
                                                <Xmark strokeWidth={4} />
                                            )}
                                        </span>
                                    </div>
                                    <span>{detail.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                  
                        <Link
                            href="/"
                            title={`${buttonName} button`}
                            className={`${
                                planType === "pro" ? "button-secondary" : "button-primary"
                            } button-large weight-medium d-inline-block`}
                        >
                            {buttonText}
                        </Link>
               
                </div>
                {planType === "pro" ? (
                    <>
                        <div className={`${style.newIconWrapper}`}>
                            <Image src={NewIcon} height={52} width={95} alt="New Icon" />
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
};

// Export the component as default
export default PricingCard;
