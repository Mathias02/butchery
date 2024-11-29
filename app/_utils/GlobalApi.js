import request, { gql } from "graphql-request";

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_KEY;

/**
 * getting all categories
 * @returns 
 */
const GetCategories = async () => {
    
    const query = gql `
        query category {
            categories {
              id
              name
              slug
              meat {
                slug
              }
              icon {
                url
              }
            }
          }
        `
    const result = await request(MASTER_URL,query);
    return result;
};

const GetProducts = async (category) => {

  const query = gql `
    query products {
        meats(where: {category: {slug: "`+category+`"}}) {
          id
          name
          price
          slug
          pics {
            url
          }
          category {
            name
          }
  }
}
  `
  const result = await request(MASTER_URL,query);
    return result;
};

 const GetProduct = async (data) => {

  const query = gql `
  
query details {
  meat(where: {slug: "`+data+`"}) {
    
    name
    price
    pics {
      url
    }
    description
    slug
    category {
      slug
    }
  }
}
  
  `
  const result = await request(MASTER_URL,query);
  return result;
 };


export default{
    GetCategories,
    GetProducts, 
    GetProduct
}