export class Post {
    title: string;
    content: string;
    loveIts: number;
    createdAt: Date;

    constructor(){
        this.createdAt = new Date();
    }
}