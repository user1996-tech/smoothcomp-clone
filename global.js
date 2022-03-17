import PersonIcon from "/public/PersonIcon";
import GroupIcon from "/public/GroupIcon";
import ResultsIcon from "/public/ResultsIcon";
import Account from "./components/UserPage/Account";
import CoachManager from "./components/UserPage/CoachManager";
import OrganizerManager from "./components/UserPage/OrganizerManager";
import AffiliationManager from "./components/UserPage/AffiliationManager";

const global = {
  apiAddress: "http://localhost:3000/api",
  colors: {
    primary: "#1C1C1C",
    secondary: "#292929",
    third: "#2C3043",
    fourth: "#202838",
    green: "#78B328",
    blue: "#189DE0",
    grey: "#8D9799",
    grey2: "#F5F5F5",
    orange: "#DC854B",
    red: "#C24444",
  },
  image: {
    logo: "https://afbjj.smoothcomp.com/build/webpack/img/smoothcomp.ab4209420f45cd75201623e813a9c6a8.svg",
    logoafbjj: "https://smoothcomp.com/pictures/t/247473-1ln5/afbjj.jpg",
    header: "https://smoothcomp.com/pictures/t/248649-w95v/afbjj.jpg",
    eventbanner:
      "https://smoothcomp.com/pictures/t/1269577-b3og/australias-premier-event-2022.png",
    homebanner: "https://smoothcomp.com/img/hero.jpg",
    homeevent1:
      "https://smoothcomp.com/pictures/t/1304096-g10z/czech-championship-submission-only-2022.jpg",
    homeevent2:
      "https://smoothcomp.com/pictures/t/1357552-51kh/championnats-de-france-de-sambo-sportif-2022.jpg",
    homeevent3:
      "https://smoothcomp.com/pictures/t/1359709-acn1/grappling-industries-arnold-classic-2022.jpg",
    homeevent4:
      "https://smoothcomp.com/pictures/t/1359976-ks0i/the-revolution-45-2022.jpg",
    homefeature1:
      "https://smoothcomp.com/build/webpack/img/press/payment.afc121aa9b3ced67452bf0f6fd4dc728.jpg",
    homefeature2:
      "https://smoothcomp.com/build/webpack/img/press/brackets.1c6eccfd42852f3e2f6de75fe49d9ae9.jpg",
    homefeature3:
      "https://smoothcomp.com/build/webpack/img/press/running-schedule.5e27689d7dd793ac6f5f6a972d71c277.jpg",
    homefeature4:
      "https://smoothcomp.com/build/webpack/img/press/scoreboard-tv.3cc30af9deff195dc29b28aace827860.jpg",
  },
  loginOptions: [
    {
      label: "Log In",
      page: "/login",
    },
    {
      label: "Create account",
      page: "/register",
    },
  ],
  userOptions: [
    {
      title: "Account",
      icon: () => <PersonIcon className="h-5 w-5" />,
      page: () => <Account />,
      route: { pathname: "/user", query: { selected: "Account" } },
    },
    {
      title: "Coach manager",
      icon: () => <GroupIcon className="w-5 h-5" />,
      page: () => <CoachManager />,
      route: { pathname: "/user", query: { selected: "Coach manager" } },
    },
    {
      title: "Organizer manager",
      icon: () => <ResultsIcon className="w-5 h-5" />,
      page: () => <OrganizerManager />,
      route: { pathname: "/user", query: { selected: "Organizer manager" } },
    },
    {
      title: "Affiliation manager",
      icon: () => null,
      page: () => <AffiliationManager />,
      route: { pathname: "/user", query: { selected: "Affiliation manager" } },
    },
  ],
  emailRegex:
    /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
};

export { global };
