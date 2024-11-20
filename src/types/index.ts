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

export type Service = {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    name: string;
    slug: string;
    category: Category;
    description: string;
    banner: string;
    image: string;
    keywords: string[];
    title: string;
    section1?: {
        title?: string;
        paragraph?: string;
        subsection?: {
            title?: string;
            paragraph?: string;
            list?: string[];
        }
    },
    ourservices?: {
        title?: string;
        paragraph?: string;
        services?: {
            title?: string;
            image?: string;
            description?: string;
        }[];
    },
    beforeafter?: {
        title?: string;
        paragraph?: string;
        image1?: {
            before?: string;
            after?: string;
        };
        image2?: {
            before?: string;
            after?: string;
        }
    },
    ourwork?: {
        title?: string;
        paragraph?: string;
        images?: {
            url?: string;
        }[];
    }
    faq: Faq[];
}

export type Faq = {
    question: string;
    answer: string;
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