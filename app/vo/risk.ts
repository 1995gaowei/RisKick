export class Risk {
    constructor (
        public riskId: string, 
        public possibility: string, 
        public impact: string,
        public threshold: string,
        public creatorName: string,
        public followerName: string,
        public description: string,
        public riskType: string,
        public projectId: string
    ) { }
}