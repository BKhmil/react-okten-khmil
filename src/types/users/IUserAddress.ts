export type IUserAddress = {
    address: string,
    city: string,
    coordinates: {
        lat: number,
        lng: number
    },
    postalCode: string,
    state: string
};