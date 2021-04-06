const apiCall = (optionalID: number) =>
  fetch('https://CUSTOM_API_URL/?reqID', {
    method: 'POST',
    body: JSON.stringify({
      id: optionalID
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });

// GQL
// export const ADD_TO_REQUIRED_GROUPS = gql`
//   mutation AddToGroup($name: Int!) {
//     addToGroup(id: $name) {
//       id
//     }
//   }
// `;
// const [addToGroup] = useMutation(ADD_TO_REQUIRED_GROUPS);
// addToGroup({
//   variables: {
//     id: 2
//   }
// });

// suggested mutation + payload
// for example: apiCall(4)

export default apiCall;
