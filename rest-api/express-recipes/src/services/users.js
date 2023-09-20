import users from "../../db/users.js";

export const findUser = (id) => {
    return users.find((user) => user.id === id);
}
