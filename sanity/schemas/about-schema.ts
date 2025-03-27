const about = {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'fullName',
            title: 'FullName',
            type: 'string',
        },
        {
            name: "portrait",
            title: "Porttrait",
            type: "image",
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: 'tlf',
            title: 'Tlf',
            type: 'text',
          },
          {
            name: 'mail',
            title: 'Mail',
            type: 'text',
          },
          {
            name: 'linkedin',
            title: 'Linkedin',
            type: 'text',
          },
          {
            name: 'cv', 
            title: 'CV',
            type: 'file',
          },
        {
            name: 'about',
            title: 'About',
            type: 'array',
            of: [{ type: "block"}]
        },
        {
            name: 'hobby',
            title: 'Hobby',
            type: 'array',
            of: [{ type: "hobby"}]
        },
    ]
}

export default about