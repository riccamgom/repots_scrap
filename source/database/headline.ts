import { Entity, Column } from "typeorm";

@Entity()
export class Headline {
    @Column()
    originUrl: string;

    @Column()
    headline: string;

    @Column()
    dateTime: Date;

    constructor(originUrl: string, headline: string, dateTime: Date) {
        this.originUrl = originUrl;
        this.headline = headline;
        this.dateTime = dateTime;
    }
}