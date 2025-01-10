import {
  UpdateUserSchema,
  updateUserFormSchema,
} from "@/schemas/updateUser-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "./ui/form";
import { Input } from "./ui/input";

export default function UpdateUserForm() {
  // Define your form
  const form = useForm<UpdateUserSchema>({
    // resolver integrates wuth your preferred validation library
    resolver: zodResolver(updateUserFormSchema),
    // this is the default values for the form
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  // Define the onSubmit function
  const onSubmit = (data: UpdateUserSchema) => {
    try {
      // this is where you have to hook it up with the backend
      console.log("Using the Backend Hook");
    } catch (error) {
      console.error("User update failed:", error);
    }
  };

  return (
    <div className="w-5/6 p-3 bg-red-50">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 flex flex-col justify-center items-center"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="First Name" {...field} />
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
                  <Input type="text" placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:opacity-75 hover:bg-blue-500 !mt-5 text-white"
          >
            Confirm
          </Button>
        </form>
      </Form>
    </div>
  );
}
