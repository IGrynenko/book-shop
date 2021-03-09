export enum BookType {
    Action,
    Classics,
    Detective,
    Fantasy,
    Historical,
    Horror
}

let bookTypes: { [index: number]: string } = {
    0: 'Action',
    1: 'Classics',
    2: 'Detective',
    3: 'Fantasy',
    4: 'Historical',
    5: 'Horror'
}
export const displayBookType = bookTypes;