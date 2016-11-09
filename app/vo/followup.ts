export class Followup {
    constructor (
        public followupId: string,
        public status: string,
        public followupDate: string,
        public riskId: string
    ) { }
}