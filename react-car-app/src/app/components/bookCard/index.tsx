import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { SCREENS } from "../responsive";
import { modalStateVar } from "../popup/popupStore";
import { storeStateVar } from "../../containers/HomePage/store";
import { useReactiveVar } from "@apollo/client";
import { CustomCalendar } from "../calendar/calendar";
import { formatDate } from "../../helpers/formatDate";
import { makeStyles, Theme } from "@material-ui/core";

const CardContainer = styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0 ,0.4);

    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-9
        md:pr-9
    `};
`;
const LineSeperator = styled.span`
    width: 2px;
    height:45%;
    ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `};
`;

export const usePopupStyles = makeStyles((theme: Theme) => ({
    leftCalendar: {
        left: 0
    },

    rightCalendar: {
        right: "-100%"
    }
}));

export function BookCard() {

    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);

    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

    const toggleStartDateCalendar = () => {
        setStartCalendarOpen(!isStartCalendarOpen);
        
        if (isReturnCalendarOpen) {
            setReturnCalendarOpen(false);
        }
    }

    const toggleReturnDateCalendar = () => {
        setReturnCalendarOpen(!isReturnCalendarOpen);

        if (isStartCalendarOpen) {
            setStartCalendarOpen(false);
        }
    }

    const handleOpen = () => {
        modalStateVar({showModal: true});
    }

    const classes = usePopupStyles();

    const store = useReactiveVar(storeStateVar)

    const handleChangeDate = (dateType: "startDate" | "endDate") => (date: string) => {
        storeStateVar({
            ...store, 
            [dateType]: date
        });
    }

    const {startDate, endDate} = store;

    return (
        <CardContainer>
            <CustomCalendar  className={classes.leftCalendar}  isOpen={isStartCalendarOpen} handleSwitchOpen={toggleStartDateCalendar} handleChangeValue={handleChangeDate("startDate")} value={startDate ? formatDate(startDate) : ""} label="Pick Up Date"/>

            <LineSeperator />

            <CustomCalendar className={classes.rightCalendar}   isOpen={isReturnCalendarOpen} handleSwitchOpen={toggleReturnDateCalendar} handleChangeValue={handleChangeDate("endDate")} value={endDate ? formatDate(endDate) : ""} label="Return Date"/>

            <Marginer direction="horizontal" margin="2em"/>
            <Button handleClick={handleOpen} text="Book Your Ride"/>
        </CardContainer>
    );
}