
import { Button } from "@/components/ui/button";
import { getUser } from "@/service/getUser";
export default async function HomePage() {

   const user = await getUser()
   console.log(user,'user Data');
   
  return <div>
    hello Next.js <br />
    <Button >Click Me</Button>   
    </div>;
}
