import { SchemaTypeDefinition, ValidationContext } from "sanity";

const Backend: SchemaTypeDefinition = {
    name: "backend",
    title: "Backend",
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
                Rule.custom((title: string, context: ValidationContext) => {
                    if (!title) return true;

                    const keyphrase = context.document?.keyphrase;
                    if (!keyphrase || typeof keyphrase !== 'string') return true;

                    if (title.toLowerCase().includes(keyphrase.toLowerCase())) return true;

                    return `Title should contain keyphrase "${keyphrase}"`;
                }).warning()
            ]
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            validation: (Rule) => Rule.required()
        },
    ]
};

export default Backend;
