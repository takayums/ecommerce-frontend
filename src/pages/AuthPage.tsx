import { FormAuth } from "../components";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="min-w-md rounded-lg border border-gray-300 bg-white shadow">
        <FormAuth />
      </div>
    </div>
  );
}
