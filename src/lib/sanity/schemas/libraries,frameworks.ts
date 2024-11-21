import { SchemaTypeDefinition } from "sanity";

const blog: SchemaTypeDefinition = {
    name: "libraries-frameworks",
    title: "Libraries-Frameworks",
    type: "document",
    preview: {
        select: {
            title: 'title',
            subtitle: 'description',
            media: 'thumbnail'
        }
    },
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => [
                Rule.required(),
                Rule.max(65).warning('Too long: Title should be less than 65 characters'),
                Rule.custom((title: string, context: any) => {
                    if (!title) return true;
                    if (!context.document.keyphrase) return true;
                    if (title.toLowerCase().includes(context.document.keyphrase.toLowerCase())) return true;
                    return `Title should contain keyphrase "${context.document.keyphrase}"`;
                }).warning()
            ]
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            validation: Rule => Rule.required()
        },
    ]
}

export default blog;