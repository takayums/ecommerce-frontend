// Library
import { useNavigate } from "react-router-dom";
import { Button } from "@/components";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-7xl font-extrabold tracking-tight text-indigo-500 lg:text-9xl">
        404
      </h1>
      <p className="text-3xl font-bold tracking-tight text-indigo-500">
        Something's missing.
      </p>
      <p className="text-center text-base font-light text-gray-500 md:text-lg">
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </p>
      <Button onClick={() => navigate(-1)}>Back To Home Page</Button>
    </section>
  );
}
