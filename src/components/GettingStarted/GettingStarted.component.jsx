import { gettingStartedUno , gettingStartedDos } from "../../constants/static";
import { FiArrowUpRight } from "react-icons/fi";

const GettingStarted = () => {


    return ( 
        <section className="getstartedbg">
            <div className="max-w-6xl mx-auto px-5 md:px-14 lg:px-0">
            <h2 className="text-white text-3xl pt-32 font-dpsans font-medium pl-5  md:text-5xl lg:text-6xl lg:mb-20" >Getting started</h2>
            <div className="px-5">
            {
                gettingStartedUno.map((item) => (
                        <div key={item.id} className="bg-white px-5 mt-14 rounded-xl flex flex-col xl:flex-row">
                             <div className="pt-8 flex flex-col justify-center items-center xl:basis-2/4 xl:items-start xl:px-10 xl:py-16">
                                <img src={item.icon} alt="" />
                                <h2 className="text-3xl text-center font-medium font-dpsans pt-5 md:text-4xl xl:text-6xl xl:text-left md:py-6">{item.title}</h2>
                                <a href="#api" className="flex items-center justify-center text-button text-xl font-medium pt-8 ">{item.link}<FiArrowUpRight className="ml-1"/> </a>
                             </div>
                            <div className="mt-14 md:basis-2/4 flex justify-center xl:pt-20">
                            <img src={item.img} alt=""  className=""/>
                            </div>
                        </div>
                    
                ))
            }
            </div>
            <div className="flex flex-col md:flex-row px-5 gap-4">
                {
                 gettingStartedDos.map((item) => (
                 <div key={item.id} className="bg-white rounded-lg flex items-center justify-center flex-col md:basis-1/3 md:mt-4 md:mb-28 md:py-14 md:px-4 md:items-start xl:px-10">
                    <img src={item.icon} alt="" className="py-6" />
                    <h2 className="text-2xl text-center md:text-start font-medium font-dpsans">{item.title} </h2>
                    <a href="#" className="flex items-center justify-center text-button text-xl font-medium py-4">{item.link}  <FiArrowUpRight /> </a>
                 </div>
            ))
                 }
            </div>
            </div>
        </section>
     )
}
 
export default GettingStarted; 