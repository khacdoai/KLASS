import { createContext } from "react";

import type { User } from "./types";
const AuthContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
}>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: (_user: User | null) => {},
});

export default AuthContext;
