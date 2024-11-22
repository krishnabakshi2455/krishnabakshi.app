import { TypedObject } from "sanity";

export type Category = {
    name: string;
    title: string;
    slug: string;
    description: string;
    list: string[];
    image: string;

}

export type CaseStudy = {
    title: string;
    content: string;
    image: string;
}

export type Blog = {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    title: string;
    slug: string;
    description: string;
    thumbnail: string;
    keywords: string[];
    content: TypedObject[];
}
export type SKILLS = {
    _id: string;
    title: string;
    thumbnail: string;
}




export type Location = {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    locationinput: {
        name: string,
        formatted_address: string,
        coordinates: {
            lat: number;
            lng: number;
        },
        place_id: string;
        address_components: string[];
    }
    slug: string;
    description: string;
}