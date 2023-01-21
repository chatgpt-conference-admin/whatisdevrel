import ThreePillars from "./ThreePillars";

/* eslint-disable react/no-unescaped-entities */
export default function DevRelPillars() {
  return (
    <section className="section container animate-fade-in-up border-t border-gray-700 pt-6">
      <h2 className="title mt-4 mb-6 text-3xl md:text-5xl">
       Talks
      </h2>
      <p className="my-4">
       The conference will have Keynotes, Panel Discussions and Sessions
     
      </p>
      <ThreePillars />
    </section>
  );
}
