import React from "react";
import Icon1 from "../../images/ben.jpg";
import Icon2 from "../../images/mo.jpg";
import Icon3 from "../../images/louis.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Organized By:</ServicesH1>
      <ServicesWrapper>
        {/* A JSX comment */}
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Null Chapter</ServicesH2>
          <ServicesP> Hacking and Network Security club of VIT-AP</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2></ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Open Source Club</ServicesH2>
          <ServicesP>
            {" "}
            Community for individuals to share their knowledge for the
            community.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
