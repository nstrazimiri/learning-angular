export interface Content{
    id: number;
    title:string;
    body:string;
    type?: string;
    author: string;
    imgUrl?: string;
    tags?:string[]
    }