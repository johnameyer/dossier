export interface Person {
    id: string,
    firstName: string | undefined,
    lastName: string | undefined,
}

export interface PersonInput {
    firstName: string,
    lastName: string,
}