export enum HumanTypes {
    male = "male",
    female = "female"
};

export interface User {
    id: number,
    balance: number,
    age: number,
    name: string,
    gender: string, //HumanTypes,
    company: string,
    email: string
}