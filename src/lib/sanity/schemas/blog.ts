import { SchemaTypeDefinition, ValidationContext } from "sanity";



const blog: SchemaTypeDefinition = {
    name: "blog",
    title: "Blogs",
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
                    if (!context.document?.keyphrase) return true;

                    const keyphrase = context.document.keyphrase;
                    if (typeof keyphrase !== 'string') {
                        return 'Keyphrase must be a valid string.';
                    }

                    if (title.toLowerCase().includes(keyphrase.toLowerCase())) return true;
                    return `Title should contain keyphrase "${keyphrase}"`;
                }).warning()
            ]
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => [
                Rule.required(),
                Rule.max(160).warning('Too long: Description should be less than 160 characters')
            ]
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'keyphrase',
            title: 'Keyphrase',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'string',
                            name: 'alt',
                            title: 'Alternative text',
                            description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
                        }
                    ]
                }
            ],
        }
    ]
};

export default blog;
