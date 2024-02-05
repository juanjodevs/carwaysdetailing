const generateApiUrl = (path) => {
    return `${import.meta.env.STRAPI_URL}${path}`
}

// This function is also used for Landing page
export const getProducts = async () => {
    const {data: products} = await fetch(`${import.meta.env.STRAPI_URL}/api/products?populate=*`).then((res) => res.json())

    return products.map((product) => {
        return {
            name: product.attributes.name,
            price: product.attributes.price,
            slug: product.attributes.slug,
            description: product.attributes.description,
            youtubeVideoId: product.attributes.youtubeVideoId,
            images: product.attributes.images?.data.map((image) => generateApiUrl(image.attributes.url))
        }
    })
}

export const getLandingData = async () => {
    const {data: {attributes: landing}} = await fetch(`${import.meta.env.STRAPI_URL}/api/landing-page?populate=*`).then((res) => res.json())
    
    return {
        headerImage: generateApiUrl(landing.header_image.data.attributes.url),
        headerDescription: landing.header_description,
        productsTitle: landing.products_title,
        productsCTA: landing.products_cta,
        products: await getProducts(),
        cleaningTitle: landing.cleaning_title,
        cleaningDescription: landing.cleaning_description,
        cleaningImage1: generateApiUrl(landing.cleaning1.data.attributes.url),
        cleaningImage2: generateApiUrl(landing.cleaning2.data.attributes.url),
        cleaningImage3: generateApiUrl(landing.cleaning3.data.attributes.url),
        ecoTitle: landing.eco_title,
        ecoDescription: landing.eco_description,
        servicesTitle: landing.services_title,
        servicesDescription: landing.services_description
    }
}

export const getAboutUsData = async () => {
    const {data: {attributes: aboutus}} = await fetch(`${import.meta.env.STRAPI_URL}/api/about-us?populate=*`).then((res) => res.json())

    return {
        title: aboutus.title,
        background: aboutus.background,
        video: generateApiUrl(aboutus.video.data.attributes.url),
        videoPreview: generateApiUrl(aboutus.videoPreview.data.attributes.url)
    }
}

export const getYouTubeListsData = async () => {
    const {data: youtubelists} = await fetch(`${import.meta.env.STRAPI_URL}/api/youtube-lists?populate=*`).then((res) => res.json())

    return youtubelists.map((youtubelist) => {
        return {
            title: youtubelist.attributes.title,
            description: youtubelist.attributes.description,
            link: youtubelist.attributes.link,
            preview: generateApiUrl(youtubelist.attributes.preview.data.attributes.url)
        }
    })
}

export const getFeeTags = async () => {
    const {data: feeTags} = await fetch(`${import.meta.env.STRAPI_URL}/api/fee-tags?order=id&populate=*`).then((res) => res.json())
    
    return feeTags.map((feeTag) => {
        return {
            title: feeTag.attributes.title,
            tag: feeTag.attributes.tag,
            observation: feeTag.attributes.observation,
            image: generateApiUrl(feeTag.attributes.image.data.attributes.url)
        }
    })
}

export const getFees = async () => {
    const {data: fees} = await fetch(`${import.meta.env.STRAPI_URL}/api/fees?order=price&populate=*`).then((res) => res.json())
    
    return fees.map((fee) => {
        return {
            title: fee.attributes.title,
            description: fee.attributes.description,
            tag: fee.attributes.fee_tag.data.attributes.tag,
            price: fee.attributes.price,
            observation: fee.attributes.observation
        }
    })
}

export const getFeesPdf = async () => {
    const {data: {attributes: feespdf}} = await fetch(`${import.meta.env.STRAPI_URL}/api/fees-pdf?populate=*`).then((res) => res.json())
    return generateApiUrl(feespdf.file.data.attributes.url)
}