import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { registerFormSchema, RegisterSchema } from '@/schemas/register-schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from '@tanstack/react-router';
import { useRegister } from "@/hooks/users/use-register";

export default function RegisterForm() {
    const { mutate: register, isPending } = useRegister();

    // Define your form
    const form = useForm<RegisterSchema>({
        // resolver integrates wuth your preferred validation library
        resolver: zodResolver(registerFormSchema),
        // this is the default values for the form
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
    });

    // Define the onSubmit function
    const onSubmit = (data: RegisterSchema) => {
        if (data.password !== data.confirmPassword) {
            form.setError("confirmPassword", { message: "Passwords do not match." });
            return;
        }

        try {
            register(data);
            console.log("Registration successful", data);
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <div className="flex w-1/2 p-2 bg-white rounded">
            <div className="register_form_image w-1/2 relative">
                <img src="https://img.freepik.com/free-photo/one-person-typing-laptop-night-generated-by-ai_188544-27872.jpg" alt="Laptop Image" className="w-full h-full object-cover" />
                <div className="w-full h-full flex flex-col items-center justify-center text-center text-white absolute top-0 p-3">
                    <h1 className="font-bold text-2xl mb-3">Create an Account</h1>
                    <h2 className="">Sign up with your details to get started and join our community.</h2>
                </div>
            </div>
            <div className="w-1/2 p-5 rounded-md bg-white">
                <div className="text-lg font-semibold mb-8 text-center">Sign Up</div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1 flex flex-col justify-center items-center">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="First Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Last Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Username" {...field} />
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Confirm Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isPending} className="w-full bg-blue-500 hover:opacity-75 hover:bg-blue-500 !mt-5 text-white">
                            Register
                        </Button>
                    </form>
                </Form>
                <div className="mt-4">Already have an account?
                    <Link to="/login" className="ml-1 text-blue-500">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
