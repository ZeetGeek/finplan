// Import dependencies here
import Image from "next/image";
import Link from "next/link";

import Title from "@/components/global/typography/title";

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
                        <Title
                            tag="h5"
                            text={blog.title}
                            className="color-block heading-h5 weight-semibold"
                        />
                    </Link>
                </div>
                {/* button */}
                <div>
                    <Link
                        href="/"
                        title={`Read more about ${blog.title}`}
                        className="button-primary button-medium d-inline-block"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </>
    );
};

// Export the component as default
export default BlogCard;
