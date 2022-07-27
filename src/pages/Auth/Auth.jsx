import { useState } from "react";
import Logo from "../../img/logo.png";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [validPass, setValidPass] = useState(true);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log({ ...formData, [e.target.name]: e.target.value });
  };

  const resetFrom = () => {
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (formData.password === formData.confirmPassword) {
        setValidPass(true);
      } else {
        setValidPass(false);
      }
    }
  };

  return (
    <>
      <div className="w-screen grid place-content-center h-screen bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
        <div className="flex gap-10 items-center">
          <div className="flex items-center gap-10">
            <img src={Logo} alt="" className="h-20 w-20" />
            <div className="">
              <p className="text-6xl font-bold bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 text-transparent bg-clip-text ">
                Thunder Media
              </p>
              <p className="text-xl text-center mt-5 font-bold">
                Explore the ideas throught the world{" "}
              </p>
            </div>
          </div>
          {/* form */}

          <div
            className={`bg-[#F7F7F7] ${
              isSignup ? "" : "w-96"
            } py-10 px-5 rounded-xl shadow-md`}
          >
            <p className="text-primary-black text-xl font-bold text-center">
              {isSignup ? "Sign Up" : "Login"}
            </p>
            <form onSubmit={handleSubmit}>
              {isSignup && (
                <div className="mt-10 gap-5 flex items-center">
                  <input
                    onChange={handleInput}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="py-4 shadow-md px-7 rounded-xl"
                    value={formData.firstName}
                  />
                  <input
                    onChange={handleInput}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="py-4 shadow-md px-7 rounded-xl"
                    value={formData.lastName}
                  />
                </div>
              )}
              <div className="mt-10 gap-5  flex items-center">
                <input
                  onChange={handleInput}
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="py-4 shadow-md w-full px-7 rounded-xl"
                  value={formData.username}
                />
              </div>
              <div className="mt-10 gap-5 flex items-center">
                <input
                  onChange={handleInput}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="py-4 w-full shadow-md px-7 rounded-xl"
                  value={formData.password}
                />
                {isSignup && (
                  <input
                    onChange={handleInput}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="py-4 shadow-md px-7 rounded-xl"
                    value={formData.confirmPassword}
                  />
                )}
              </div>
              {isSignup && (
                <>
                  <div
                    className={`mt-3 text-red-600 ${
                      validPass ? "hidden" : "block"
                    }`}
                  >
                    * Password must be same
                  </div>
                </>
              )}

              <div className="grid place-content-center mt-5">
                <button className="bg-button_gradient hover:scale-110 hover-animation px-7 py-2 rounded-md text-white ">
                  {isSignup ? "Signup" : "Login"}
                </button>
              </div>
              <p
                onClick={() => {
                  setIsSignup((prev) => !prev);

                  resetFrom();
                }}
                className="text-primary-black opacity-50 cursor-pointer text-center underline mt-5"
              >
                {isSignup ? (
                  <>
                    Already have a account ? <span className="">Login</span>
                  </>
                ) : (
                  <>
                    Don't have an account ? <span className="">Signup</span>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
