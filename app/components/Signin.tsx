import Button from "./Button";

const SignInComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-slate-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Sign in
        </h2>
        <form className="space-y-6">
          <div className="flex flex-col w-full">
            <label className="text-gray-300">Email:</label>
            <input
              className="w-full mt-2 p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="shubham@gmail.com"
              required
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-gray-300">Password:</label>
            <input
              className="w-full mt-2 p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex justify-center">
            <Button buttonName="Sign In" />
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign up here
          </a>.
        </p>
      </div>
    </div>
  );
};

export default SignInComponent;
