import Image from "next/image";
import type { FC } from "react";

const AppLogo: FC = () => {
      return (
      	     <div className="flex-row flex item-center ml-[5px]">
	     	  <Image
			className="w-[50px] h-[50px]"
			src="/unchain_logo.png"
			alt="unchain_logo"
			width={30}
			height={30}
		  />
		  <Image
			className="w-[40px] h-[25px]"
			src="/cross_mark_2_logo-removebg.png"
			alt="corll_logo"
			width={30}
			height={30}
		  />
		  <Image
			className="w-[50px] h-[50px]"
			src="/Astar_logo.png"
			alt="astar_logo"
			width={30}
			height={30}
		  />
	     </div>
      );      
};

export default AppLogo;