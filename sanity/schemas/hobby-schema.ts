const hobby = {
    name: "hobby",
    title: "Hobby",
    type: "object",
    fields: [
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }]
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

export default hobby