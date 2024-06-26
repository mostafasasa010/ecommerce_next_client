import { getOneProjectAction } from "@/actions/projects.action";
import { BreadcrumbDemo } from "@/components/Breadcrumb";
import { IProject } from "@/interfaces";
import Image from "next/image";
import React from "react";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const page = async ({ params, searchParams }: PageProps) => {
  const data: IProject[] = await getOneProjectAction(params.id as string);
  return (
    <div className="py-6">
      <div className="mb-4">
        <BreadcrumbDemo
          links={[
            {
              name: "كورسات",
              link: "/courses",
            },
            {
              name: data[0].title,
              link: params.id,
            },
          ]}
        />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-bold self-start">{data[0]?.title}</h1>
        <div className="flex flex-col gap-3">
          <Image
            src={
              data[0].image
                ? data[0].image
                : "https://res.cloudinary.com/dvtmqtcyl/image/upload/v1712000980/No_Products_55d29f8b32.jpg"
            }
            alt="image"
            width={1000}
            height={1000}
            className="rounded-md"
          />
          <p className="flex gap-1">
            <strong>الوصف:</strong>
            <span>{data[0].body}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
