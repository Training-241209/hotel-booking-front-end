import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { loginFormSchema, LoginSchema } from "@/schemas/login-schema";
import { useLogin } from "@/hooks/users/use-login";

export default function LoginForm() {
  const { mutate: login, isPending } = useLogin();

  // Define your form
  const form = useForm<LoginSchema>({
    // resolver integrates wuth your preferred validation library
    resolver: zodResolver(loginFormSchema),
    // this is the default values for the form
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Define the onSubmit function
  const onSubmit = (data: LoginSchema) => {
    try {
      login(data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // <div className="flex w-1/2 h-1/2 p-2 bg-white rounded"> => changed
  return (
    <div className="flex h-[375px] w-1/2 rounded bg-white p-2">
      <div className="login_form_image relative w-1/2">
        <img
          src="https://img.freepik.com/free-photo/one-person-typing-laptop-night-generated-by-ai_188544-27872.jpg"
          alt="Laptop Image"
          className="h-full w-full"
        />
        <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center p-3 text-center text-white">
          <h1 className="mb-3 text-2xl font-bold">Welcome Back</h1>
          <h2 className="">
            Please log in using your personal information to stay connected with
            us.
          </h2>
        </div>
      </div>

      <div className="w-1/2 rounded-md bg-white p-5">
        <div className="mb-8 text-center text-lg font-semibold">Login</div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center space-y-3"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isPending}
              className="!mt-5 w-full bg-blue-500 text-white hover:bg-blue-500 hover:opacity-75"
            >
              Login
            </Button>
          </form>
        </Form>
        <div className="mt-4">
          Don't have an account?
          <Link to="/register" className="ml-1 text-blue-500">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
