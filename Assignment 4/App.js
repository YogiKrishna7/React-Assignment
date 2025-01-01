import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const Header = function () {
    return (
        <div className="header-div">
            <div>
                <h1 className="main-title">
                    <span className="orange">Planet</span> Foods
                </h1>
            </div>

            <nav className="main-nav">
                <ul className="navlist">
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>About</li>
                    </a>
                    <a href="#">
                        <li>Contact Us</li>
                    </a>
                </ul>
            </nav>
        </div>
    );
};

const RestaurantCard = function (props) {
    return (
        <div className="res-card">
            <div>
                <img src={props.r.imageUrl} className="res-logo" alt="Restaurant-logo" />
            </div>

            <div>
                <h3>{props.r.name}</h3>
                <h4>{props.r.cusines.join(", ")}</h4>
                <h4>Rating: {props.r.avgRating} ★</h4>
                <h4>Time to deliver: {props.r.deliveryTime}</h4>
            </div>
        </div>
    );
};

var res = [
    {
        name: "Pizza Hut",
        cusines: ["Pizza", "Pasta", "Italian", "Fast Food", "American"],
        avgRating: "4.6",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0000/2768/brand.gif?itok=be85KH4p",
    },
    {
        name: "Domino's Pizza",
        cusines: ["Pizza", "Fast Food"],
        avgRating: "4.5",
        deliveryTime: "25min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0019/0652/brand.gif?itok=ywYEWbrh",
    },
    {
        name: "McDonald's",
        cusines: ["Fast Food", "Burgers", "American"],
        avgRating: "4.2",
        deliveryTime: "20min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032020/logo.png?9yYM3KLE06MrRgPCDKxYRkGkI.gaQHHE&itok=h09KL590",
    },
    {
        name: "Burger King",
        cusines: ["Burgers", "Fast Food"],
        avgRating: "4.3",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0000/4199/brand.gif?itok=4EnhKK20",
    },
    {
        name: "KFC",
        cusines: ["Chicken", "Fast Food"],
        avgRating: "4.1",
        deliveryTime: "25min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012023/kfc.png?dxklM0jCOQ0hZ1YExlmHTgRFIkEo4Xhu&itok=mLhVA0m6",
    },
    {
        name: "Subway",
        cusines: ["Sandwiches", "Fast Food"],
        avgRating: "4.4",
        deliveryTime: "20min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0022/8002/brand.gif?itok=AHu9Vpr-",
    },
    {
        name: "Taco Bell",
        cusines: ["Mexican", "Fast Food"],
        avgRating: "4.3",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0001/9973/brand.gif?itok=aEurJ-mI",
    },
    {
        name: "Papa John's",
        cusines: ["Pizza", "Fast Food"],
        avgRating: "4.6",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0013/4594/brand.gif?itok=I4wLj_ls",
    },
    {
        name: "Chipotle",
        cusines: ["Mexican", "Burritos", "Healthy"],
        avgRating: "4.4",
        deliveryTime: "20min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052010/Chipotle.png?itok=dUeZ0k_L",
    },
    {
        name: "Wingstop",
        cusines: ["Wings", "American"],
        avgRating: "4.5",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022014/wingstop_logo.png?Qe7r0nkVfIR7wifllXVfyYbgeccmb1w2&itok=KGgnB4jn",
    },
    {
        name: "Shake Shack",
        cusines: ["Burgers", "American"],
        avgRating: "4.7",
        deliveryTime: "25min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042014/shakeshack1c.png?itok=Alw3sGnc",
    },
    {
        name: "Five Guys",
        cusines: ["Burgers", "American"],
        avgRating: "4.6",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062014/five_guys_0.jpg?itok=ErLrbaYG",
    },
    {
        name: "Dunkin' Donuts",
        cusines: ["Coffee", "Donuts", "Bakery"],
        avgRating: "4.2",
        deliveryTime: "15min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072016/untitled-1_42.png?itok=GvbeN5eT",
    },
    {
        name: "Starbucks",
        cusines: ["Coffee", "Bakery", "Snacks"],
        avgRating: "4.5",
        deliveryTime: "15min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032013/starbucks_2011_true_logo_0.png?itok=1avUKqJg",
    },
    {
        name: "Panera Bread",
        cusines: ["Bakery", "Healthy", "American"],
        avgRating: "4.4",
        deliveryTime: "20min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042014/panera_bread_4c.png?itok=LDwdRpma",
    },
    {
        name: "Papa Murphy's",
        cusines: ["Pizza", "Fast Food"],
        avgRating: "4.5",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112022/papa_murphys.png?PJknIyPhLQ5N_Q8tYUmPkqtXlIgzYvPm&itok=C70Xn29F",
    },
    {
        name: "Jersey Mike's",
        cusines: ["Sandwiches", "American"],
        avgRating: "4.4",
        deliveryTime: "25min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072011/jm-logo_1.png?itok=mG8wJJCO",
    },
    {
        name: "Nando's",
        cusines: ["Chicken", "Peri Peri"],
        avgRating: "4.6",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0014/8354/brand.gif?itok=IIF9_kEG",
    },
    {
        name: "Cheesecake Factory",
        cusines: ["American", "Desserts"],
        avgRating: "4.7",
        deliveryTime: "40min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0005/6415/brand.gif?itok=KRxMy5GM",
    },
    {
        name: "Olive Garden",
        cusines: ["Italian", "Pasta"],
        avgRating: "4.4",
        deliveryTime: "35min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122014/olive-garden-logo-redesign-2014_4762_0.png?itok=cm0iP5Oe",
    },
    {
        name: "Red Lobster",
        cusines: ["Seafood", "American"],
        avgRating: "4.5",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0000/2926/brand.gif?itok=eJba-kGa",
    },
    {
        name: "Applebee's",
        cusines: ["American", "Bar Food"],
        avgRating: "4.3",
        deliveryTime: "35min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0021/6335/brand.gif?itok=r-p9ZHCy",
    },
    {
        name: "Outback Steakhouse",
        cusines: ["Steakhouse", "Australian"],
        avgRating: "4.4",
        deliveryTime: "40min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102014/logo_outback.png?itok=dKkkYi4q",
    },
    {
        name: "IHop",
        cusines: ["Breakfast", "American"],
        avgRating: "4.1",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0001/9910/brand.gif?itok=0O3eDHHm",
    },
    {
        name: "Panda Express",
        cusines: ["Chinese", "Asian"],
        avgRating: "4.2",
        deliveryTime: "25min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0010/8217/brand.gif?itok=nKwfh7NR",
    },
    {
        name: "Wendy's",
        cusines: ["Fast Food", "Burgers"],
        avgRating: "4.3",
        deliveryTime: "20min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052012/wendys.ai-converted.png?itok=gcV7GU1N",
    },
    {
        name: "Sonic Drive-In",
        cusines: ["Fast Food", "American"],
        avgRating: "4.0",
        deliveryTime: "25min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0024/5332/brand.gif?itok=S_sqmCml",
    },
    {
        name: "Chick-fil-A",
        cusines: ["Chicken", "Fast Food"],
        avgRating: "4.8",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042013/chick-fil-a.png?itok=UvqtgDLP",
    },
    {
        name: "Cracker Barrel",
        cusines: ["Southern", "American"],
        avgRating: "4.2",
        deliveryTime: "45min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072011/cracker_barrel__old_country_store.jpeg?itok=qGcAgd7m",
    },
    {
        name: "Bojangles",
        cusines: ["Southern", "Chicken"],
        avgRating: "4.3",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0017/9229/brand.gif?itok=NpPNLKg5",
    },
    {
        name: "Zaxby's",
        cusines: ["Chicken", "American"],
        avgRating: "4.5",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0015/1272/brand.gif?itok=w38_uCWi",
    },
    {
        name: "TGI Fridays",
        cusines: ["American", "Bar Food"],
        avgRating: "4.2",
        deliveryTime: "35min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032014/0_2.ai-converted.png?itok=uJ6g9fod",
    },
    {
        name: "Sbarro",
        cusines: ["Pizza", "Italian"],
        avgRating: "4.1",
        deliveryTime: "20min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042018/untitled-2_299.png?8XlcNmIzkMQccLD8I05GWpI0nLjAJ_7j&itok=rKofeQbV",
    },
    {
        name: "Jack in the Box",
        cusines: ["Fast Food", "Burgers"],
        avgRating: "4.0",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102015/jack_in_the_box.png?itok=6HOY2svr",
    },
    {
        name: "Carl's Jr.",
        cusines: ["Burgers", "Fast Food"],
        avgRating: "4.3",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102011/untitled-1_0.jpg?itok=6OOqUBpa",
    },
    {
        name: "Tim Hortons",
        cusines: ["Coffee", "Bakery", "Snacks"],
        avgRating: "4.2",
        deliveryTime: "15min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0008/1900/brand.gif?itok=7JPejZbt",
    },
    {
        name: "Popeyes",
        cusines: ["Chicken", "Fast Food"],
        avgRating: "4.4",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0009/3817/brand.gif?itok=ZU4jgSro",
    },
    {
        name: "Baskin Robbins",
        cusines: ["Ice Cream", "Desserts"],
        avgRating: "4.5",
        deliveryTime: "20min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0023/9139/brand.gif?itok=HG0wlmNb",
    },
    {
        name: "Culver's",
        cusines: ["Burgers", "American"],
        avgRating: "4.6",
        deliveryTime: "30min",
        imageUrl:
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052013/culvers.png?itok=aJ6AFLDk",
    },
];

const Body = function () {
    return (
        <div className="body-div">
            {res.map((res) => {
                return <RestaurantCard r={res} key={res.name} />;
            })}
        </div>
    );
};

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 Plant Foods. All Rights Reserved.</p>
            <a href="#" target="_blank">
                Visit Our Website
            </a>
        </footer>
    );
};

const App = function () {
    return (
        <div className="app-root">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const htmlEle = document.getElementById("root");
const root = ReactDOM.createRoot(htmlEle);

root.render(<App />);
