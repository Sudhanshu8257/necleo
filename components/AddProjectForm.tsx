"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImageUploader from "./ImageUploader";
import { useUploadThing } from "@/lib/uploadthing";
import { addProject, updateProject } from "@/lib/actions/user.action";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  title: z.string().min(2).max(20),
  description: z.string().min(2).max(50),
  imageUrl: z.string(),
});
interface formProps {
  userId: string | null | undefined;
  type: string;
  project?: any;
  setOpen: any;
}
const AddProjectForm = ({ userId, type, project, setOpen }: formProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const initial =
    project && type === "update"
      ? {
          title: project.title,
          description: project.description,
          imageUrl: project.imageUrl,
        }
      : {
          title: "",
          description: "",
          imageUrl: "",
        };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initial,
  });

  const { startUpload } = useUploadThing("imageUploader");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    let uploadedImageUrl = values.imageUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      uploadedImageUrl = uploadedImages[0].url;
    }

    if (type === "new") {
      try {
        const newEvent = await addProject({
          ...values,
          imageUrl: uploadedImageUrl,
          userId,
          path: "/",
        });

        if (newEvent) {
          form.reset();
        }
        toast({
          description: "New project added successfully!",
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setOpen(false);
      }
    }
    if (type === "update") {
      if (!project.id) {
        return;
      }
      try {
        await updateProject({
          ...values,
          imageUrl: uploadedImageUrl,
          userId,
          projectId: project.id,
          path: "/",
        });
        toast({
          description: "Project updated successfully!",
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setOpen(false);
      }
    }
  }
  const [files, setFiles] = useState<File[]>([]);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col items-center justify-center"
      >
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="h-fit">
                <ImageUploader
                  onFieldChange={field.onChange}
                  imageUrl={field.value}
                  setFiles={setFiles}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
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
            <FormItem className="w-full">
              <FormControl className="h-32">
                <Textarea placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} type="submit">
          {type === "new"
            ? loading
              ? "Submitting..."
              : "Submit"
            : loading
            ? "Updating..."
            : "Update"}
        </Button>
      </form>
    </Form>
  );
};

export default AddProjectForm;
