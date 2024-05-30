import { createContext, useContext } from "react";
import {currentUser} from "../data.json"

const UserContext = createContext(currentUser);

export function useUserContext() {
    const user = useContext(UserContext);

    if (!user) throw new Error("User not provided in Context!");

    return user;
}