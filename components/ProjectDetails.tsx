import Image from "next/image";
import React from "react";

const ProjectDetails = ({ project }: any) => {
  return (
    <div className="flex flex-col p-4 justify-center items-start">
      <div className="w-full h-[200px] max-h-[200px] flex justify-center items-center">
        <Image
          src={project.imageUrl}
          width={200}
          height={200}
          alt={"project"}
          className="rounded-lg object-contain"
        />
      </div>
      <span className="font-bold text-[24px] capitalize">{project.title}</span>
      <span className="font-medium text-[16px] capitalize text-gray-400">
        {project.description}
      </span>
    </div>
  );
};

export default ProjectDetails;
