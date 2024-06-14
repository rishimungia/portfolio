"use client";
import ProjectScreen from "@/components/ProjectScreen/ProjectScreen";

export default function Project ({ params }) {
    if (params.id) return (
        <ProjectScreen 
            projectId={params.id}
            setProjectScreen={() => router.push('/')}
        />
    )
}