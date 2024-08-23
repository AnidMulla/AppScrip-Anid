
import { FaGooglePay } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa6";
import { FaApplePay } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";

export const acceptedCards = [
    {
        title: "Gpay",
        icon: <FaGooglePay size={"30px"} />,
        link: "#"
    },
    {
        title: "Master card",
        icon: <FaCcMastercard size={"30px"} />,
        link: "#"
    },
    {
        title: "Paypal",
        icon: <FaPaypal size={"30px"} />,
        link: "#"
    },
    {
        title: "American Express",
        icon: <FaCcAmex size={"30px"} />,
        link: "#"
    },
    {
        title: "Apple pay",
        icon: <FaApplePay size={"30px"} />,
        link: "#"
    },
    {
        title: "Amazon Pay",
        icon: <FaAmazonPay size={"30px"} />,
        link: "#"
    },
]