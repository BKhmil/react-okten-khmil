import {IUserAddress} from "./IUserAddress";
import {IUserBank} from "./IUserBank";
import {IUserCompany} from "./IUserCompany";

export type IUser = {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: {
        color: string,
        type: string
    },
    domain: string,
    ip: string,
    address: IUserAddress,
    macAddress: string,
    university: string,
    bank: IUserBank,
    company: IUserCompany,
    ein: string,
    ssn: string,
    userAgent: string
};