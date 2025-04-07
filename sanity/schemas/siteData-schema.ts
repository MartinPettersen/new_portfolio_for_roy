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
        {
            name: 'openinghobbyquote',
            title: 'OpeningHobbyQuote',
            type: 'text',
        },
        {
            name: 'closinghobbyquote',
            title: 'ClosingHobbyQuote',
            type: 'text',
        },
    ]
};

export default siteData