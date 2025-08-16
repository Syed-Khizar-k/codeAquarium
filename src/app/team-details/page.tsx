import TeamDetailsMain from "@/components/team-details/TeamDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const TeamDetailsPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <TeamDetailsMain id={1} />
        </main>
      </Wrapper>
    </>
  );
};

export default TeamDetailsPage;
