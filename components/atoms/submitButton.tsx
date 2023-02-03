import type { FC } from  "react";

type Props = {
     message: string;
};

export const SubmitButton: FC<Props> = (props: Props) => {
       return (
       	      <button
		className="rounded-3x1 h-10 w-32 bg-[#003AD0] text-white"
		type="submit"
	      >
       	      </button>
       );
};