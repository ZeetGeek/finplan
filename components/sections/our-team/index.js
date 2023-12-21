// Import dependencies here
import { Container, Row, Col } from "react-bootstrap";

// Define reusable components
import { SubTitle } from "@/components/global/typography/sub-title";
import TeamMemberCard from "@/components/global/cards/team-member";

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
            <section className={`${style.ourTeam} our-team-global`} id="our-team">
                <Container>
                    <Row>
                        {/* Title and subtitle */}
                        <Col lg={6} className="mx-auto text-center">
                            <div className={`${style.titleWrapper}`}>
                                <SubTitle text="our team" />
                                <h2 className="heading-h2 black-color weight-medium">
                                    Meet our team members.
                                </h2>
                            </div>
                        </Col>
                        {/* All team members */}
                        <Col lg={12}>
                            <div className={`${style.allTeamMembersWrapper}`}>
                                <Row className="row-gap-3">
                                    {/* Team member box */}
                                    {/* Team Member Dynamic Data */}
                                    {data.map((item) => {
                                        return (
                                            <Col xl={3} md={6} key={item.id}>
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export the component as default
export default OurTeam;
