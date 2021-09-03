import { makeVar } from "@apollo/client";
import React from "react";

interface IModalState {
    showModal: boolean
}


export const ModalState: IModalState = {
    showModal: false
}

export const modalStateVar = makeVar<IModalState>(ModalState)