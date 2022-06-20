import React from "react";

type PropsOf<E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;

export interface CustomComponentOwnProps<E extends React.ElementType = React.ElementType> {
    as?: E;
}

export type CustomComponentProps<E extends React.ElementType> = CustomComponentOwnProps<E> & Omit<PropsOf<E>, keyof CustomComponentOwnProps>;

const defaultElement = "button";

export function CustomComponent<T extends React.ElementType = "button">({
    as,
    children,
    ...otherProps
}: CustomComponentProps<T>) {
    const Component: React.ElementType = as || defaultElement;
    return <Component {...otherProps}>{children}</Component>;
}
