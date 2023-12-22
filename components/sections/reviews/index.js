"use client";

// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Define reusable components
// import {} from "@/components/";

// Include image assets if necessary
import ReviewImage from "@/images/sections/reviews/1.png";
import backgroundShapeImage from "@/images/sections/reviews/shapes/circle.png";

// Fetch or import data required for the page
import { ReviewsData as data } from "@/data/reviews";

// Apply styles or link external stylesheets
import style from "./reviews.module.scss";

// Define the main functional component
export const Reviews = () => {
    return (
        <>
            <section className={`${style.reviews} reviews-gl section-bg-color-1`} id="reviews">
                {/* Page content goes here */}
                <Container>
                    <Row className="align-items-center justify-content-center row-gap-3">
                        {/* Review Image */}
                        <Col lg={6} className="order-2 order-lg-1">
                            <div
                                className={`${style.imageWrapper} d-flex align-items-center justify-content-center justify-content-lg-start`}
                            >
                                <Image
                                    src={ReviewImage}
                                    height={444}
                                    width={515}
                                    alt="reviews image"
                                />
                            </div>
                        </Col>
                        {/* All Reviews Slider */}
                        <Col lg={6} className="order-1 order-lg-2">
                            {/* Reviews slider */}
                            <div
                                className={`${style.sliderWrapper} ps-0 ps-lg-5 mt-4 mt-sm-5 mt-lg-0`}
                            >
                                <Swiper
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    modules={[Autoplay]}
                                >
                                    {data.map((item) => {
                                        return (
                                            <SwiperSlide key={item.id}>
                                                <div
                                                    styleName={style.description_wrapper}
                                                    className="text-center text-lg-start"
                                                >
                                                    <p className="heading-h5 color-black weight-semibold">
                                                        &quot;{item.description}&quot;
                                                    </p>
                                                    <h5 className="text-large weight-semibold mt-4">
                                                        {item.name}
                                                    </h5>
                                                    <span className="text-medium color-gray mt-1 d-inline-block">
                                                        {item.profession}
                                                    </span>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </Col>
                        {/* circle background image */}
                        <div className={`${style.backgroundShapeWrapper}`}>
                            <Image
                                src={backgroundShapeImage}
                                height={610}
                                width={610}
                                alt="Background Circle Shape"
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export the component as default
export default Reviews;
