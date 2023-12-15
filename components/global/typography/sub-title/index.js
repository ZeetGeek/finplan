// Sub title

// Apply styles or link external stylesheets
import style from "./sub-title.module.scss";

export const SubTitle = ({ text, className }) => {
    return (
        <>
            <span
                className={`${style.subTitle} text-uppercase weight-bold primary-dark radius-very-small bg-primary-light d-inline-block mb-2`}
            >
                {text}
            </span>
        </>
    );
};
