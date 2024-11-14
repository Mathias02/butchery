import request, { gql } from "graphql-request";

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_KEY;

/**
 * getting all categories
 * @returns 
 */
const GetCategories = async () => {
    
    const query = gql `
          query Categories {
              categories(first: 10) {
                id
                name
                slug
                icon {
                  url
                }
              }
        }
        `
    const result = await request(MASTER_URL,query);
    return result;
};

export default{
    GetCategories,
}