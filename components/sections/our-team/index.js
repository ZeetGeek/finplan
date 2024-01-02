// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";

// Define reusable components
import { SubTitle } from "@/components/global/typography/sub-title";
import TeamMemberCard from "@/components/global/cards/team-member";
import Title from "@/components/global/typography/title";

// Include image assets if necessary
// import {} from "@/images/";

// Fetch or import data required for the page
import { TeamData as data } from "@/data/team-members";

// Apply styles or link external stylesheets
import style from "./our-team.module.scss";

// Define the main functional component
export const OurTeam = () => {
    return (
        <>
            {/* Page content goes here */}
            <section className={` our-team-global`} id="our-team">
                <Container>
                    <Row className="row-gap-3">
                        {/* Title and subtitle */}
                        <Col lg={6} className="mx-auto text-center">
                            <SubTitle text="our team" />
                            <Title
                                tag="h2"
                                text=" Meet our team members."
                                className="heading-h2 black-color weight-medium"
                            />
                        </Col>
                        {/* All team members */}
                        <Col lg={12}>
                            <Row className="row-gap-3">
                                {/* Team member box */}
                                {/* Team Member Dynamic Data */}
                                {data.map((item, index) => {
                                    return (
                                        <Col xl={3} md={6} key={index}>
                                            <TeamMemberCard
                                                key={item.id}
                                                member={{
                                                    ...item,
                                                }}
                                            />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export the component as default
export default OurTeam;
