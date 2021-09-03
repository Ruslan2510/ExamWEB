import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImage from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

export function AboutUs() {
    return(
        <AboutUsContainer id="aboutus">
            <CarContainer>
                <img src={JeepImage} alt="Rent car Jeep" />
            </CarContainer>
            <InfoContainer>
                <Title>Fell The Best Experience With Our Rental Deals</Title>
                <InfoText>
                    Whether your company or service requires vehicles for a relocating employee or for an international client, we’ve got you covered. Developed by expats for the international community our program is not your typical car buying experience. We offer customizable financing, leasing, and rental programs designed to fit your company and assignees. Our programs and services are available in more than 150 countries worldwide. IAS is committed to simplifying and streamlining an individual's relocation experience.
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    );
}