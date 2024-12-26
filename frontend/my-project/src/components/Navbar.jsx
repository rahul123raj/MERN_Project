import { CgProfile } from "react-icons/cg";
import { IoIosCart } from "react-icons/io";
import { TfiSearch } from "react-icons/tfi";
import { AiFillDingtalkCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
    <div className=" h-28">
      <div className="h-3/5 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-between items-center" >
        <div className="h-3/4">
         <AiFillDingtalkCircle className="w-full h-full pl-5 " />
        </div>
        <div className="flex h-3/5">
          <input type="search" placeholder="Search" className="border-none h-full rounded-tl-md rounded-bl-md w-96 p-5 outline-none" />
          
            <TfiSearch className="h-full w-8 bg-white rounded-tr-md rounded-br-md  pr-3 cursor-pointer" />
        
        </div>
        <div className="flex">
          <IoIosCart className="h-3/4 w-14 pr-5"/>
        
          <CgProfile className="h-3/4  w-14 pr-5" />
        </div>
      </div>
      <div className="bg-gradient-to-l from-cyan-500 to-blue-500 h-2/5 flex justify-center items-center">
        
            <ul className="flex w-2/4 justify-between">
                <li><a href="">MEN</a></li>
                <li><a href="">WOMEN</a></li>
                <li><a href="">KIDS</a></li>
            </ul>
      
      </div>
    </div>
    </>
  )
}

export default Navbar