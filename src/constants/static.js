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
import Testimonial3 from "../assets/testimonial3.webp";
import Testimonial4 from "../assets/testimonial4.webp";
import BusinessImg from "../assets/business.svg";
import InflowImg from "../assets/inflow-app.svg";
import RenMoney from "../assets/renmoney.svg";
import Lemonade from "../assets/lemonade.svg";
// getting started
import api from "../assets/getStartedImages/powerfulapi.svg";
import bag from "../assets/getStartedImages/sdks.svg";
import wallet from "../assets/getStartedImages/wallet.svg";
import support from "../assets/getStartedImages/slack.svg";
import apiresponse from "../assets/getStartedImages/apiresponse.svg";

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
    id: "why-mono",
    title: "Why Mono",
    img: HeartIcon,
  },
  {
    id: "pricing",
    title: "Pricing",
    img: PricingIcon,
  },
  {
    id: "demo",
    title: "See a Demo",
    img: MovieIcon,
  },
];
export const ourProducts = [
  {
    id: "connect",
    title: "Connect",
    img: Connect,
  },
  {
    id: "statement",
    title: "Statement Pages",
    img: Statement,
  },
  {
    id: "direct_pay",
    title: "DirectPay",
    img: DirectPay,
  },
  {
    id: "direct_pay_pages",
    title: "DirectPay Pages",
    img: DirectPayPages,
  },
  {
    id: "portal",
    title: "Portal",
    img: Portal,
  },
  {
    id: "percept",
    title: "Percept",
    img: Percepts,
  },
];

export const Learn = [
  {
    id: "about",
    title: "About Us",
    img: About,
  },
  {
    id: "blog",
    title: "Blog",
    img: Blog,
  },
  {
    id: "tutorials",
    title: "Tutorials",
    img: Tutorials,
  },
  {
    id: "coverage",
    title: "Coverage",
    img: Coverage,
  },
];
export const Developers = [
  {
    id: "overview",
    title: "Overview",
    img: Overview,
  },
  {
    id: "documentation",
    title: "Documentation",
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
  {
    id: 3,
    img: Quote,
    body: "We can trust Mono over 90% of the time which is better than our previous provider. This ease & reliability are our favourite things about Mono.",
    name: "Daniel Osineye",
    post: "Co-Founder/ CTO, Evolve Credit",
    test: Testimonial3,
  },
  {
    id: 4,
    img: Quote,
    body: "Migrating to Mono was seamless... The simplicity and stability of the Mono SDKs are top-notch.",
    name: "Peter Olusesan",
    post: "CEO, Inflow Finance",
    test: Testimonial4,
  },
];

export const gettingStartedUno = [
  {
    id: 1,
    icon: api,
    title: "Powerful APIs and easy-to-use resources",
    link: "Read our API Docs",
    img: apiresponse,
  },
];

export const gettingStartedDos = [
  {
    id: 2,
    icon: bag,
    title: "Plug-and-play SDKs",
    link: "Explore our SDKs",
  },
  {
    id: 3,
    icon: wallet,
    title: "Beautiful seamless UX",
    link: "See a demo",
  },
  {
    id: 4,
    icon: support,
    title: "Always-on support",
    link: "Join Us On Slack",
  },
];
export const BUSINESS_CONTENT = [
  {
    id: 1,
    title: "Carbon's personalized loan offers",
    subtitle:
      "Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.",
    body: "Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes. They get cash flow on the accounts for up to 12 months, all seamlessly without writing a single line of code.",
    link: "Read more about Statement Pages",
    img: BusinessImg,
  },
  {
    id: 2,
    title: "Inflow's Personal Finance Manager",
    subtitle:
      "Inflow Finance, using Mono Connect, allows thousands of users to understand and manage their finances across multiple accounts all in one place.",
    body: "Just by linking their financial accounts to the Inflow app using Mono, Inflow's users can now get a better view of their financial health by monitoring real-time balances and transactions across accounts, create budgets, and get personal insights on their spending habits.",
    link: "Read more about Connect",
    img: InflowImg,
  },
  {
    id: 3,
    title: "Renmoney's secure onboarding",
    subtitle:
      "Renmoney needed to streamline the verification of new users during onboarding.",
    body: "Using Mono Connect, Renmoney is able to verify users' account information in seconds by having them link their financial accounts.",
    link: "Read more about Connect",
    img: RenMoney,
  },
  {
    id: 4,
    title: "Lemonade Finance's cross-border transfers",
    subtitle: "",
    body: "Lemonade finance makes it easy to send and receive money from Nigeria, Kenya, Ghana, Canada, and the UK. Using DirectPay, Lemonade enables its users to make secure direct cash deposits to be transferred to the country of their choice.",
    link: "Read more about Connect",
    img: Lemonade,
  },
];
