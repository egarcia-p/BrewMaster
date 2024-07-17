"use client";

import { UserCreateForm } from "@/ui-components";
import "@aws-amplify/ui-react/styles.css";

import { Amplify } from "aws-amplify";
import config from "../../../amplifyconfiguration.json";

Amplify.configure(config);

export default function Page() {
  return (
    <div>
      <UserCreateForm />
    </div>
  );
}
