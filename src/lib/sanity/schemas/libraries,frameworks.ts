import { SchemaTypeDefinition, ValidationContext } from "sanity";

const LibrariesFrameworks: SchemaTypeDefinition = {
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
                Rule.custom((title: string, context: ValidationContext) => {
                    const keyphrase = context.document?.keyphrase;

                    // Ensure keyphrase exists and is a string
                    if (!keyphrase || typeof keyphrase !== 'string') return true;

                    // Check if title includes the keyphrase
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

export default LibrariesFrameworks;
