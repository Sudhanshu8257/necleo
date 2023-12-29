import Image from "next/image";
import React from "react";
import { auth } from "@clerk/nextjs";
import UpdateDialog from "./UpdateDialog";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DeleteDialog from "./DeleteDialog";
import ProjectDetails from "./ProjectDetails";
const ProjectCard = ({ project }: any) => {
  const { userId } = auth();
  return (
    <div className="relative group h-fit hover:bg-primary rounded-xl bg-white">
      <Dialog>
        <DialogTrigger>
          <div className="flex flex-col min-w-[220px] max-md:w-[150px] max-md:max-w-[150px] items-center justify-center gap-2 px-3 py-2 text-black font-semibold ">
            <div className="w-full h-[150px] overflow-hidden rounded-lg max-h-[150px] flex justify-center items-center">
              <Image
                src={project.imageUrl}
                width={150}
                height={150}
                alt={project.title}
                className="rounded-lg object-contain"
              />
            </div>

            <span>{project.title}</span>
          </div>
        </DialogTrigger>
        <DialogContent className="flex w-fit max-w-xl max-md:w-full flex-col justify-center items-center">
          <ProjectDetails project={project} />
        </DialogContent>
      </Dialog>
      <div className="absolute hidden group-hover:flex max-md:flex top-3 right-2 gap-2 flex-col items-center justify-center">
        <DeleteDialog project={project} />
        <UpdateDialog userId={userId} project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
