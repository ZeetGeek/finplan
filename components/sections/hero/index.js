"use client";
// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";

// Define reusable components

// Include image assets if necessary
import heroImage from "@/images/sections/hero/1.png";
import arrowImage from "@/images/sections/hero/shapes/1.png";

// Fetch or import data required for the page
import { avatarsData, clientData } from "@/data/hero";

// Apply styles or link external stylesheets
import style from "./hero.module.scss";

// Define the main functional component
export const Hero = () => {
    return (
        <>
            <section className={` ${style.hero} hero-gl section-bg-color-1`} id="hero">
                <Container>
                    <Row className="align-items-center">
                        {/* hero content */}
                        <Col lg={6} xl={7}>
                            <div className={`${style.contentWrapper}`}>
                                {/* hero title */}
                                <div className={`${style.title}`}>
                                    <h1 className="heading-h1 black-color weight-medium">
                                        Trust your financial planning for you.
                                    </h1>
                                </div>
                                {/* hero description */}
                                <div className={`${style.description}`}>
                                    <p className="text-very-large gray-light weight-light">
                                        Empower your business and investment returns with
                                        professional advice and innovative solutions from our
                                        finance planner.
                                    </p>
                                </div>
                                {/* hero buttons and avatars */}
                                <div
                                    className={`${style.buttonsAvatars} d-flex align-items-center`}
                                >
                                    <div className={`${style.buttonWrapper}`}>
                                        <button className="button-secondary button-large white-color text-very-large weight-medium">
                                            Let’s get started
                                        </button>
                                    </div>
                                    <div
                                        className={`${style.avatarsWrapper} d-flex align-items-center`}
                                    >
                                        <div className={`${style.avatarImages}`}>
                                            {avatarsData.map((image) => (
                                                <Image
                                                    key={image.id}
                                                    src={image.src}
                                                    className={`${style.image} radius-circle`}
                                                    height={70}
                                                    width={70}
                                                    alt="Avatar Image"
                                                />
                                            ))}
                                        </div>
                                        <div
                                            className={`${style.avatarContent} d-flex flex-column`}
                                        >
                                            <span className="gray-light text-very-large weight-bold">
                                                150 K
                                            </span>
                                            <span className="gray-light text-medium weight-light">
                                                Happy Clients.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        {/* hero images */}
                        <Col lg={6} xl={5}>
                            <div className={`${style.imageWrapper}`}>
                                {/* hero main image */}
                                <div className={`${style.mainImage}`}>
                                    <Image
                                        src={heroImage}
                                        height={747}
                                        width={566}
                                        alt="Hero Image"
                                    />
                                </div>

                                {/* hero arrow image */}
                                <div className={`${style.arrowImage}`}>
                                    <Image
                                        src={arrowImage}
                                        height={90}
                                        width={230}
                                        alt="Arrow Image"
                                    />
                                </div>
                            </div>
                        </Col>
                        {/* hero clients slider */}
                        <Col lg={12}>
                            <div
                                className={`${style.sliderWrapper} bg-secondary-normal radius-large`}
                            >
                                <div className={`${style.sliderText}`}>
                                    {/* slider text */}
                                    <span className="white-color text-very-large weight-semibold">
                                        We have worked with 120+ clients :
                                    </span>
                                </div>
                                <div className={`${style.clientImages}`}>
                                    {/* client images */}
                                    <Swiper
                                        slidesPerView={6}
                                        spaceBetween={50}
                                        autoplay={{
                                            delay: 1500,
                                            disableOnInteraction: false,
                                        }}
                                        freeMode={true}
                                        loop={true}
                                        modules={[Autoplay, Pagination, Navigation, FreeMode]}
                                        className="mySwiper"
                                    >
                                        {clientData.map((image) => (
                                            <SwiperSlide key={image.id}>
                                                <Image
                                                    src={image.src}
                                                    height={image.height}
                                                    width={image.width}
                                                    alt={image.alt}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export the component as default
export default Hero;
