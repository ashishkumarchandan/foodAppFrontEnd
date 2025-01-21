import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, LockKeyholeIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
          <p className="text-sm text-gray-600">
            Enter your new password to reset old one
          </p>
        </div>
        <div className="relative mb-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="New Password"
              name="email"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-4 pl-10 border-b border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-0 rounded-lg focus-visible:ring-1"
            />
            <LockKeyholeIcon className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        {loading ? (
          <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
          </Button>
        ) : (
          <Button className="bg-orange hover:bg-hoverOrange">
            Reset Password
          </Button>
        )}
        <div className="mt-2">
          <p className="text-center">
            Back to{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
