export interface ISettings {
    sortBy: string;
}

export class Settings implements ISettings {
    sortBy: string

    constructor() {
        this.sortBy = 'Name'
    }
}