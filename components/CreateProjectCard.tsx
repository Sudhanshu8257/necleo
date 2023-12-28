"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddProjectForm from "./AddProjectForm";
import { useAuth } from "@clerk/nextjs";

const CreateProjectCard = () => {
  const { userId } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="flex flex-col hover:bg-[#FA782F] items-center justify-center gap-2 rounded-xl px-3 py-2 bg-white text-black font-semibold ">
          <div className="w-[200px] h-[150px] cursor-pointer rounded-md bg-[#FA782F] bg-opacity-[40%] hover:bg-opacity-100 flex items-center justify-center">
            <Image
              src="/assets/icons/add.svg"
              alt="add"
              width={32}
              height={32}
            />
          </div>
          <span>Create a new project</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
        </DialogHeader>
        <AddProjectForm type="new" setOpen={setOpen} userId={userId} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectCard;
