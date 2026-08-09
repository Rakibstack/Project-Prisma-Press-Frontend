"use server"

 type prevState = {
  success: boolean | null;
  statusCode: number;   
    message: string;
    data: {
        id: string;
        name: string;
        email: string;
        activeStatus: string;
        role: string;
        createdAt: string;
        updatedAt: string;
        profile: {
            id: string;
            profilePhoto: string;
            bio: string | null;
            userId: string;
            createdAt: string;
            updatedAt: string;
        };
    };
};

export const signupAction = async (prevState: prevState, fromData: FormData) => {

  const name = fromData.get("name") as string;
  const email = fromData.get("email") as string;
  const password = fromData.get("password") as string;
  const profilePhoto = fromData.get("profilePhoto") as string;

  const payload = {
    name,
    email,
    password,
    profilePhoto,
  };

  const res = await fetch(`${process.env.NEXT_BACKEN_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  
  return result;
};
