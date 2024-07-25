import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className=" max-w-[1400px] m-auto">
      {isAuth ? <PrivateRoutes /> : <PublicRoutes />}
    </div>
  );
}

export default App;

