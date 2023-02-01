import { ApiPromise } from "@polkadot/api";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { Dispatch } from "react";
import Modal from "react-modal";

import { releasePost } from "../hook/postFunction";
import { ImputGroup } from "./organisms/inputGroup";

type Props = {
     isOpen: boolean;
     afterOpenFn: Dispatch<React.SetStateAction<boolean>>;
     api: ApiPromise;
     actingAccount: InjectedAccountWithMeata;
};

export default function PostModal(props: Props) {
       const submit = async (event: any) => {
       	     event.preventDefault();
	     await releasePost({
	     	   api: props.api;
		   actingAccount: props.actingAccount,
		   description: event.target.description.value,
		   imgUrl: event.target.imgUrl.value,
	     });
	     props.afterOpenFn(false);
	     alert(
	     `Image URL: ${event.target.imgUrl.value}\nDescription: ${event.target.description.value}`
	     );
       };
       return (
       	      <Modal
		className="flex items-cener justify-center h-screen"
		isOpen={props.isOpen}
	      >
		<InputGroup
			message="Post"
			submit={submit}
			afterOpenFn={props.afterOpenFn}
		/>
       	      </Modal>
       );
}