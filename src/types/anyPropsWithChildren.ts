import React from "react";

// тут також прояв мого бажання робити все універсальним
// експортний тип для додавання наявності чілдренів
export type IAnyPropsWithChildren<T> = T & {children?: React.ReactNode};