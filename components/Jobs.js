/* eslint-disable react/no-unescaped-entities */
import {
  CloudIcon,
  CodeIcon,
  CalendarIcon,
  VideoCameraIcon,
  LightningBoltIcon,
  CommandLineIcon,
  DesktopComputerIcon
} from "@heroicons/react/outline";


export default function Jobs() {
  const skills = [
    {
      name: "Date",
      description:
        "The event will be streamed live on 12th March 2023 from 10 AM EST to 5 PM EST",
      icon: CalendarIcon,
    },
    {
      name: "Youtube",
      description:
        "The event will be streamed live on Youtube. The selected speakers will present via Stremyard.",
      icon: VideoCameraIcon,
    },
    {
      name: "CFP Evaluation",
      description:
        "CFP Evaluation will be done by ChatGPT",
      icon: DesktopComputerIcon,
    },
  ];

  return (
    <section className="section container border-t border-gray-700 pt-6" id = "details">
      <h2 className="title mt-4 mb-8 text-3xl md:text-5xl">
        Event Details
      </h2>
      <div className="mt-5 mb-8">
     
        <dl className="">
          {skills.map((skill) => (
            <div key={skill.name} className="relative mb-5">
              <dt>
                <div className="absolute mt-2 flex h-12 w-12 items-center justify-center rounded-md border border-gray-700 text-white">
                  <skill.icon className="title h-6 w-6" aria-hidden="true" />
                </div>
                <p className="title ml-16 text-xl">{skill.name}</p>
              </dt>
              <dd className="ml-16">{skill.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
