import { User } from "./types";

const initialUsers: User[] = [
  {
      id: 1,
      name: "John Doe",
      role: "User",
      status: "Active",
      profile: "https://i.pinimg.com/736x/89/9d/f0/899df01b49cb3b1e933c76933f929038.jpg"
  },
  {
      id: 2,
      name: "Alice Johnson",
      role: "Editor",
      status: "Active",
      profile: "https://i.pinimg.com/736x/5c/84/51/5c8451791625948233e8619775825403.jpg"
  },
  {
      id: 3,
      name: "Charlie Brown",
      role: "User",
      status: "Inactive",
      profile: "https://i.pinimg.com/736x/eb/8a/dd/eb8addac91cec1bba36b57ad28729f17.jpg"
  },
  {
      id: 4,
      name: "Diana Green",
      role: "User",
      status: "Active",
      profile: "https://i.pinimg.com/736x/5b/ec/d3/5becd3230484f2678cb0254d07c1d96d.jpg"
  },
  {
      id: 5,
      name: "Yes This Is You!",
      role: "Editor",
      status: "Inactive",
      profile: "https://i.pinimg.com/736x/98/43/cc/9843cccb9f058d0d2143033a0b1bebcf.jpg"
  },
];

export default initialUsers;