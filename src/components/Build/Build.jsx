import ConnectIcon from "../../assets/BuildImages/connect-icon.png";
import Arrowicon from "../../assets/BuildImages/arrow.png";
import { BiRightArrowAlt } from "react-icons/bi";
import FlutterWave from "../../assets/BuildImages/flutterwave.svg";
// import Percept from "../../assets/BuildImages/percept.png";
import PerceptIcon from "../../assets/BuildImages/percept-icon.png";
import { BiTime } from "react-icons/bi";

const Build = () => {
  return (
    <section className='max-w-6xl px-5 mx-auto'>
      <div className='py-10'>
        <p className='text-2xl md:text-4xl lg:text-6xl max-w-lg font-normal font-dpsans'>
          Build for the future of digital finance.
        </p>
        <p className='text-lg py-4 font-dmSans md:max-w-sm font-medium'>
          Bring tomorrow's solutions to life, with our customer-focused
          solutions, today.
        </p>
      </div>

      <div className='rounded-xl my-5 pl-6 md:pl-12 md:pt-10 min-h-[500px] connectbg border'>
        <img src={ConnectIcon} alt='' className='py-7' />
        <p className='text-white text-2xl font-medium'>Connect</p>
        <p className='text-white py-4 font-medium max-w-xs'>
          Securely access financial accounts for statements, transactions, and
          identity
        </p>
        <button className='bg-button  py-3 px-2 rounded-lg my-4 text-white flex items-center justify-center font-dmSans font-bold text-base group max-w-fit'>
          Start with Connect
          <BiRightArrowAlt className='ml-2 group-hover:ml-3 transition-all' />
        </button>
      </div>

      <div className='flex flex-col md:flex-row w-full md:gap-4'>
        <div className='rounded-xl my-2 pl-6 md:pl-12 md:pt-10 min-h-[500px] lg:min-h-[700px] directbg border md:basis-2/4'>
          <img src={Arrowicon} alt='' className='py-7' />
          <p className='text-black text-2xl font-medium'>DirectPay</p>
          <p className='text-black py-4 font-dMsans max-w-[280px] '>
            Collect bank payments in your web or mobile app. No cards. No
            chargebacks
          </p>
          <button className='bg-button  py-3 px-2 rounded-lg my-4 text-white flex items-center justify-center font-dmSans font-bold text-base group max-w-fit'>
            Start with DirectPay
            <BiRightArrowAlt className='ml-2 group-hover:ml-3 transition-all' />
          </button>
          <div className='py-1 lg:px-4 bg-[#ebf5ff] rounded-full bg-opacity-80'>
            <p className='flex font-semibold'>
              In Partnership with{" "}
              <span className='scale-[.7]'>
                {" "}
                <img src={FlutterWave} alt='' />
              </span>{" "}
            </p>
          </div>
        </div>

        <div className='rounded-xl my-2 pl-6 md:pl-12 md:pt-10 min-h-[500px] lg:min-h-[700px] perceptbg border md:basis-2/4'>
          <img src={PerceptIcon} alt='' className='py-7' />
          <p className='text-white text-2xl font-medium'>Percept</p>
          <p className='text-white py-4 font-medium max-w-[320px] '>
            Money operations and reconciliation for all your corporate accounts,
            in one dashboard
          </p>
          <button className='bg-button  py-3 px-2 rounded-lg my-4 text-white flex items-center justify-center font-dmSans font-bold text-base group max-w-fit'>
            Request access
            <BiTime className='ml-2 group-hover:ml-3 transition-all' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Build;
