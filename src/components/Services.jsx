import React from "react";

const Services  = () =>{

  const services=[
    {id: 1,title:"Membership organisation", description: "provides full automation of memebership renewals"
  ,image:"/src/assets/icons/member.png"}
  ]
  return(
     <div className="md:px-14 px-4 py-16 ma-w-screen-2xl mx-auto">
       <div className="text-center my-8">
        <h1 className="text-4xl text-neutralDGrey font-semibold mb-2">Clients</h1>
        <p className="text-neutralGrey">We have been working with these</p>
        <div className="my-12 flex flex-wrap justify-between items-center">
          <img src="/src/assets/icons/company1.jpg" alt=""/>
          <img src="/src/assets/icons/company2.png" alt=""/>
          <img src="/src/assets/icons/company3.jpg" alt=""/>
          <img src="/src/assets/icons/company4.png" alt=""/>
        </div>
       </div>

       <div className="mt-20 md:w-1/2 mx-auto text-center">
       <h1 className="text-4xl text-neutralDGrey font-semibold mb-2">Manage your entire community on a single system
       </h1>
        <p className="text-neutralGrey">Who is it suitable for?</p>
       </div>


     </div>
  );
    
};

export default Services;