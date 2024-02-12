import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  //   const { user, loading, setUser, setLoading } = useAuth();
  const authInfo = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    console.log(authInfo);
    authInfo?.setLoading(true);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const userInfo = {
      password,
      email,
    };
    axiosPublic
      .post("/jwt", userInfo)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        authInfo?.setUser(res.data.user);
        authInfo?.setLoading(false);

        toast.success("User logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        authInfo?.setUser(null);
        authInfo?.setLoading(false);
        toast.error("User was not logged in");
      });
  };

  return (
    <div className="bg-[#FEFCFB]">
      <div className="max-w-[1400px] px-2 mx-auto mb-[40px] mt-[40px]">
        <div className="hero">
          <div className="flex-col md:flex-row-reverse hero-content">
            <div className="max-w-[280px] lg:max-w-[400px]">
              <img src="" alt="" />
            </div>
            <div className="border-2 max-w-[280px] md:max-w-[400px] shadow-xl border-yellow-500 shrink card">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Your Password"
                      className="w-full input input-bordered"
                      required
                    />
                    {showPassword ? (
                      <AiOutlineEyeInvisible
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                        className="absolute text-2xl top-3 right-3"
                      ></AiOutlineEyeInvisible>
                    ) : (
                      <AiOutlineEye
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                        className="absolute text-2xl top-3 right-3"
                      ></AiOutlineEye>
                    )}
                  </div>
                </div>
                <div className="mt-6 form-control">
                  <button className="bg-yellow-500 hover:opacity-90 text-white text-3xl h-[60px] px-[20px] rounded-lg">
                    Login
                  </button>
                  <p className="mt-4 font-medium text-center text-gray-600">
                    New to this site?{" "}
                    <Link to="/register">
                      <span className="text-blue-700">Register</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
