import ApiCard from "@/components/ApiCard";
import CreateProjectCard from "@/components/CreateProjectCard";
import ProjectCard from "@/components/ProjectCard";
import { fetchImages } from "@/lib/actions/api.action";
import { getProjects } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
interface image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
export default async function Home() {
  const { userId } = auth();
  const projects = await getProjects({ userId });
  const result = await fetchImages();
  return (
    <main className="flex h-full w-full flex-col items-start justify-between gap-4">
      <h1 className="text-[40px] font-bold">My Projects</h1>
      <div className="flex flex-wrap gap-4 items-center justify-start ">
        <CreateProjectCard />
        {projects?.map((project: any) => (
          <ProjectCard key={project?.id} project={project} />
        ))}
      </div>
      <div className="w-full h-[2px] rounded-md bg-[#C4C4C4] mt-5">
        {/* SEPERATOR */}
      </div>
      <h1 className="text-[40px] font-bold mt-5">Api Images</h1>
      <div className="flex w-full flex-wrap gap-4 items-center justify-start">
        {result.map((image: image) => (
          <ApiCard key={image?.id} image={image} />
        ))}
      </div>
    </main>
  );
}
