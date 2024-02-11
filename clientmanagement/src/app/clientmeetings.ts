export class Clientmeetings {
   
    constructor(
        public id: number = 0,
        public meetingtopic: string = "",
        public no_of_persons: number = 0,
        public startdatetime: Date = new Date(),
        public clientid: number = 0,
        public status: string = ""
    ) {}
}
