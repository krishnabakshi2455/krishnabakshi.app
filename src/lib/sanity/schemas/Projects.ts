import { SchemaTypeDefinition, ValidationContext } from "sanity";

const Projects: SchemaTypeDefinition = {
    name: "projects",
    title: "Projects",
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

                    // Ensure keyphrase is a string
                    if (!keyphrase || typeof keyphrase !== 'string') return true;

                    if (title.toLowerCase().includes(keyphrase.toLowerCase())) return true;

                    return `Title should contain keyphrase "${keyphrase}"`;
                }).warning()
            ]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'sourcecodelink',
            title: 'SourceCodeLink',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'livelink',
            title: 'LiveLink',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            validation: (Rule) => Rule.required()
        },
    ]
};

export default Projects;