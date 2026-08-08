"use server"

/**
 * 
 * {
    "success": true,
    "statusCode": 201,
    "message": "User Register Successfully",
    "data": {
        "id": "bde7c172-965c-42df-8e0c-576c1478abb8",
        "name": "Rakibul hassan Rakib",
        "email": "Rakib7@gmail.com",
        "activeStatus": "ACTIVE",
        "role": "USER",
        "createdAt": "2026-08-08T08:58:16.936Z",
        "updatedAt": "2026-08-08T08:58:16.936Z",
        "profile": {
            "id": "f59683e1-ddae-4869-bec4-7dd64496a031",
            "profilePhoto": "www.google.com",
            "bio": null,
            "userId": "bde7c172-965c-42df-8e0c-576c1478abb8",
            "createdAt": "2026-08-08T08:58:16.936Z",
            "updatedAt": "2026-08-08T08:58:16.936Z"
        }
    }
}
 */

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
