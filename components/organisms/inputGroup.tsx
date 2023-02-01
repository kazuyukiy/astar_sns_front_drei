import type { DIspatch, FC } from "react";

import { BigImput } from "../atoms/bigInput";
import { CloseButton } from "../atoms/closeButton";
import { SmallInput } from "../atoms/smallInput";
import { SubmitButton } from "../atoms/submitButton";

type Props = {
     message: string;
     submit: (event: any) => Promise<void>;
     afterOpenFn: Dispatch<React.SetStateAction<boolean>>;
};

export const ImputGroup: FC<Props> = (props: Props) => {
       return (
       	      <form
		onSubmit={props.submit}
		classname="h-1/2 bg-gray-200 flex flex-col items-center justify-start"
	      >
		<div className="font-bold text-2xl pt-4">input post info!</div>
		<SmallInput title="Image URL" name="imgUrl" />
		<BigInput title="Description" name="description" />
		<div className="flex flex-row space-x-1">
		     <CloseButton afterOpenFn={proops.afterOpenFn} />
		     <SubmitButton message="Post" />
		</div>
       	      </form>
       );
};

