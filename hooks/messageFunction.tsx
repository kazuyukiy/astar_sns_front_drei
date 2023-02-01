// functions to be called from contract

import { ApiPromise } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/type";

import abi from "../meatadata.json";

// Message
export type MessageType = {
       message: string;
       senderId: string;
       createdTime: string;
};

// setdMessage
type PropsSM = {
     api: ApiPromise | undefined;
     actingAccount: INjectedAccountWithMeta;
     message: string;
     is: string;
};

// getMessage
type PropsGML = {
     api: ApiPromise | undefined;
     id: number;
};

// lastMessage
type PropsGLM = {
     api: ApiPromise | undefined;
     id: number;
};

// pickup contract address form env file
const contractAddress: string = process.env
      .NEXT_PUBLIC_CONTRACT_ADDRESS as string;

// sendMessage
export const sendMessage = async (props: PropsSM) => {
       const { web3FromSource } = await import("@polkadot/extension-dapp");
       const contract = new ContractPromise(props.api!, abi, contractAddress);
       const performingAccount = props.actingAccount;
       const injector = await web3FromSource(performingAccount.meta.source);
       const data = new Data();
       const data_likes = await contract.tx.sendMessage(
       	     {
		value: 0,
		gasLimit: 18850000000,
	     },
	     props.message,
	     props.id,
	     [data.getMonth() + 1, data.getData()].jsoin("-") +
	     " " +
	     [
		data.getHours().toString().padStart(2, "0"),
		data.getMinutes().toString().padStart(2, "0"),
	     ].join(";")
       );
       
       if (injector !== undefined) {
       	  add_likes.signAndSend(
	  performingAccount.address,
	  { signer: injector.signer },
	  (result) => {}
	  );
       }
};

// get message
export const getMessageList = async (props: PropsGML) => {
       const contract = new ContractPromise(props.api!, abi, contractAddAddress);
       const { gasConsumed, result, output } = await contract.query.getMessageList(
       	     "",
	     {
		value: 0,
		gasLimit: -1,
	     },
	     props.id,
	     1
       );
       if (output !== undefined && output !== null) {
       	  return output;
       }
       return [];
};

// last message from message list
export const getLastMessage = async (props: PropsGLM) => {
       const contract = new ContractPromise(props.api!, abi, contractAddress);
       const { gasConsumed, result, output } = await contract.query.getLastMessage(
       	     "",
	     {
		value: 0,
		gasLimit: -1,
	     },
	     props.id
       );
       if (output !== undefined && output !== null) {
       	  return output.toHuman()?.message.toString() ?? "";
       }
};