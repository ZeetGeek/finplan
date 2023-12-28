// Define the main functional component
export const Title = ({ tag, text, className }) => {
    return (
        <>
            {/* Page content goes here */}
            {tag === "h1" ? (
                <>
                    <h1 className={className}>{text}</h1>
                </>
            ) : tag === "h2" ? (
                <>
                    <h2 className={className}>{text}</h2>
                </>
            ) : tag === "h3" ? (
                <>
                    <h3 className={className}>{text}</h3>
                </>
            ) : tag === "h4" ? (
                <>
                    <h4 className={className}>{text}</h4>
                </>
            ) : tag === "h5" ? (
                <>
                    <h5 className={className}>{text}</h5>
                </>
            ) : tag === "h6" ? (
                <>
                    <h6 className={className}>{text}</h6>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

// Export the component as default
export default Title;
