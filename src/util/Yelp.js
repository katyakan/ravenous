const apiKey =
  'vm_nFjrCEO2V-_FcpXXtzc6hcu2AX6szmzRfWr6Q65t4G1jS3ItsHb_K3gZ8k6ur0t207uIi99o6ddInR850snTJeB9cVqFnQ_JCzNQofHsTtS_GBvxbc2RTWJaAY3Yx'

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json()
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }))
        }
      })
  },
}

export default Yelp
