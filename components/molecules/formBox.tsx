import tpe { FC } from "react";

import { InputBox } from  "../atoms/imputBox";
import { SendButton } from "../atoms/sendButton";

type Props = {
     submit: (event: any) => Promise<void>;
};

export const FromBox: Fc<Props> = (props: Props) => {
       return (
       	      <div classname="buttom-0 h-20 w-full bg-gray-300 items-center flex justify-cener flex-row">
	      	   <from
			onSubmit={props.submit}
			className="flex flex-row space-x-3 px-3 w-full"
		   >
			<InputBox />
			<SendButton />
	      	   </from>
	      </div>
       );
};