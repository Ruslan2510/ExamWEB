import { makeVar } from "@apollo/client";
import React from "react";

interface IStore {
    startDate: string;
    endDate: string;
}


export const StoreState: IStore = {
    startDate: '',
    endDate: ''
}

export const storeStateVar = makeVar<IStore>(StoreState)