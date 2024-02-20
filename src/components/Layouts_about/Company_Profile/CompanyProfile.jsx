import React from "react";

const CompanyProfile = () => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-semibold font-mono text-center">
        this is the <span className="text-blue-800 ">company profile</span>
      </h1>
      <div className="flex justify-center w-full mt-10">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 max-w-screen-lg gap-10">
        <div className="md:col-start-1 lg:col-start-auto">
            <img src="/image/company.png" alt="" />
          </div>
          <div className="">
            <h1 className="text-3xl font-semibold ml-5 lg:text-left md:text-center text-center">judul berita</h1>
            <div className="flex items-center mx-5">
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti aliquid ipsum consequatur optio, voluptatibus vitae
                exercitationem error non odit quisquam laudantium perferendis
                animi accusamus est, iure obcaecati. Consectetur expedita
                earum neque quaerat minus aut, eum pariatur ullam quidem
                consequatur accusantium odit optio aperiam maxime, ad nihil
                consequuntur ipsum corporis, temporibus blanditiis ipsa
                sapiente. Omnis quas veniam blanditiis non, eum a.lorem Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Id velit
                ipsa fugit ratione ducimus cum tempore non voluptas odio
                provident dolorum sit eveniet, eius ex corporis assumenda
                omnis voluptatem praesentium! Iste tempore excepturi facere
                nulla, placeat nihil sequi nesciunt! Exercitationem.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
