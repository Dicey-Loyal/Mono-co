import { gettingStartedUno , gettingStartedDos } from "../../constants/static";
import { FiArrowUpRight } from "react-icons/fi";

const GettingStarted = () => {


    return ( 
        <section className="getstartedbg">
            <div className="xl:max-w-[1280px] mx-auto">
            <h2 className="text-white text-3xl pt-28 font-dpSans font-medium pl-5 xl:text-7xl" >Getting started</h2>
            <div className="px-5">
            {
                gettingStartedUno.map((obj) => (
                        <div key={obj.id} className="bg-white px-5 mt-14 rounded-xl flex flex-col md:flex-row">
                             <div className="pt-8 flex flex-col justify-center items-center md:basis-2/4 md:items-start xl:px-10 xl:py-16">
                                <img src={obj.icon} alt="" />
                                <h2 className="text-3xl text-center font-medium font-dpsans pt-5 md:text-6xl md:text-left md:py-6">{obj.title}</h2>
                                <a href="#api" className="flex items-center justify-center text-button text-xl font-medium pt-8 ">{obj.link} <FiArrowUpRight className="ml-1" /> </a>
                             </div>
                            <div className="mt-14 md:basis-2/4 flex justify-center xl:pt-20">
                            <img src={obj.img} alt=""  className=""/>
                            </div>
                        </div>
                    
                ))
            };
            </div>
            <div className="flex flex-col md:flex-row px-5 gap-4">
                {
                 gettingStartedDos.map((objDos) => (
                 <div key={objDos.id} className="bg-white rounded-lg flex items-center justify-center flex-col md:basis-1/3 md:my-16 md:py-14 md:px-4 md:items-start xl:px-10">
                    <img src={objDos.icon} alt="" className="py-6" />
                    <h2 className="text-2xl text-center font-medium font-dpsans">{objDos.title} </h2>
                    <a href="#" className="flex items-center justify-center text-button text-xl font-medium py-4">{objDos.link}  <FiArrowUpRight /> </a>
                 </div>
            ))
                 }
            </div>
            </div>
        </section>
     )
}
 
export default GettingStarted; 