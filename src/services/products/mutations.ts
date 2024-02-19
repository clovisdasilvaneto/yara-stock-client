import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct($name: String!, $amount: Int!, $isHazardous: Boolean!) {
    createProduct(createProductInput: {name: $name, amount: $amount, isHazardous: $isHazardous}) {
      id
      name
    }
  }
`;