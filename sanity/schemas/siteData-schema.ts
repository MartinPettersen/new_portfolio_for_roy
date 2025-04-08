const siteData = {
    name: "sitedata",
    title: "SiteData",
    type: "document",
    fields: [
        {
            name: 'quotes',
            title: 'Quotes',
            type: 'array',
            of: [{ type: "string"}]
        },
        {
            name: 'bannerquote',
            title: 'BannerQuote',
            type: 'text',
        },
        
    ]
};

export default siteData