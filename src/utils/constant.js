import dashboardIcon from "../../assests/dashboard-icon.svg";
import transactionIcon from "../../assests/transaction-icon.svg";
import scheduleIcon from "../../assests/schedule-icon.svg";
import userIcon from "../../assests/user-icon.svg";
import settingIcon from "../../assests/setting-icon.svg";
import likeIcon from "../../assests/likes-icon.svg";
import user from "../../assests/user.svg";
import revenueIcon from "../../assests/revenue-icon.svg";
import totalTransactionIcon from "../../assests/total_transactions_icon.svg";

export const sideBarItems = [
  { title: "Dashboard", icon: dashboardIcon },
  { title: "Transaction", icon: transactionIcon },
  { title: "Schedule", icon: scheduleIcon },
  { title: "Users", icon: userIcon },
  { title: "Settings", icon: settingIcon },
];

export const extraDetailsCard = [
  {
    title: "Total Revenues",
    icon: revenueIcon,
    price: "$2,129,430",
    color: "#DDEFE0",
  },
  {
    title: "Total Transactions",
    icon: totalTransactionIcon,
    price: "1,520",
    color: "#F4ECDD",
  },
  {
    title: "Total Likes",
    icon: likeIcon,
    price: "9,721",
    color: "#EFDADA",
  },
  {
    title: "Total Users",
    icon: user,
    price: "892",
    color: "#DEE0EF",
  },
];

export const pieChartDetails = [
  { title: "Basic Tees", color: "#98D89E", percent: "55%" },
  {
    title: "Custom Short Pants",
    color: "#F6DC7D",
    percent: "31%",
  },
  { title: "Super Hoodies", color: "#EE8484", percent: "14%" },
];

export const scheduleDetails = [
  {
    title: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    location: "at Sunset Road, Kuta, Bali",
    color: "#9BDD7C",
  },
  {
    title: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    location: "at Central Jakarta",
    color: "#6972C3",
  },
];
