import MyButton from './Button';

const CFP = () => {
  return (
    <section className="section container border-t border-gray-700 pt-6 text-center" id="cfp">
         <h2 className="title mb-4 text-3xl md:text-5xl">Call For Proposals</h2>
         <p>The Call for Proposals are open till mid February 2023.</p>
    <div className="pt-4">
      <MyButton href="https://forms.gle/3dRtwoLLJHd16RiM7" text="Apply for CFP" />
    </div>
    </section>
  );
};

export default CFP;
