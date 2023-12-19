// Import dependencies here
import Image from "next/image";

// Define reusable components
// import {} from "@/components/";

// Include image assets if necessary
// import {} from "@/images/";

// Fetch or import data required for the page
// import {} from "@/data/";

// Apply styles or link external stylesheets
import style from "./blog-card.module.scss";

// Define the main functional component
export const BlogCard = ({blog}) => {
    return (
        <>
            {/* Page content goes here */}
            <div className={`${style.boxWrapper}`}>
                {/* image */}
                <div className={`${style.imageWrapper} overflow-hidden radius-large`}>
                    <Image
                        src={blog.image}
                        height={280}
                        width={380}
                        alt={blog.imageAlt}
                        className="w-100"
                    />
                    {/* blog category */}
                    <span className={`${style.category} bg-white radius-very-small text-small weight-medium d-inline-block secondary-normal`}>{blog.category}</span>
                </div>
                {/* title */}
                <div className={`${style.titleWrapper}`}>
                    <h5 className="color-block heading-h5 weight-semibold">{blog.title}</h5>
                </div>
                {/* button */}
                <div className={`${style.buttonWrapper}`}>
                    <button className="button-primary button-medium">Read More</button>
                </div>
            </div>
        </>
    );
};

// Export the component as default
export default BlogCard;