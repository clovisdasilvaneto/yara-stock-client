import { gql } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
  query GetProducts {
    products {
      id
      name
      amount
      isHazardous
    }
  }
`;