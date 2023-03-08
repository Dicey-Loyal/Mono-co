import HeartIcon from "../assets/heart_icon.svg";
import PricingIcon from "../assets/pricing.svg";
import MovieIcon from "../assets/movie_icon.svg";
import Connect from "../assets/connect.svg";
import Statement from "../assets/statement-pages.svg";
import DirectPay from "../assets/directpay.svg";
import DirectPayPages from "../assets/direct-pay-pages.svg";
import Portal from "../assets/portal.svg";
import Percepts from "../assets/percept.svg";
import About from "../assets/about-us-icon.svg";
import Blog from "../assets/blog-icon.svg";
import Tutorials from "../assets/tutorials-icon.svg";
import Coverage from "../assets/product-icon.svg";
import Overview from "../assets/overview-icon.svg";
import Documentation from "../assets/docs-icon.svg";
import Quote from "../assets/quote.svg";
import Testimonial1 from "../assets/testimonial1.svg";
import Testimonial2 from "../assets/testimonial2.svg";

export const navLinks = [
  {
    id: "why-us",
    title: "Why Mono",
  },
  {
    id: "products",
    title: "Products",
  },
  {
    id: "learn",
    title: "Learn",
  },
  {
    id: "developers",
    title: "Developers",
  },
];

export const whyMono = [
  {
    id: 'why-mono',
    title: 'Why Mono',
    img: HeartIcon,
  },
  {
    id: 'pricing',
    title: 'Pricing',
    img: PricingIcon,
  },
  {
    id: 'demo',
    title: 'See a Demo',
    img: MovieIcon,
  },
];
export const ourProducts = [
  {
    id: 'connect',
    title: 'Connect',
    img: Connect,
  },
  {
    id: 'statement',
    title: 'Statement Pages',
    img: Statement,
  },
  {
    id: 'direct_pay',
    title: 'DirectPay',
    img: DirectPay,
  },
  {
    id: 'direct_pay_pages',
    title: 'DirectPay Pages',
    img: DirectPayPages,
  },
  {
    id: 'portal',
    title: 'Portal',
    img: Portal,
  },
  {
    id: 'percept',
    title: 'Percept',
    img: Percepts,
  },
];

export const Learn = [
  {
    id: 'about',
    title: 'About Us',
    img: About,
  },
  {
    id: 'blog',
    title: 'Blog',
    img: Blog,
  },
  {
    id: 'tutorials',
    title: 'Tutorials',
    img: Tutorials,
  },
  {
    id: 'coverage',
    title: 'Coverage',
    img: Coverage,
  }
];
export const Developers = [
  {
    id: 'overview',
    title: 'Overview',
    img: Overview,
  },
  {
    id: 'documentation',
    title: 'Documentation',
    img: Documentation,
  },
];

export const BUSINESS_LIST = [
  {
    id: "lending",
    title: "Lending",
  },
  {
    id: "financial",
    title: "Financial Management",
  },
  {
    id: "account",
    title: "Account Verification",
  },
  {
    id: "payment",
    title: "Payments",
  },
];

export const CARD_LIST = [
  {
    id: 1,
    img: Quote,
    body: "It's important to go with a data provider that inspires confidence in users to give consent to share their data; this is one of our favourite things about Mono.",
    name: "Barima Effah-Adjei",
    post: "Co-founder, Float",
    test: Testimonial1,
  },
  {
    id: 2,
    img: Quote,
    body: "The onboarding and integration process with Mono was smooth. Our Engineering and Product teams use the dashboard to oversee our statement collection process.",
    name: "Emmanuel Ogunsola",
    post: "Product Manager, Aella",
    test: Testimonial2,
  },
];

// getting started
import  api from "../assets/getStartedImages/powerfulapi.png";
import bag from "../assets/getStartedImages/sdks.png";
import wallet from "../assets/getStartedImages/wallet.png";
import support from "../assets/getStartedImages/slack.png";
import apiresponse from "../assets/getStartedImages/apiresponse.png";

export const gettingStartedUno = [
  {
    id : 1,
    icon : api,
    title : "Powerful APIs and easy-to-use resources",
    link : "read our API Docs",
    img : apiresponse
  },
]

export const gettingStartedDos = [
  {
    id : 2,
    icon : bag,
    title : "Plug-and-play SDKs",
    link : "explore our SDKs"

  },
  {
    id : 3,
    icon: wallet,
    title : "Beautiful seamless UX",
    link : "see a demo"
  },
  {
    id : 4,
    icon : support ,
    title : "Always-on support",
    link : "Join Us On Slack"
  },
]