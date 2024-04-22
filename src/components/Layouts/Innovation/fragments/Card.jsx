import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = (props) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const { CardTitle, CardDate, CardImage, CardDescription } = props;
  return (
    <div className="flex justify-center items-center mb-10 mx-10">
      <div
        data-aos="flip-right"
        className=" bg-[#F4F8FF]  lg:max-w-3xl  rounded-xl shadow-md overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:shrink-0 h-full">
            <img
              className="w-full h-full  md:w-full lg:w-48 sm:w-full aspect-square rounded-xl"
              src={`image/inovation.jpg`}
              alt="Team"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {CardTitle}
            </div>

            <div className="mt-2 text-gray-500 overflow-y-auto max-h-20  scrollbar scrollbar-thumb-slate-900 scrollbar-track-blue-100">
              {CardDescription} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi expedita laboriosam quas facere alias rerum quo ut! Id architecto reprehenderit cumque in? Unde suscipit alias numquam cum. Quasi vitae rem, esse magnam porro laborum magni quo deserunt facilis nulla, natus vero recusandae atque minima cupiditate ea aut sint dolor asperiores fuga excepturi laudantium tempore. Quasi tenetur inventore unde laboriosam explicabo perferendis cumque animi natus ad voluptate, ipsam porro facilis maiores accusamus, id eum. Quam sapiente saepe harum, itaque neque unde ipsam reiciendis temporibus accusantium a modi tempora eveniet aliquid dolorem.
            </div>
            <div className="">
              <span className="text-blue-600 ">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-blue-900 pr-2"
                />
                {CardDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
