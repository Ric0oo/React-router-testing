import { useParams } from "react-router-dom";

export const User = () => {
  // odczyt parametru userID z URL
  // ...3000/userList/123
  // userID = 123

  // params jest to obiekt z parametrami URL
  const { userID } = useParams();

  return <p>User - {userID}</p>;
};
