export const getFees = async () => {
    const {data: fees} = await fetch(`${import.meta.env.STRAPI_URL}/api/fees?populate=*`).then((res) => res.json())
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

export const getFeeTags = async () => {
    const {data: feeTags} = await fetch(`${import.meta.env.STRAPI_URL}/api/fee-tags`).then((res) => res.json())
    return feeTags.map((feeTag) => {
        return {
            title: feeTag.attributes.title,
            tag: feeTag.attributes.tag,
            observation: feeTag.attributes.observation
        }
    })
}

export const getLandingData = async () => {
    const { data } = await fetch(`${import.meta.env.STRAPI_URL}/api/landing-page?populate=*`).then((res) => res.json())
    return {
        headerImage: data.attributes.header_image.data.attributes.url,
        headerDescription: data.attributes.header_description
    }
}