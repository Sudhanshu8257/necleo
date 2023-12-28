"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import AddProjectForm from "./AddProjectForm";

interface UpdateDialogProps {
  userId: string | null;
  project: any;
}
const UpdateDialog = ({ userId, project }: UpdateDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Edit width={22} height={22} className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Project</DialogTitle>
        </DialogHeader>
        <AddProjectForm
          setOpen={setOpen}
          userId={userId}
          type="update"
          project={project}
        />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDialog;
