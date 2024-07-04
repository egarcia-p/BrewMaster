"use client";
import { actionCreateRecipe, actionCreateUser } from "@/lib/actions";

import { UserCreateForm } from "@/ui-components";
import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { actionListRecipes } from "@/lib/actions";

//import { cookies } from "next/headers";
import * as queries from "@/graphql/queries";
import { Amplify } from "aws-amplify";
import config from "../../../amplifyconfiguration.json";

Amplify.configure(config);

// import config from "@/amplifyconfiguration.json";
// import { generateClient } from "aws-amplify/api";

// const client = generateClient({
//   config,
// });

// const users = async function () {
//   "use server";
//   const result = await client.query({
//     query: gql`
//       query GetUsers {
//         listUsers {
//           items {
//             id
//             name
//             email
//           }
//         }
//       }
//     `,
//   });

//   return result.data.listUsers.items;
// };
// //await client.graphql({ query: listRecipes });
// console.log(users);

export default function Page() {
  //const initialState = { message: "", errors: {} };
  //const [state, dispatch] = useFormState(actionCreateUser, initialState);
  //const [state2, dispatch2] = useFormState(actionCreateRecipe, initialState);

  return (
    <div>
      <UserCreateForm />
    </div>
  );
}
