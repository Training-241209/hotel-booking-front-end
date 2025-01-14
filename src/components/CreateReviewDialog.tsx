import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { reviewFormSchema, ReviewSchema } from "@/schemas/reviews/reviews-schema";

export function CreateReviewDialog() {
//   const { mutate: create, isPending } = useCreateReview();

  const form = useForm<ReviewSchema>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      title: "",
      description: "",
      rating: 1,
    },
  });

  function onSubmit(values: ReviewSchema) {
    // create(values);
    form.reset();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-600 hover:opacity-75 text-white w-1/2 xs:w-full">Add Review</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Review</DialogTitle>
          <DialogDescription>Share your thoughts and feedback about your experience.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Rating" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                // disabled={isPending}
                className="w-full bg-blue-500 hover:bg-blue-500 hover:opacity-75"
              >
                Add Review
              </Button>
            </form>
          </Form>
        </div>
        {/* <DialogFooter>
          <Button type="submit">Create Hotel</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
