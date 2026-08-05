import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const RegisterFrom = () => {
    return (
        <Card className="w-full max-w-sm">
      
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
             
              <Input id="password" type="password" placeholder='Enter Your Password' required />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Signup
        </Button>
        <Button variant="outline" className="w-full">
          Signup with Google
        </Button>
      </CardFooter>
    </Card>
    );
};

export default RegisterFrom;