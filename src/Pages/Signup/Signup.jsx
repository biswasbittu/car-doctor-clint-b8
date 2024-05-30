
import { Link } from 'react-router-dom';
import login from "../../assets/images/login/login.svg"
const Signup = () => {
    return (
      <div className="hero min-h-screen my-8 ">
        <div className="hero-content justify-around flex-col-reverse lg:flex-row-reverse mr-8">
          <div className="card shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100 w-1/2 ">
            <h1 className="text-2xl font-bold text-center">Sign Up </h1>
            <form className="card-body" >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className=" btn font-semibold text-white bg-customButtonColor  px-4 py-2 rounded hover:bg-orange-500  transition-colors duration-300"
                />
              </div>
            </form>
            <p className="px-8 py-3">
              New to Car Doctors?
              <Link
                to="/login"
                className="text-customButtonColor cursor-pointer"
              >
                Log In
              </Link>
            </p>
          </div>
          <div className="text-center lg:text-left w-1/2 ">
            <img src={login} alt="" className="w-[460 px]" />
          </div>
        </div>
      </div>
    );
};

export default Signup;