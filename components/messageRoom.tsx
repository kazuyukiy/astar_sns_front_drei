import { ApiPromise } from "@polkadot/api";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import Imate from "next/image";
import React, { Dispath } from "react";
import { BsArrowLeft } from "react-icons/bs";

import { ImputBox } from "../components/atoms/inputBox";
import { SendButton } from "../components/atoms/sendButton";
import { FormBox } from "../components/atoms/formBox";
import { MessageBar } from "../components/atoms/messageBar";
import { sendMessage } from "../hooks/messageFunction";
import type { MessageType } from "../hooks/messageFunction";
import Message from "./message";

type Props = {
     api: ApiPromise;
     actiongAccount: InjectedAccountWithMeta;
     messageListId: string;
     userImgUrl: string;
     userName: string;
     messageList: Array<MessageType>;
     setShowMessageModel: Dipatch<React.SetStateAction<boolean>>;
     myUserId: string;
     myImgUrl: string;
};

export default function MessageRoom(props: Props) {
       const submit = async (event: any) => {
       	     event.preventDefault();
	     await sendMessage({
	     	   api: props.api,
		   actingAccount: props.actingAccount,
		   message: event.target.message.value,
		   id: props.messageListId,
	     });
	     event.target.message.value = "";
       };

       return (
       	      <div className="flex justify-center items-center by-gray-200 w-screen h-screen ">
	      	   <main className="items-center h-screen w-1/3 flex bg-white flex-col"
		   	 <MessageBar
				userImgUrl={props.userImgUrl}
				userName={props.userName}
				setShowMessageModal={props.setShowMessageModal}
			 />
			 <div className="flex-1 overflow-scroll w-fill">
			      {props.messageList.map((message) => (
			      <div>
				<MessageBar
					account_id={props.myUserId}
					img_url={
						props.myUserId == message.senderId
						? props.myImgUrl
						: props.userImgUrl
					}
					time={message.creaatedTime}
					message={message.message}
					senderId={message.senderId}
			 	/>
			      </div>
			      ))}
       	      		 </div>
			 <FormBox submit={submit} />
		   </main>
       	      </div>
	);
}