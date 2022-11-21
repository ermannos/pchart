import React from "react";
import Store from "../store/Store";
export declare const StoreContext: React.Context<Store | undefined>;
export declare const StoreProvider: React.FC<{
    value: Store;
    children: React.ReactNode;
}>;
export declare function useStore(): Store | undefined;
