import { gql } from "@apollo/client";

export const CREATE_WAREHOUSE = gql`
  mutation createWarehouse($name: String!, $maxAmount: Int!) {
    createWarehouse(
      createWarehouseInput: { name: $name, maxAmount: $maxAmount }
    ) {
      id
      name
    }
  }
`;

export const MOVEMENT_PRODUCT = gql`
  mutation movementProduct(
    $warehouseId: ID!
    $productId: ID!
    $amount: Int!
    $date: String!
    $action: ProductAction!
  ) {
    movementProduct(
      movementProductInput: {
        warehouseId: $warehouseId
        productId: $productId
        amount: $amount
        date: $date
        action: $action
      }
    ) {
      id
    }
  }
`;
