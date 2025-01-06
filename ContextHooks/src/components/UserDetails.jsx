// import { useContext } from "react";
// import { userContext } from "../context/Context";
// import { useParams } from "react-router-dom";

// const UserDetails = () => {
//   const data=useContext(userContext)
//   const {id}=useParams()
//   const userId=parseInt(id)
//   const user = data.user.find((user) => user.id === userId);
//   console.log(user)
//   console.log(data.user.find(id))
//   return (
//     <div className="user-details-container p-4">
  
//     </div>
//   );
// };

// export default UserDetails;
import { useContext } from "react";
import { userContext } from "../context/Context";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const data = useContext(userContext); // Access user data from context
  const { id } = useParams(); // Destructure 'id' from params
  // const userId = parseInt(id, 10); // Convert 'id' to a number if necessary
  // console.log(userId)
  // // Find the user with the matching ID
  // const user = data.user.find((user) => user.id === userId);
  // console.log(id)
  // console.log(data.user[id])
  const user=data.user[id]
  return (
    <div className="user-details-container p-4">
      {user ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Details</h1>
          <p className="text-lg">
            <strong>Name:</strong> {user.name}
          </p>
          <p className="text-lg">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-lg">
            <strong>Password:</strong> {user.password}
          </p>
        </>
      ) : (
        <p className="text-red-500">User not found</p>
      )}
    </div>
  );
};

export default UserDetails;
