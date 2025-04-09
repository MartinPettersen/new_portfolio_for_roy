const contentBlock = {
    name: "contentBlock",
    title: "Content Block",
    type: "object",
    fields: [
        
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }]
        },
        {
            name: 'slidetitle',
            title: 'SlideTitle',
            type: 'string',
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        }
    ]
};

export default contentBlock