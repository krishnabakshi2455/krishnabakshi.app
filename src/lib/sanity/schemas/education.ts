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
            name: 'schoolcollege',
            title: "SchoolCollege",
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
            title: "date",
            name: "Date",
            type: "string"
        },
        {
            title: "location",
            name: "Location",
            type: "string"
        },
    ]
};

export default Education;
