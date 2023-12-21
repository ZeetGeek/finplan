"use client";
// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";

// Define reusable components

// Include image assets if necessary
import heroImage from "@/images/sections/hero/1.png";
import circleOverlayImage from "@/images/sections/hero/shapes/circle.png";

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
                        <Col lg={7}>
                            <div className={`${style.contentWrapper} text-center text-lg-start`}>
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
                                        <button
                                            className="button-secondary button-large white-color text-very-large weight-medium"
                                            name="Let’s get started"
                                        >
                                            Let’s get started
                                        </button>
                                    </div>
                                    <div
                                        className={`${style.avatarsWrapper} d-flex align-items-center flex-column flex-sm-row row-gap-4 row-gap-sm-0`}
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
                        <Col lg={5} className="d-flex align-items-end justify-content-center">
                            <div className={`${style.imageWrapper}`}>
                                {/* hero main image */}
                                <div className={`${style.mainImage}`}>
                                    <Image
                                        src={heroImage}
                                        height={747}
                                        width={566}
                                        alt="Hero Image"
                                    />
                                    <div className={style.circleOverlay}>
                                        <Image
                                            src={circleOverlayImage}
                                            height={601}
                                            width={601}
                                            alt="circle overlay image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        {/* hero clients slider */}
                        <Col lg={12}>
                            <div className={`${style.sliderWrapper} radius-extra-large`}>
                                <div className={`${style.sliderText}`}>
                                    {/* slider text */}
                                    <span className="white-color text-very-large weight-semibold">
                                        We have worked with 120+ clients :
                                    </span>
                                </div>
                                <div className={`${style.clientImages}`}>
                                    {/* client images */}
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={50}
                                        autoplay={{
                                            delay: 1500,
                                            disableOnInteraction: false,
                                        }}
                                        breakpoints={{
                                            1920: {
                                                slidesPerView: 6,
                                                spaceBetween: 30,
                                            },
                                            1200: {
                                                slidesPerView: 5,
                                                spaceBetween: 30,
                                            },
                                            991: {
                                                slidesPerView: 4,
                                            },
                                            768: {
                                                slidesPerView: 3,
                                            },
                                            575: {
                                                slidesPerView: 2,
                                            },
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
