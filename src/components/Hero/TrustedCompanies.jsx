import Carbon from "../../assets/carbon.svg";
import Autocheck from "../../assets/autochek.svg";
import Flutterwave from "../../assets/flutterwave.svg";
import Evolve from "../../assets/evolvecredit.svg";

const TrustedCompanies = () => {
  return (
    <section className="mx-auto my-10 max-w-6xl px-5 md:px-10">
        <p className="py-4 md:px-4 lg:px-0 font-semibold text-lightGray font-dmSans text-base w-fit h-fit">Trusted by</p>
        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:px-4 lg:px-0 my-6 mx-auto">
            <img src={Carbon} alt="" className="w-[100px] md:w-[170px]" />
            <img src={Autocheck} alt="" className="w-[100px] md:w-[170px]" />
            <img src={Flutterwave} alt="" className="w-[100px] md:w-[170px]" />
            <img src={Evolve} alt="" className="w-[100px] md:w-[170px]" />
        </div>
    </section>
  )
};

export default TrustedCompanies;
