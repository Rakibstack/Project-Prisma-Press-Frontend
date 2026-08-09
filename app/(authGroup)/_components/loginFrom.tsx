"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginAction } from "../_action/authAction";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import Link from "next/link";

const initialState = {
  success: null,
  statusCode: 0,
  message: "",
  data: {
    accessToken: "",
    refreshToken: "",
  },
};

export default function LoginFrom() {
  const [state, action, pending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.success === null) return;

    if (state.success) {
      toast.success(state.message || "User Login Successfully");
    } else {
      toast.error(state.message || "User Login Failed");
    }
  }, [state]);

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <form action={action}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                name="password"
                type="password"
                placeholder="Enter Your Password"
                required
              />
            </div>
          </div>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              {pending ? "Submiting.." : "Login"}
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
            <span className="mt-2">
              New here Please?
              <Link href={'/register'} className="font-bold ">{' '}Register</Link>
            </span>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
