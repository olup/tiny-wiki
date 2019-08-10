import React from "react";
import UsersCard from "./UsersCard";
import RoleCard from "./RoleCard";
import { Divider } from "@blueprintjs/core";

export default () => {
  return (
    <div>
      <UsersCard />
      <Divider style={{ margin: "30px 0" }} />
      <RoleCard />
    </div>
  );
};
