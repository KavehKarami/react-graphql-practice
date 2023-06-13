import { gql, useMutation } from "@apollo/client";

/**
 * NOTE: this component just a sample of mutation in graphql not a real example
 */

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
      }
    }
  }
`;

function Mutation() {
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: "hotdog",
        quantityPerUnit: 4,
      },
    }
  );
  return (
    <div>
      <button type="button" onClick={createProduct}>
        create
      </button>
    </div>
  );
}

export default Mutation;
