// Components
import Button from "../atom/Button";
import Input from "../atom/Input";

export default function FormAuth() {
  return (
    <form className="flex w-full max-w-md min-w-xs flex-col p-4">
      <h2 className="mb-4 text-3xl font-medium text-gray-900">Sign In</h2>

      <p className="text-base font-normal text-gray-500/90">
        Please enter email and passowrd to access
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <div>
          <Input
            variant="input"
            name="email"
            label="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <Input
            variant="input"
            name="password"
            label="password"
            placeholder="********"
          />
        </div>
        <div>
          <Button className="w-full" size="lg" variant="secondary">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
