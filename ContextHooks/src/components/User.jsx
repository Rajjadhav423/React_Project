import { useContext } from "react";
import { userContext } from "../context/Context";
import { Link } from "react-router-dom";

const User = () => {
  const data = useContext(userContext);
//    const clickHandler=()=>{
//     data.setUser((prevItem)=>{
// [...prevItem,{
//   id: 4, name: 'Yogesh  Jadhav', email: 'john@example.com', password: 'password123'
// }]
//     })
//    }
const clickHandler = () => {
  data.setUser((prevItem) => [
    ...prevItem,
    {
      id: 3, // Ensure this ID is unique
      name: "Yogesh Jadhav",
      email: "john@example.com",
      password: "password123",
    },
  ]);
};

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      {data.user.map((val) => {
        return (
          // <div key={val.id} className="mb-4 p-4 border rounded shadow-sm">
          //   <h1 className="text-xl font-semibold">{val.name}</h1>
          //   <h1 className="text-gray-600">{val.email}</h1>
          //   <h1 className="text-gray-600">{val.password}</h1>
          // </div>
          <Link
          key={val.id}
          className="flex gap-2 flex-col p-2 border rounded shadow-md hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition duration-200"
          to={`/user/${val.id}`}
        >
          {val.name}
        </Link>
        );
      })}

      <button onClick={clickHandler}>add user</button>
    </div>
  );
};

export default User;
