import React from 'react';
import starIcon from '../../assets/images/Star.png';
import {Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ProfessionalCard = ({professional}) => {
  const {name, photo, scientific, totalLeft, organization}= professional
  return (
    <div className='p-3 lg:p-5'>
      <div>
        <img src={photo} className='w-full h-[400px] rounded-[20px]' alt="" />
      </div>
      <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>
        {name}
      </h2>
      <div className='mt-2 lg:mt-4 flex items-center justify-between'>
        <span className='bg-[#a9e4a1] text-[#137f13] py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4
        lg:text-[16px] lg:leading-7 font-semibold rounded'>
          {scientific}
        </span>
      </div>
      <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
        <div>
      <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor'>
        +{totalLeft} left
      </h3>
      <p className='text-[14px] leading-6 font-[400] '>
        At {organization}
      </p>
    </div>
    <Link to='/professionals' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                flex items-center justify-center group hover:bg-[#137f13] hover:border-none">
                  <BsArrowRight className ="group-hover:text-white w-6 h-5"/>
                </Link>
    </div>
    </div>
  )
}

export default ProfessionalCard