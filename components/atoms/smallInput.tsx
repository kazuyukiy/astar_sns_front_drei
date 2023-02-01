import { FC } from "react";

type Props = {
     title: string;
     name: string;
};

export const SmallImput: FC<Props> = (props: Props) => {
       return (
       	      <div classname="flex flex-row justify-start my-4">
	      	   <div classname="mr-2 text-2x1">{`${props.title}:`}</div>
		   <input
			id={props.name}
			name={props.name}
			type="text"
			className="w-24 bg-white"
		   />
	      </div>
       );
};