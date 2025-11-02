"use client";

import Button from "@/app/components/atoms/Button";

const AuthRight = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-gradient-to-b from-[#0F1535] to-[#060B25] text-white px-6">
      <div className="w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-2">Nice to see you!</h2>
        <p className="text-gray-400 mb-8 text-sm">
          Enter your email and password to sign in
        </p>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 bg-[#0F1535] border border-[#1F284A] rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0075FF]/50 transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your password"
              className="px-4 py-3 bg-[#0F1535] border border-[#1F284A] rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0075FF]/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 mt-1">
            <div className="relative inline-flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="sr-only peer"
                defaultChecked
              />
              <div className="w-9 h-5 bg-[#1A1F37] rounded-full peer peer-checked:bg-[#0075FF] transition-all duration-300"></div>
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-4"></div>
            </div>
            <label
              htmlFor="remember"
              className="text-sm text-gray-400 select-none"
            >
              Remember me
            </label>
          </div>

          <Button
            variant="primary"
            className="w-full justify-center py-3 mt-2 rounded-xl font-semibold"
          >
            SIGN IN
          </Button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Dont have an account?
          <a
            href="#"
            className="text-white font-semibold hover:underline transition "
          >
            Sign up
          </a>
        </p>

        <div className="mt-16 text-center text-xs text-gray-500">
          <p className="mb-3">
            © 2021, Made with ❤️ by{" "}
            <span className="text-white font-medium">
              Simmmple & Creative Tim
            </span>{" "}
            for a better web
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white">
              Marketplace
            </a>
            <a href="#" className="hover:text-white">
              Blog
            </a>
            <a href="#" className="hover:text-white">
              License
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthRight;
