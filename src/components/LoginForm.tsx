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
import { loginFormSchema, LoginSchema } from "@/schemas/auth/login-schema";
import { useLogin } from "@/hooks/users/auth/use-login";

export default function LoginForm() {
  const { mutate: login, isPending } = useLogin();

    // Define your form
    const form = useForm<LoginSchema>({
        // resolver integrates wuth your preferred validation library
        resolver: zodResolver(loginFormSchema),
        // this is the default values for the form
        defaultValues: {
            email: "",
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
        <div className="col-start-4 col-end-10 row-start-4 row-end-10 flex rounded bg-white p-2 lg:col-start-2 lg:col-end-12 2xl:col-start-4 2xl:col-end-10 md:col-start-1 md:col-end-13 sm:col-span-full xs:col-span-full">
            <div className="login_form_image w-1/2 relative xs:hidden">
                <img src="https://img.freepik.com/free-photo/one-person-typing-laptop-night-generated-by-ai_188544-27872.jpg" alt="Laptop Image" className="w-full h-full" />
                <div className="w-full h-full flex flex-col items-center justify-center text-center text-white absolute top-0 p-3">
                    <h1 className="font-bold text-2xl mb-3">Welcome Back</h1>
                    <h2 className="">Please log in using your personal information to stay connected with us.</h2>
                </div>
            </div>
        
            <div className="w-1/2 p-5 rounded-md bg-white flex flex-col justify-center xs:w-full">
                <div className="text-lg font-semibold mb-8 text-center">Login</div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 flex flex-col justify-center items-center">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Email" {...field} />
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
                        <Button type="submit" disabled={isPending} className="w-full bg-blue-500 hover:opacity-75 hover:bg-blue-500 !mt-5 text-white">
                            Login
                        </Button>
                    </form>
                </Form>
                <div className="mt-4 xs:hidden">Don't have an account?
                    <Link to="/register" className="ml-1 text-blue-500">
                        Signup
                    </Link>
                </div>
            </div>
        
        </div>
  );
}
