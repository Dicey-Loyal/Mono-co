import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../../snippets/Buttons/Button";
import Heroimg from "../../assets/mono-hero.png"

const Hero = () => {
    return ( 
        <section>
            {/* container */}
            <div className="w-[90%] md:w-[85vw] xl:w-[75vw] flex mx-auto">
               <div className="md:basis-2/4">


                 <div className="w-[250px] h-[40px] rounded-full bg-grey mt-[70px] md:mt-[100px] flex items-center xl:scale-110">
                    <button className="bg-button h-[70%] w-[60px] rounded-full ml-2">
                        <p className="text-white font-bold" >New</p>
                    </button>
                    <p className="text-black pl-2 font-medium text-sm flex items-center">Mono is live in Kenya! <AiOutlineArrowRight className="ml-2" /> </p>
                  </div>

                     {/* Hero title */}
                    <h2 className="text-4xl font-medium py-7 md:text-6xl md:max-w-md  md:py-12 md:font-bold md:leading-[70px] xl:text-[80px] xl:max-w-[1000px] xl:leading-[90px]">
                    Reliably access bank accounts
                    </h2>
                     {/* hero description */}
                    <p className="drop-shadow-2xl md:max-w-md md:font-normal md:text-lg xl:text-[28px] xl:max-w-[1000px] xl:leading-9 xl:py-1">
                    Mono helps businesses to access high-quality financial data and direct bank payments.
                    </p>

                    <div className="flex gap-3 xl:mt-6">
                        <button className="bg-button h-[50px] w-[185px] rounded-lg my-7 text-white flex items-center justify-center font-dmSans font-bold text-base group md:w-[210px] ">
                            Get started for free
                            <AiOutlineArrowRight className="ml-2 group-hover:ml-3"/>
                        </button>

                        <button className="bg-grey h-[50px] w-[150px] rounded-lg my-7 text-black flex items-center justify-center font-dmSans font-bold text-base group md:w-[180px]" >
                           Contact Sales
                            <AiOutlineArrowRight className="ml-2 group-hover:ml-3 "/>
                        </button>
                    </div>
               </div>

               <div className="md:flex md:basis-2/4 items-end justify-end">
                <img src={Heroimg} alt="hero image" className="w-[70%]" />
               </div>
            </div>
        </section>
     )
}
 
export default Hero;