import {IUser} from "../types/users/IUser";

function User({
                  id,
                  firstName,
                  lastName,
                  maidenName,
                  age,
                  gender,
                  email,
                  phone,
                  username,
                  password,
                  birthDate,
                  image,
                  bloodGroup,
                  height,
                  weight,
                  eyeColor,
                  hair,
                  domain,
                  ip,
                  address,
                  macAddress,
                  university,
                  bank,
                  company,
                  ein,
                  ssn,
                  userAgent
              }: IUser) {

    return (
        <>
            <div>id: {id}</div>
            <div>{firstName} - {lastName} - {maidenName}</div>
            <div>age: {age} - gender: {gender}</div>
            <div>email: {email} - phone: {phone}</div>
            <div>username: {username} - password: {password}</div>
            <div>birthDate: {birthDate}</div>
            <img src={image} alt={firstName}/>
            <div>bloodGroup: {bloodGroup} - eyeColor: {eyeColor}</div>
            <div>height: {height} - weight: {weight}</div>
            <div>hair: {JSON.stringify(hair)}</div>
            <div>domain: {domain} - ip: {ip}</div>
            <div>address: {JSON.stringify(address)}</div>
            <div>macAddress: {macAddress} - university: {university}</div>
            <div>bank: {JSON.stringify(bank)}</div>
            <div>company: {JSON.stringify(company)}</div>
            <div>ein: {ein}</div>
            <div>ssn: {ssn}</div>
            <div>userAgent: {userAgent}</div>
        </>
    );
}

export default User;