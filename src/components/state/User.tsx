import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "mehdi",
      email: "mahdig502.com",
    });
  };

  return <div>Name of user is {user?.name}</div>;
};

export default User;
