"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { deleteProjectWithId } from "@/lib/actions/user.action";
import { useToast } from "./ui/use-toast";
interface DeleteDialogProps {
  project: any;
}
const DeleteDialog = ({ project }: DeleteDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const deleteProject = async () => {
    try {
      setLoading(true);
      await deleteProjectWithId({
        id: project.id,
        imageId: project.imageUrl,
        path: "/",
      });
      toast({
        description: "Project deleted successfully!",
      });
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Trash2 width={22} height={22} className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-center items-center">
        <DialogHeader>
          <DialogTitle>
            Are you sure you want to delete project {project.title}
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={deleteProject}
            disabled={loading}
            className="bg-red-700 hover:bg-red-500  mt-4"
          >
            {loading ? "DELETING..." : "DELETE"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
