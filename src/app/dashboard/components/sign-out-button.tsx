"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export const SignOutButton = () => {
  return (
    <Button
      onClick={() =>
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              redirect("/authentication");
            },
          },
        })
      }
    >
      Sair
    </Button>
  );
};
