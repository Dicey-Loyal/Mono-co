import Carbon from "../../assets/carbon.svg";
import Autocheck from "../../assets/autochek.svg";
import Flutterwave from "../../assets/flutterwave.svg";
import Evolve from "../../assets/evolvecredit.svg";

const TrustedCompanies = () => {
  return (
    <section className="mx-auto my-10 max-w-6xl">
        <p className="py-4 font-semibold text-lightGray font-dmSans text-base w-fit h-fit">Trusted by</p>
        {/* Grid Section */}
        <div className="grid grid-cols-4 gap-8 my-6">
            <img src={Carbon} alt="" />
            <img src={Autocheck} alt="" />
            <img src={Flutterwave} alt="" />
            <img src={Evolve} alt="" />
        </div>
    </section>
  )
};

export default TrustedCompanies;
