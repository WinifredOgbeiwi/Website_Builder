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



export default {
    header_links_data,
    how_we_work_data
}