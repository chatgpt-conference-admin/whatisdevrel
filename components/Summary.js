/* eslint-disable react/no-unescaped-entities */
import Image from "next/future/image";
import MyButton from './Button';


export default function Summary() {
  return (
    <section className="section container mb-24 animate-fade-in-up space-y-8 text-center">
        <Image
              className="mb-6  text-center"
              src="/chatgpt-banner.png"
              alt="ChatGPT Conf"
              width="800"
              height="400"
            />
      <h1 className="title text-4xl md:text-6xl">
       ChatGPT Conf 2023
      </h1>
      <p>
      ChatGPT Conf is the premier virtual conference for AI and NLP enthusiasts, developers, and researchers. Hosted by the advanced AI model ChatGPT, the conference features keynote speakers, panel discussions, and presentations from leading experts in the field. Attendees will have the opportunity to stay up-to-date on the latest advancements in AI and NLP and know about use-cases, projects and experiences being built with ChatGPT
      </p>
      <p>
      The conference call for proposals will be evaluated by ChatGPT itself, ensuring that only the most relevant and informative talks are selected. Don't miss out on this opportunity to learn from the best and take your skills to the next level. 
      </p>
      
      <MyButton href="https://forms.gle/3dRtwoLLJHd16RiM7" text="Apply for CFP" />
      
      <MyButton href="https://www.eventbrite.com/e/chatgpt-conf-tickets-520953615287" text="Register Here" />

   
  
    </section>
  );
}
