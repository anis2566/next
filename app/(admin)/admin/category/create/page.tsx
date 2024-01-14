"use client";

import { categorySchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { UploadButton } from "@/lib/Uploadthing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Send } from "lucide-react";

const Page = () => {
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      image: "",
    },
  });
  const [image, setImage] = useState<string | null>(null);

  function onSubmit(values: z.infer<typeof categorySchema>) {
    console.log(values);
  }
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mt-3">
        Add Product Category
      </h1>
      <Separator className="mb-5" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Category Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Category name"
                    {...field}
                    className="dark:bg-gray-700 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Category Image</FormLabel>
                <FormControl>
                  <div className="border-2 border-dotted border-gray-300 flex items-center justify-center h-[200px]">
                    {image ? (
                      <div>
                        <Image
                          src={image}
                          alt="Category Image"
                          width={150}
                          height={150}
                        />
                      </div>
                    ) : (
                      <div>
                        <UploadButton
                          endpoint="imageUploader"
                          onClientUploadComplete={(res) => {
                            toast.success("Image uploaded successfully");
                            setImage(res[0]?.url);
                            form.setValue("image", res[0]?.url);
                            form.clearErrors("image");
                          }}
                          onUploadError={(error: Error) => {
                            // Do something with the error.
                            alert(`ERROR! ${error.message}`);
                          }}
                        />
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="gap-2" type="submit">
            {/* <RefreshCcw className="mr-2 h-4 w-4 animate-spin" /> */}
            Create
            <Send />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
