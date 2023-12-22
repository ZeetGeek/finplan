// Import dependencies here
import Image from "next/image";
import Link from "next/link";

// Apply styles or link external stylesheets
import style from "./blog-card.module.scss";

// Define the main functional component
export const BlogCard = ({ blog }) => {
    return (
        <>
            {/* Page content goes here */}
            <div className={`${style.boxWrapper}`}>
                {/* image */}
                <div className={`${style.imageWrapper} overflow-hidden radius-large`}>
                    <Link href="/">
                        <Image
                            src={blog.image}
                            height={280}
                            width={380}
                            alt={blog.imageAlt}
                            className="w-100"
                        />
                    </Link>
                    {/* blog category */}
                    <span
                        className={`${style.category} bg-white radius-very-small text-small weight-medium d-inline-block secondary-normal`}
                    >
                        {blog.category}
                    </span>
                </div>
                {/* title */}
                <div className={`${style.titleWrapper}`}>
                    <Link href="/">
                        <h5 className="color-block heading-h5 weight-semibold">{blog.title}</h5>
                    </Link>
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
