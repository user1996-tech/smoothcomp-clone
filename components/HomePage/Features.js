import React from "react";
import { global } from "../../global";

const options = [
  {
    title: "payment registration",
    subtitle: "Pay and get paid",
    description:
      "Smoothcomp is easy for both the organizer, coach and fighter. Online payments makes everything smooth so you can focus more on the game and less on the boring stuff.",
    image: global.image.homefeature1,
  },
  {
    title: "bracket generation",
    subtitle: "Let us generate that bracket for you",
    description:
      "With our unique engine for creating brackets, you can move, combine and create single, double, round robins and other common brackets. Time to say good bye to your old paper and Excel-solution",
    image: global.image.homefeature2,
  },
  {
    title: "running schedule",
    subtitle: "Stay updated, minute by minute",
    description:
      "Our drag & drop solution lets you schedule your tournament and distribute the categories even on your fighting areas. Smoothcomp automatically assigns each fight a matchnumber, a fighting area and a ETA for each fight. Everthing is updated in real time.",
    image: global.image.homefeature3,
  },
  {
    title: "scoreboard",
    subtitle: "The scoreboard all other scoreboards are talking about",
    description:
      "Our real time scoreboard works seamlessly with the bracket system. Connect it to the biggest screen you can find and everybody will feel like world champions.",
    image: global.image.homefeature4,
  },
];

const Features = () => {
  return (
    <div className={`bg-[#2C3043] text-white py-10`}>
      <div className="flex flex-col items-center">
        {/* Mobile Verion */}
        <div className="max-w-5xl mx-auto y-10 space-y-[70px] my-5 block md:hidden">
          {options.map((option, index) => (
            <div className="flex flex-col items-center space-y-4" key={index}>
              <img
                src={option.image}
                alt=""
                className="rounded-full h-[220px]"
              />
              <p className="font-bold text-xl uppercase text-center">
                {option.title}
              </p>
              <p className="font-semibold text-center text-lg">
                {option.subtitle}
              </p>
              <p className="text-center">{option.description}</p>
            </div>
          ))}
        </div>

        {/* Desktop Version */}
        <div className="max-w-5xl mx-auto hidden md:block">
          {options.map((option, index) => {
            const i = index % 2;
            return (
              <div
                className={`flex w-[600px] lg:w-[700px] bg-[${global.colors.fourth}]`}
                key={index}
              >
                <div
                  className={`flex-1 flex justify-end ${
                    i == 1 ? "order-2" : ""
                  }`}
                >
                  <img
                    src={option.image}
                    alt=""
                    className="object-fill w-[100%]"
                  />
                </div>

                <div className="flex-1">
                  <div className="h-full mx-5 lg:mx-10 flex flex-col space-y-5 justify-center">
                    <p className="font-bold text-2xl uppercase">
                      {option.title}
                    </p>
                    <p className="font-semibold text-md">{option.subtitle}</p>
                    <p className="text-left text-sm">{option.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className={`bg-[${global.colors.green}] text-white flex items-center justify-center rounded-md text-md py-2 px-3 my-10`}
        >
          See all our features
        </button>
      </div>
    </div>
  );
};

export default Features;
