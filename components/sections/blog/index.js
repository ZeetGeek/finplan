// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";

// Define reusable components
import { SubTitle } from "@/components/global/typography/sub-title";
import Title from "@/components/global/typography/title";
import BlogCard from "@/components/global/cards/blog";

// Include image assets if necessary
// import {} from "@/images/";

// Fetch or import data required for the page
import { blogData as data } from "@/data/blog";

// Apply styles or link external stylesheets
import style from "./blog.module.scss";

// Define the main functional component
export const Blog = () => {
    return (
        <>
            {/* Page content goes here */}
            <section className={`blog-gl`} id="blog">
                <Container>
                    <Row>
                        {/* Title and subtitle */}
                        <Col lg={6} className="mx-auto text-center">
                            <div>
                                <SubTitle text="our blog" />
                                <Title
                                    tag="h2"
                                    text="Our news & blog."
                                    className="heading-h2 black-color weight-medium"
                                />
                            </div>
                        </Col>
                        {/* Blog content */}
                        <Col lg={12}>
                            <div className={`${style.contentWrapper} blog-box-wrapper-gl`}>
                                <Row className="justify-content-center align-items-center">
                                    {/* blog box */}
                                    {/* print dynamic data */}
                                    {data.map((item, index) => {
                                        return (
                                            <Col lg={4} md={6} key={index}>
                                                <BlogCard
                                                    blog={{
                                                        ...item.blog,
                                                    }}
                                                />
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export the component as default
export default Blog;
