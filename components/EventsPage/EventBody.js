import React from "react";
import Link from "next/link";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { InformationCircleIcon } from "@heroicons/react/outline";
import GlobeIcon from "../../public/GlobeIcon";
import PhoneIcon from "../../public/PhoneIcon";
import EmailIcon from "../../public/EmailIcon";
import FacebookIcon from "../../public/FacebookIcon";
import InstagramIcon from "../../public/InstagramIcon";

const contactOptions = [
  {
    title: "Event website >>",
    icon: () => <GlobeIcon className="w-5 h-5 text-[#008FE1] inline mr-2" />,
  },
  {
    title: "Phone >>",
    icon: () => <PhoneIcon className="w-5 h-5 text-[#008FE1] inline mr-2" />,
  },
  {
    title: "E-mail >>",
    icon: () => <EmailIcon className="w-5 h-5 text-[#008FE1] inline mr-2" />,
  },
  {
    title: "Facebook >>",
    icon: () => <FacebookIcon className="w-5 h-5 text-[#008FE1] inline mr-2" />,
  },
  {
    title: "Instagram >>",
    icon: () => (
      <InstagramIcon className="w-5 h-5 text-[#008FE1] inline mr-2" />
    ),
  },
];

const entriesOptions = [
  {
    title: "Boys Gi",
    price: 69,
    description: "",
  },
  {
    title: "Girls Gi",
    price: 69,
    description: "",
  },
  {
    title: "Juvenile Boys Gi",
    price: 79,
    description: "16-17 years",
  },
  {
    title: "Juvenile Gils Gi",
    price: 79,
    description: "16-17 years",
  },
  {
    title: "Male Gi",
    price: 99,
    description: "18 years and above",
  },
  {
    title: "Female Gi",
    price: 99,
    description: "18 years and above",
  },
  {
    title: "Juvenile Boys No-Gi",
    price: 79,
    description: "16-17 years",
  },
  {
    title: "Juvenile Girls No-Gi",
    price: 79,
    description: "16-17 years",
  },
  {
    title: "Male No-Gi",
    price: 99,
    description: "18 years and above",
  },
  {
    title: "Female No-Gi",
    price: 99,
    description: "18 years and above",
  },
  {
    title: "Male Absolute Gi",
    price: 45,
    description: "",
  },
  {
    title: "Female Absolute Gi",
    price: 45,
    description: "",
  },
  {
    title: "Male Absolute No-Gi",
    price: 45,
    description: "",
  },
  {
    title: "Female Absolute No-Gi",
    price: 45,
    description: "",
  },
];

const EventBody = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mt-4 md:max-w-5xl md:mx-auto">
      <div className="mx-3 col-span-1 md:col-span-3">
        <div className="text-[#545454] bg-[#292929] inline-flex p-2 rounded-md hover:bg-gray-700 hover:text-white">
          Information
        </div>

        <p className="uppercase text-white text-3xl font-semibold mt-4">
          2021 ajcc - austratian national championship
        </p>

        <p className="text-white text-lg mt-4 line-h leading-5">
          Australian National Championship - The 2021 AJJC 6 STAR National
          Ranking Points - 54 Gold, 18 Silver, 6 Bronze.
        </p>

        <p className="text-white text-md font-bold uppercase mt-4">
          australia's premier event!
        </p>

        <p className="text-white text-md mt-4">
          The 2021 AJJC- Australian National Championship is Australia's premier
          Jiu Jitsu Event.
        </p>

        <p className="text-white text-md mt-4">
          Due to a Covid affected 2021 and considering the major importance of a
          National Competition, The 2021 AJJC has been scheduled for February
          2022.
        </p>

        <p className="text-white text-md mt-4">
          Opportunities to become a 2021 AJJC Australian National Champion are:
        </p>

        <p className="text-white text-md mt-4">
          Junior Male Gi, Junior Female Gi, Male Juvenile Gi, Female Juvenile
          Gi, Male Gi, Female Gi.
        </p>

        <p className="text-white text-md mt-4">
          Jevenile Male NoGi, Jevenile Female NoGi, Male NoGi, Female NoGi.
        </p>

        <p className="text-white text-md mt-4 font-semibold">
          Early bird entries close at Midnight on Thursday the 10th of February
          - Late and final entries (at a slighly higher fee) close at Midnight
          on Tuesday the 22nd of February.
        </p>

        <p className="text-white text-md mt-4">
          Last chance to change yourself out of a single fighter category to a
          different age or different weight is midnight on the 23rd of February.
        </p>

        <p className="text-white text-md mt-4">
          Anyone in a single fighter category after midnight on the 23rd of
          February will collect the gold medal without a fight.
        </p>

        <p className="text-white text-md mt-4 font-semibold uppercase">
          Preliminary Day Schedule
        </p>

        <p className="text-white text-md mt-4">
          SATURDAY: All Adult, Master Gi.
        </p>

        <p className="text-white text-md mt-4">
          SUNDAY: All Junior, Juvenile. All Adult, Master NoGi.
        </p>

        <p className="text-white text-md mt-4">
          ******* POTENTIAL FOR MASTER NOGI TO BE LATER AFTERNOON SATURDAY!
        </p>

        <p className="text-white text-md mt-4 uppercase font-bold">
          this 6 start event earns competitors national ranking poits - 54 gold,
          18 silver and 6 bronze.
        </p>

        <p className="text-white text-md mt-2">
          Go to{" "}
          <a href="https://www.afbjj.com" className="text-[#0032B0]">
            www.AFBJJ.com
          </a>{" "}
          {""}
          for further information.
        </p>

        <p className="text-white text-md mt-10 font-bold">
          Free commemorative competitors T-shirt is available while stocks last!
        </p>
      </div>

      <div className="col-span-1 lg:col-span-2 text-white mx-3">
        {/* Location */}
        <div className="py-3">
          {/* Location Title */}
          <div className="flex items-center w-full bg-[#3C3C3C] rounded-t-md py-3 px-5">
            <LocationMarkerIcon className="h-5 w-5 mr-2" />
            <p>Location</p>
          </div>

          {/* Location Description */}
          <div className="w-full bg-[#292929] py-3 px-5">
            <a
              href="https://www.google.com/maps?q=-37.8460186,144.9649671"
              className="text-[#008FE1] text-sm"
            >
              Melbourne Sports and Aquatic Centre >>
            </a>
            <p className="text-sm text-[#646464]">23 Aughtie Dr</p>
            <p className="text-sm text-[#646464]">
              Timezone: Australia/Melbourne
            </p>
          </div>

          {/* Location Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.7360178556896!2d144.9596953158455!3d-37.84306544349453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad667e27fe5b65b%3A0x7da260ae352a6392!2sMelbourne%20Sports%20Centres%20-%20MSAC!5e0!3m2!1sen!2sau!4v1646358022346!5m2!1sen!2sau"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            className="rounded-b-md"
          ></iframe>
        </div>

        {/* Contact */}
        <div className="py-3">
          {/* Contact Title */}
          <div className="flex items-center w-full bg-[#3C3C3C] rounded-t-md py-3 px-5">
            <InformationCircleIcon className="h-5 w-5 mr-2" />
            <p>Contact</p>
          </div>

          {/* Contact Description */}
          <div className="divide-y divide-black">
            {contactOptions.map((option, index) => {
              return (
                <div
                  className={`px-5 bg-[#292929] ${
                    index == contactOptions.length - 1 ? "rounded-b-md" : ""
                  }`}
                >
                  <a
                    href="https://www.google.com/maps?q=-37.8460186,144.9649671"
                    className="text-[#008FE1] text-sm flex items-center py-3"
                  >
                    {option.icon()}
                    {option.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Entries */}
        <div className="py-3">
          {/* Contact Title */}
          <div className="flex items-center w-full bg-[#3C3C3C] rounded-t-md py-3 px-5">
            <p>Entries</p>
          </div>

          <div className="divide-y divide-black">
            {entriesOptions.map((option, index) => {
              return (
                <div
                  className={`px-5 bg-[#292929] py-2 ${
                    index == entriesOptions.length - 1 ? "rounded-b-md" : ""
                  }`}
                >
                  <div className="text-sm flex items-center">
                    <p>{option.title}</p>{" "}
                    <span className="font-bold ml-2 py-1 px-2 text-xs bg-[#595D5E] rounded-full">
                      {option.price} AUD
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-[#797979]">
                      {option.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBody;
