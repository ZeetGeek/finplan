// Import dependencies here

// Define reusable components
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import AboutUs from "@/components/sections/about-us";
import Services from "@/components/sections/services";
import Showcase from "@/components/sections/Showcase";
import Pricing from "@/components/sections/pricing";
import OurTeam from "@/components/sections/our-team";
import Reviews from "@/components/sections/reviews";
import Blog from "@/components/sections/blog";
import NewsLetter from "@/components/global/news-letter";

// Include image assets if necessary

// Fetch or import data required for the page

// Apply styles or link external stylesheets

// Define the main functional component
export const Home = () => {
    return (
        <>
            {/* Page content goes here */}
            <Hero />
            <Features />
            <AboutUs />
            <Services />
            <Showcase />
            {/* <Pricing /> */}
            {/* <OurTeam /> */}
            {/* <Reviews /> */}
            {/* <Blog /> */}
            {/* <NewsLetter /> */}
        </>
    );
};

// Export the component as default
export default Home;
