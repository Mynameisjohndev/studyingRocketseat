import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UserStackRoutes } from "./user.stack.routes";
import Signing from "@screens/Signing";
import { useAuth } from "@hooks/auth";
export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <UserStackRoutes /> : <Signing />}
    </NavigationContainer>
  );
}
