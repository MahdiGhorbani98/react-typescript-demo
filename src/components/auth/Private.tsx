import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PriveteProps = {
  isLoggedin: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedin, component: Component }: PriveteProps) => {
  if (isLoggedin) {
    return <Component name="Mehdi" />;
  } else {
    return <Login />;
  }
};
