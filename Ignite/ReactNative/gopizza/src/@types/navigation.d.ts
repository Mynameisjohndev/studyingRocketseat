export type productNavigationProps = {
    id?: string;
}
export type orderNavigationProps = {
    id: string;
}

export declare global{
    namespace ReactNavigation{
        interface RootParamsList{
            home: undefined;
            product: productNavigationProps;
            order: orderNavigationProps;
            orders: undefined;
        }
    }
}