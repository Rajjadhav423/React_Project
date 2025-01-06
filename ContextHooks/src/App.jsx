
import RouterCompo from "./RouterCompo";
import { Link } from "react-router-dom";

function App() {


  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between">
          <Link className="text-white font-bold text-lg mx-2" to="/">
            Home
          </Link>
          <Link className="text-white font-bold text-lg mx-2" to="/user">
            User
          </Link>
          <Link className="text-white font-bold text-lg mx-2" to="/about">
            About
          </Link>
        </div>
      </nav>

      <div className="container mx-auto mt-4">
        <RouterCompo />
        {/* Uncomment the line below to pass user data to the Home component */}
        {/* <Home user={user} /> */}
      </div>
    </>
  );
}

export default App;
