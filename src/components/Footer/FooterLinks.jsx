import { FOOTER_LINKS } from "../../constants/static";

const FooterLinks = () => {
  return (
    <section className="py-16 max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
        {FOOTER_LINKS.map((item) => (
            <div
            key={item.title}
            className={`flex flex-col ss:my-0 my-1 min-w-[150px]`}
            >
            <h4 className="font-medium font-dmSans text-[15px] leading-[27px] text-[#5c5c5c]">
                {item.title}
            </h4>
            <ul className="list-none mt-4">
                {item.links.map((link, index) => (
                <li
                    key={link.name}
                    className={`font-medium font-dmSans text-[15px] leading-[25px] text-white hover:text-white cursor-pointer ${
                    index !== item.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                >
                    {link.name}
                </li>
                ))}
            </ul>
            </div>
        ))}
    </section>
  )
};

export default FooterLinks;
