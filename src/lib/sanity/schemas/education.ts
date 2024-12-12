import { SchemaTypeDefinition } from "sanity";

const Education: SchemaTypeDefinition = {
    name: "education",
    title: "Education",
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
            title: "Organisation",
            type: "object",
            fields: [
                {
                    name: "name",
                    title: "Name",
                    type: "string",
                },
                {
                    name: "url",
                    title: "Url",
                    type: "string"
                }
            ]
        },
        {
            name: "date",
            title: "Date",
            type: "string"
        },
        {
            name: "location",
            title: "Location",
            type: "string"
        },
    ]
};

export default Education;
