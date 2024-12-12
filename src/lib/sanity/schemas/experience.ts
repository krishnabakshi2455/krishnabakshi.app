import { SchemaTypeDefinition } from "sanity";

const Experience: SchemaTypeDefinition = {
    name: "experience",
    title: "Experience",
    type: "document",
    preview: {
        select: {
            title: 'title',
            subtitle: 'description',
        }
    },
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'organisation',
            title:"Organisation",
            type:"object",
            fields:[
                {
                    name:"name",
                    title:"Name",
                    type:"string",
                },
                {
                    name:"url",
                    title:"Url",
                    type:"string"
                }
            ]
        },
        {
            title:"date",
            name:"Date",
            type:"string"
        },
        {
            title:"location",
            name:"Location",
            type:"string"
        },
        {
            title:"description",
            name:"Description",
            type:"string"
        },
    ]
};

export default Experience;
