import assets from "./assets"

const header_links_data = [
    {
        id: 1,
        link: "/",
        text: "Home"
    },
    {
        id: 2,
        link: "/about",
        text: "About Us"
    },
    {
        id: 3,
        link: "/features",
        text: "Features"
    },
    {
        id: 4,
        link: "/pricing",
        text: "Pricing"
    },
    {
        id: 3,
        link: "/faq",
        text: "FAQ"
    },
    {
        id: 3,
        link: "/blog",
        text: "Blog"
    },
]

const how_we_work_data = [
    {
        id: 1,
        img:  assets.ColoredBox1 ,
        heading: "Strategy",
        text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
    },
    {
        id: 2,
        img: assets.ColoredBox2 ,
        heading: "Wireframing",
        text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
    },
    {
        id: 3,
        img: assets.ColoredBox3 ,
        heading: "Design",
        text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
    },
    {
        id: 4,
        img: assets.ColoredBox4 ,
        heading: "Development",
        text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
    }
]

const feature_box_data =[
    {
        id:1,
        img: assets.box_Icon_1,
        heading:"Uses Client First",
        paragraph:"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    },
    {
        id: 2,
        img: assets.box_Icon_2,
        heading: "Two Free Revision Round",
        paragraph: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    },
    {
        id: 3,
        img: assets.box_Icon_3,
        heading: "Template Customization",
        paragraph: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    },
    {
        id: 4,
        img: assets.box_Icon_4,
        heading: "24/7 Support",
        paragraph: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    },
    {
        id: 5,
        img: assets.box_Icon_5,
        heading: "Quick Delivery",
        paragraph: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    },
    {
        id: 6,
        img: assets.box_Icon_6,
        heading: "Hands-on approach",
        paragraph: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    },
]

const review_data =[
    {
        id: 1,
        img: assets.review_1,
        name: "name",
        title: "title",
        quote:"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    },
    {
        id: 2,
        img: assets.review_2,
        name: "name",
        title: "title",
        quote: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, laudantium.faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
    },
    {
        id: 3,
        img: assets.review_3,
        name: "name",
        title: "title",
        quote: "faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed."
    },
]

const faq_data =[

     {
        id: 1,
        no: "01",
        question: "How much time does it take?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        no: "02",
        question: "What is your class naming convention?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        no: "03",
        question: "How do you communicate?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 4,
        no: "04",
        question: "I have a bigger project. Can you handle it?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 5,
        no: "05",
        question: "What is your class naming convention?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]

const blog_data = [
    {
        id: 1,
        img: assets.blog_1,
        date: "13 Oct 2023",
        title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        summary: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
    },
    {
        id: 2,
        img: assets.blog_2,
        date: "23 Oct 2023",
        title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        summary: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
    },
    {
        id: 3,
        img: assets.blog_3,
        date: "3 Nov 2023",
        title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        summary: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
    },
]

export default {
    header_links_data,
    how_we_work_data,
    feature_box_data,
    review_data,
    faq_data,
    blog_data
}