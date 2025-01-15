import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { hotelAtom } from "@/store/atoms";
import { hotelFormSchema, HotelSchema } from "@/schemas/hotels/hotel-schema";
import { useUpdateHotel } from "@/hooks/hotels/use-update-hotel";
import { useEffect } from "react";

export function UpdateReviewDialog() 
{
  const [hotel] = useAtom(hotelAtom);
  const update = useUpdateHotel();

  const form = useForm<HotelSchema>({
    resolver: zodResolver(hotelFormSchema),
    defaultValues:
    {
      hotelName: hotel?.hotelName,
      description: hotel?.description,
      rooms: hotel?.rooms?.toString(),
      location: hotel?.location,
      price: hotel?.price.toString(),
      image: hotel?.image,
    }
  })

  useEffect(() =>
  {
    if (hotel)
    {
      form.reset(
        {
          hotelName: hotel.hotelName,
          description: hotel.description,
          rooms: hotel.rooms.toString(),
          location: hotel.location,
          price: hotel.price.toString(),
          image: hotel.image,
        }
      )
    }
  }, [hotel, form])

  function onSubmit(values: HotelSchema)
  {
    update.mutate(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-1/2 border border-black bg-white text-black hover:bg-white hover:opacity-75">
          Update
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Review Details</DialogTitle>
          <DialogDescription>
            Update the review details as needed.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

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
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogClose className="w-full">
                <Button type="submit" className="w-1/2 bg-blue-500 hover:bg-blue-500 hover:opacity-75">Update Review</Button>
              </DialogClose>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
