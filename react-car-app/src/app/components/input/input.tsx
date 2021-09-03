import React from "react"; 
import styled from "styled-components";
import tw from "twin.macro";

interface IInputProps {
    type: string;
    className?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    value?: string;
}

const BaseInput = styled.input`
    width: 300px;
    font-size: 13px;
    padding: 6px 0 4px 10px;
    border: 1px solid #cecece;
    background: #F6F6f6;
    border-radius: 8px;
    ${tw`
        pl-5
        pr-5
        pt-3
        pb-3
    `};
`;

const FormInput = styled(BaseInput)``;

export function Input(props: IInputProps) {
    const { type, className, placeholder, onChange, name, value } = props;
    console.log("INPUTVALUE: ", value);

    return (
        <FormInput className={className} required value={value} onChange={onChange} type={type} name={name} />
    );
}