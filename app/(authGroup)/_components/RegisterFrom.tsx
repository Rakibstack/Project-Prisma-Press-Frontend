"use client";
import React, { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signupAction } from "../_action/registerAction";
import { toast } from "sonner";

const initialState = {
  success: null,
  statusCode: 0,
  message: "",
  data: {
    id: "",
    name: "",
    email: "",
    activeStatus: "",
    role: "",
    createdAt: "",
    updatedAt: "",
    profile: {
      id: "",
      profilePhoto: "",
      bio: null,
      userId: "",
      createdAt: "",
      updatedAt: "",
    },
  },
};
const RegisterFrom = () => {
  
  const [state, action, pending] = useActionState(signupAction, initialState);

  useEffect(() => {
    if (state.success === null) return;
    if (state.success) {
      toast.success(state.message || "User Register Successfully");
    } else {
      toast.error(state.message || "User Register Failed");
    }
  }, [state]);
  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <form action={action}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="profilePhoto">Profile Photo</Label>

              <Input
                id="image"
                name="profilePhoto"
                type="text"
                placeholder="Upload Profile Photo"
                required
              />
            </div>
          </div>
          <CardFooter className="flex-col gap-2 mt-4">
            <Button type="submit" className="w-full">
              {pending ? "Submitting.." : "Signup"}
            </Button>
            <Button variant="outline" className="w-full">
              Signup with Google
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterFrom;
