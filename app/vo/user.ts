export class User {
    constructor (
        public userName: string,
        public password: string,
        public corp?: string,
        public role?: string
    ) { }
}