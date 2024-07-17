"use server";

import { generateClient } from "aws-amplify/api";
import {
  createRecipe,
  createUser,
  deleteRecipe,
  deleteUser,
  updateRecipe,
  updateUser,
} from "@/graphql/mutations";
import { Difficulty } from "@/models";
import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";
import { listRecipes } from "@/graphql/queries";

Amplify.configure(config);

const client = generateClient();

export async function actionListRecipes() {
  client.graphql;
  const recipes = await client.graphql({
    query: listRecipes,
  });
  console.log(recipes);
  return recipes;
}

export async function actionCreateUser(formData) {
  client.graphql;
  const user = await client.graphql({
    query: createUser,
    variables: {
      input: {
        userName: formData.get("userName")?.toString() ?? "",
        password: formData.get("password")?.toString() ?? "",
        email: formData.get("email")?.toString() ?? "",
        regDate: formData.get("regDate")?.toString() ?? "",
        // Recipes: [],
      },
    },
  });
  revalidatePath("/");
  //redirect("/");
}

export async function actionUpdateUser(formData) {
  client.graphql;
  const user = await client.graphql({
    query: updateUser,
    variables: {
      input: {
        id: formData.get("id")?.toString() ?? "",
        userName: formData.get("userName")?.toString() ?? "",
        password: formData.get("password")?.toString() ?? "",
        email: formData.get("email")?.toString() ?? "",
        regDate: formData.get("regDate")?.toString() ?? "",
      },
    },
  });
  revalidatePath("/");
}

export async function actionDeleteUser(id) {
  client.graphql;
  const user = await client.graphql({
    query: deleteUser,
    variables: {
      input: {
        id: id ?? "",
      },
    },
  });
  revalidatePath("/");
}

export async function actionCreateRecipe(formData) {
  client.graphql;
  const newRecipe = await client.graphql({
    query: createRecipe,
    variables: {
      input: {
        name: formData.get("name")?.toString() ?? "",
        slugName: formData.get("slugName")?.toString() ?? "",
        description: formData.get("description")?.toString() ?? "",
        elaborationTime: formData.get("elaborationTime")?.toString() ?? "",
        brewTime: Number(formData.get("brewTime")?.toString()) ?? 0,
        difficulty: formData.get("difficulty")?.toString() ?? "", //Difficulty.EASY,
        userID: formData.get("userName")?.toString() ?? "",
      },
    },
  });
  revalidatePath("/");
  //redirect("/");
}

export async function actionUpdateRecipe(formData) {
  client.graphql;
  const newRecipe = await client.graphql({
    query: updateRecipe,
    variables: {
      input: {
        id: formData.get("id")?.toString() ?? "",
        name: formData.get("name")?.toString() ?? "",
        slugName: formData.get("slugName")?.toString() ?? "",
        description: formData.get("description")?.toString() ?? "",
        elaborationTime: formData.get("elaborationTime")?.toString() ?? "",
        brewTime: Number(formData.get("brewTime")?.toString()) ?? 0,
        difficulty: formData.get("difficulty")?.toString() ?? "", //Difficulty.EASY,
        userID: formData.get("userName")?.toString() ?? "",
      },
    },
  });
  revalidatePath("/");
}

export async function actionDeleteRecipe(id) {
  client.graphql;
  const user = await client.graphql({
    query: deleteRecipe,
    variables: {
      input: {
        id: id ?? "",
      },
    },
  });
  revalidatePath("/");
}
