import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState("");

  const login = () => {
    setUser("Hossain");
  };

  const logout = () => {
    setUser("");
  };

  return (
    <div>
      {user ? (
        <div>
          <h3>Hello there, {user}!</h3>
          <button onClick={logout} className="btn">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3>Please, Login!</h3>
          <button onClick={login} className="btn">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
