import type { Metadata } from "next";

import ProjectsScreen from "@/screens/projects-screen";
import { getProgrammingProjects } from "@/server/content";

export const metadata: Metadata = {
  title: "Projeler",
  description: "ASEA öğrenci projeleri ve gelişim kanıtları.",
};

export default async function ProjectsPage() {
  const projects = await getProgrammingProjects();
  return <ProjectsScreen projects={projects} />;
}
