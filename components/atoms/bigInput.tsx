import { FC } from "react"

type Pros = {
     title: string;
     name: string;
};

export const BigInput: FC<Pros> = (props: Props) => {
       return (
       	      <div className="flex flex-col items-start w-fill my-4">
	      	   <div className="mr-2 text-2xl ml-[32px]">{`${props.title}:`}</div>
		   <input
			id={props.name}
			name={props.name}
			type="text"
			className="w-64 h-32 bg-white flex ml-4"
		   />
       	      </div>
       );
};