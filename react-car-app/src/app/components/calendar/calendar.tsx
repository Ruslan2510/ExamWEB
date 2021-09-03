import React, { useState } from "react"; 
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";


const ItemContainer = styled.div`
    ${tw`
        flex
        flex-col
        relative
    `};
`;

const Icon = styled.span`
${tw`
text-red-500
fill-current
text-xs
md:text-base
mr-1
md:mr-3
`};
`;

const SmallIcon = styled.span`
${tw`
text-gray-500
fill-current
text-xs
md:text-base
ml-1

`};
`;


export const DateCalendar = styled(Calendar)`
position: absolute;
max-width: none;
user-select: none;
top: 200%;
z-index: 1200;
left: -110%;
` as any;

const Name = styled.span`
    ${tw`
        text-gray-600
        pt-1
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `};
`;

const FieldWrapper = styled.div`
    ${tw`
        flex
    `};
`;

interface ICalendar {
    isOpen: boolean;
    handleSwitchOpen: () => void;
    handleChangeValue: (date: string) => void;
    value: string;
    label: string;
    className?: string;
}

export function CustomCalendar({ isOpen, handleChangeValue, handleSwitchOpen, value, label, className }: ICalendar) {
    return (
        <ItemContainer>
            <FieldWrapper>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon> 
                <Name onClick={handleSwitchOpen}>{value ? ""+value : label}</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
                </SmallIcon>
            </FieldWrapper>

            { isOpen && <DateCalendar className={className} value={value ? new Date(value) : ""} onChange={handleChangeValue} /> }
        </ItemContainer>
    );
}