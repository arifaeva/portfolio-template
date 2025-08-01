import { BlogPostGrid } from "@/components/blog-post-grid";
import type { TMetadata } from "@/components/content-hub";
import { getContentDocs } from "@/libs/get-content-docs";
import { Button } from "@/components/button";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import Image from "next/image";
import Link from "next/link";
import { dummyExperience, dummyProjects } from "@/data/dummy-data";

export default async function Home() {
  const metadatas = (await getContentDocs(6)) as TMetadata[];

  return (
    <main className="flex justify-center items-center bg-zinc-50 dark:bg-zinc-800">
      <div className="max-w-[1080px] lg:mt-[5rem] mt-[3rem] lg:p-16 py-8">
        <section className="lg:space-y-12 space-y-8 lg:pb-20 lg:p-0 p-5">
          <h1 className="text-neutral-400/65 dark:text-neutral-500 font-semibold max-w-[850px]">
            A <span className="text-black dark:text-white">Minimalist</span>{" "}
            Portfolio Template for Developer
          </h1>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-5">
              <Image
                src={`/assets/profile.webp`}
                width={500}
                height={500}
                alt="profile icon"
                className="lg:w-[120px] lg:h-[120px] w-[80px] h-[80px] border border-neutral-500 dark:border-white dark:bg-white rounded-full"
              />
              <div className="flex flex-col lg:gap-2 gap-1">
                <div className="space-y-1">
                  <h2 className="text-black dark:text-white font-semibold">
                    Roberta Deckow
                  </h2>
                  <p className="text-neutral-500 ">Chief Usability Analyst</p>
                </div>
                <div className="flex gap-x-2.5 pt-1.5">
                  <Link href="" target="_blank" className="social-icon p-1.5">
                    <Image
                      src={`/assets/x-icon.webp`}
                      width={500}
                      height={500}
                      alt="x icon"
                    />
                  </Link>
                  <Link href="" target="_blank" className="social-icon">
                    <Image
                      src={`/assets/github-icon.webp`}
                      width={500}
                      height={500}
                      alt="github icon"
                      className="lg:scale-125"
                    />
                  </Link>
                  <Link
                    href=""
                    target="_blank"
                    className="social-icon lg:pb-3 pb-2"
                  >
                    <Image
                      src={`/assets/stackoverflow-icon.webp`}
                      width={500}
                      height={500}
                      alt="stackoverflow icon"
                      className="lg:scale-110 scale-90"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <h5 className="text-neutral-500 dark:text-neutral-200 tracking-wide max-w-[600px]">
              Simpfolio offers a{" "}
              <span className="font-bold dark:font-semibold">
                sleek design for developers
              </span>{" "}
              to showcase their work effectively. Whether you&apos;re a{" "}
              <span className="font-bold dark:font-semibold">
                coder, designer, or tech enthusiast
              </span>
              , this template helps you display your projects with style.
            </h5>
            <div className="flex items-center lg:gap-5 gap-2">
              <Button className="flex items-center lg:gap-3 gap-2">
                <div className="relative inline-flex">
                  <div className="lg:w-2 lg:h-2 h-1.5 w-1.5 bg-green-400 rounded-full"></div>
                  <div className="lg:w-2 lg:h-2 h-1.5 w-1.5 bg-green-400 rounded-full absolute top-0 left-0 animate-ping"></div>
                  <div className="lg:w-2 lg:h-2 h-1.5 w-1.5 bg-green-400 rounded-full absolute top-0 left-0 animate-pulse"></div>
                </div>
                <span>Let&apos;s Talk With Me</span>
              </Button>
              <Button variant="secondary">Find Out More</Button>
            </div>
          </div>
        </section>

        <section className="space-y-5 lg:pb-20 lg:pt-0 lg:px-0 p-5">
          <h3 className="font-semibold dark:text-white">Experience</h3>
          <div>
            {dummyExperience.map((experience, index) => {
              return <ExperienceCard key={index} {...experience} />;
            })}
          </div>
        </section>

        <section className="space-y-5 lg:pb-20 lg:pt-0 lg:px-0 p-5">
          <h2 className="text-2xl font-semibold dark:text-white">Projects</h2>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-3">
            {dummyProjects.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </div>
        </section>

        <section className="space-y-5 lg:p-0 p-5">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold dark:text-white">Blog</h2>
            <Link href="/blog">
              <p className="text-neutral-500 hover:underline">
                See My Other Blogs &#10095;
              </p>
            </Link>
          </div>
          <BlogPostGrid metadatas={metadatas} />
        </section>
      </div>
    </main>
  );
}
