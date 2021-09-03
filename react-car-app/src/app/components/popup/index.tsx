import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { modalStateVar } from "./popupStore";
import { useReactiveVar } from '@apollo/client'
import { makeStyles, Theme, Dialog, DialogTitle, DialogContent, DialogActions, withStyles } from '@material-ui/core';
import emailjs from "emailjs-com";
import { Input } from "../input/input";
import { Button } from "../button";
import { storeStateVar } from "../../containers/HomePage/store";
import { CustomCalendar } from "../calendar/calendar";
import { formatDate } from "../../helpers/formatDate";

const FormContainer = styled.div`
    ${tw`
        flex
        content-center
        flex-col
        items-center
        p-3
        pb-4
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `};
`;

const Form = styled.form`
    ${tw`
        flex
        flex-col
        items-center
        p-3
    `};

`;

const Header = styled.h2`
    ${tw`
        text-center
        mt-3
        mb-3
        text-xl
    `};
`;

const Label = styled.label`
    ${tw`
        min-w-full
        pt-3
        text-left
    `};
`;

const Select = styled.select`
    ${tw`
        min-w-full
    `};
    border: 1px solid #cecece;
    background: #F6F6f6;
    border-radius: 8px;
    padding: 6px 0 4px 10px;
`;

const RentButton = styled(Button)`
    ${tw`
        min-w-full
        mt-5
    `};
`;

const CustomDialog = withStyles((theme: Theme) => ({
    root: {
        height: "700px"
    },
  }))(Dialog);

export const usePopupStyles = makeStyles((theme: Theme) => ({
    popupWrapper: {
        maxHeight: "none"
    },
    headerRow: {
        display: "flex",
        justifyContent: "flex-end"
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    header: {
        textAlign: "center",
        paddingTop: "15px",
        fontWeight: "bold"
    },
    sendButton: {
        minWidth: "70%",
        marginBottom: "15px"
    },
    buttonWrapper: {
        justifyContent: "center"
    }
}));


export function Popup() {
    const { showModal } = useReactiveVar(modalStateVar);

    const handleClose = () => {
        modalStateVar({showModal: false});
    };

    const classes = usePopupStyles();

    function sendEmail(e: any) {
        e.preventDefault();

        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_EMAIL_MODULE}`).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)});

        handleClose();
    }

    const store = useReactiveVar(storeStateVar);

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

    const handleChangeDate = (dateType: "startDate" | "endDate") => (date: string) => {
        storeStateVar({
            ...store, 
            [dateType]: date
        });
    }

    const {startDate, endDate} = store;

    return (

        <CustomDialog open={showModal} className={classes.popupWrapper} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.header} id="form-dialog-title"><span>We will call you back within 10 minutes</span></DialogTitle>
        <DialogContent>
            <FormContainer>
                <Form onSubmit={sendEmail}>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" name="name" />

                    <Label htmlFor="email">Phone</Label>
                        <Input type="tel" name="phone" />

                    <Label htmlFor="startTime">Start of rent</Label>
                    <input type="text" name="startTime" value={formatDate(startDate)} style={{display: "none"}} />
                    <CustomCalendar  isOpen={isStartCalendarOpen} handleSwitchOpen={toggleStartDateCalendar} handleChangeValue={handleChangeDate("startDate")} value={startDate ? formatDate(startDate) : ""} label="Pick Up Date"/>

                    <Label htmlFor="endTime">End of rent</Label>
                    <input type="text" name="endTime" value={formatDate(endDate)} style={{display: "none"}} />
                    <CustomCalendar  isOpen={isReturnCalendarOpen} handleSwitchOpen={toggleReturnDateCalendar} handleChangeValue={handleChangeDate("endDate")} value={endDate ? formatDate(endDate) : ""} label="Return Date"/>

                    <Label htmlFor="dealType">Deal type</Label>
                    <Select name="dealType">
                        <option>Rent our car</option>
                        <option>Sell your car</option>
                    </Select>

                    <RentButton className={classes.sendButton} type="submit" text="Send" />
                </Form>

            </FormContainer>
        </DialogContent>
      </CustomDialog>
    );
}