import logo from "./logo.svg";
import logo_dark from "./logo_dark.svg";
import cross_icon from "./cross_icon.svg";
import menu_icon from "./menu_icon.svg";
import star_icon from "./star_icon.svg";
import left_arrow from "./left_arrow.svg";
import right_arrow from "./right_arrow.svg";
import header_img from "./header_img.png";
import brand_img from "./brand_img.png";
import project_img_1 from "./project_img_1.jpg";
import project_img_2 from "./project_img_2.jpg";
import project_img_3 from "./project_img_3.jpg";
import project_img_4 from "./project_img_4.jpg";
import project_img_5 from "./project_img_5.jpg";
import project_img_6 from "./project_img_6.jpg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import profile_img_3 from "./profile_img_3.png";
import profile_img_4 from "./profile_img_4.jpg";
import broker from "./broker.jpg";

export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  left_arrow,
  right_arrow,
};

export const projectsData = [
  {
    title: "Luxury 2 BHK Apartment",
    price: "AED 1,250,000",
    location: "Dubai Marina",
    image: project_img_1,
  },
  {
    title: "Modern Family Villa",
    price: "AED 3,900,000",
    location: "Palm Jumeirah",
    image: project_img_2,
  },
  {
    title: "Sea View Penthouse",
    price: "AED 8,500,000",
    location: "Jumeirah ",
    image: project_img_3,
  },
  {
    title: "Affordable Apartment",
    price: "AED 450,000",
    location: "Dubai Silicon",
    image: project_img_4,
  },
  {
    title: "Premium Residential Plot",
    price: "AED 2,100,000",
    location: "Arabian Ranches",
    image: project_img_5,
  },
  {
    title: "Commercial Office Space",
    price: "AED 5,750,000",
    location: "Business Bay",
    image: project_img_6,
  },
];

export const testimonialsData = [
  {
    name: "Gowhar Qadir",
    title: "Doctor",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "Faiq Khan",
    title: "Engineer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "Bilal Sheikh",
    title: "Business Man",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "Asim Tariq",
    title: "Teacher",
    image: profile_img_4,
    alt: "Portrait of James Washington",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
];

export const about = [
  {
    num: "10+",
    task: "Years in Real Estate",
  },
  {
    num: "500+",
    task: "Properties Sold",
  },
  {
    num: "300+",
    task: "Happy Clients",
  },
  {
    num: "150+",
    task: "Active Listings",
  },
];

export const brokersData = [
  {
    id: 1,
    name: "Ahmed Khan",
    experience: "8 Years",
    area: "Dubai Marina",
    phone: "+971 55 123 4567",
    email: "ahmed@broker.ae",
    image: broker,
  },
  {
    id: 2,
    name: "Sara Mohammed",
    experience: "5 Years",
    area: "Palm Jumeirah",
    phone: "+971 52 765 4321",
    email: "sara@broker.ae",
    image: broker,
  },
  {
    id: 3,
    name: "Omar Ali",
    experience: "10 Years",
    area: "Business Bay",
    phone: "+971 56 998 7766",
    email: "omar@broker.ae",
    image: broker,
  },
  {
    id: 4,
    name: "Fatima Hassan",
    experience: "6 Years",
    area: "Jumeirah Beach Residence",
    phone: "+971 50 443 2211",
    email: "fatima@broker.ae",
    image: broker,
  },
  {
    id: 5,
    name: "Khalid Al Mansoori",
    experience: "12 Years",
    area: "Downtown Dubai",
    phone: "+971 55 777 8899",
    email: "khalid@broker.ae",
    image: broker,
  },
  {
    id: 6,
    name: "Aisha Rahman",
    experience: "7 Years",
    area: "Arabian Ranches",
    phone: "+971 52 333 6677",
    email: "aisha@broker.ae",
    image: broker,
  },
  {
    id: 7,
    name: "Zaid Abdullah",
    experience: "9 Years",
    area: "Dubai Hills Estate",
    phone: "+971 56 222 9988",
    email: "zaid@broker.ae",
    image: broker,
  },
  {
    id: 8,
    name: "Mariam Saeed",
    experience: "4 Years",
    area: "Jumeirah Lakes Towers",
    phone: "+971 50 111 2233",
    email: "mariam@broker.ae",
    image: broker,
  }
];
