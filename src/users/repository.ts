const users = [
  {
    id: "0",
    name: "Daniel Madrid",
  },
  {
    id: "1",
    name: "Jhon Doe",
  },
];

export const get = () => {
  return users;
}

export const getOne = (args: {
  id: string
}) => {
  return users.find(user => user.id === args.id);
}
