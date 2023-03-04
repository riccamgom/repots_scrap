import { Entity, ObjectIdColumn, ObjectID } from "typeorm"

@Entity()
export class Headline {
    @ObjectIdColumn()
    _id: ObjectID;
    urlOrigin: string
    headline: string
    date: Date
}