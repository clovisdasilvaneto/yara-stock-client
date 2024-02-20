import { gql } from "@apollo/client";

export const WAREHOUSES_QUERY = gql`
  query GetWarehouses {
    warehouses {
      id
      name
      maxAmount
      capacity
      hasHazardous
      warehouseProduct {
        id
        amount
        product {
          id
          name
          amount
        }
      }
    }
  }
`;

export const WAREHOUSE_HISTORY_QUERY = gql`
  query GetWarehouseHistory($id: ID!) {
    warehouse(id: $id) {
      warehouseHistory {
        id
        action
        amount
        date
        product {
          name
        }
      }
    }
  }
`;
