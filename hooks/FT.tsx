// Fungible Token

import { ApiPromise } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/type";
import { Dipatch } from "react";

import abi from "../meatadata.json";

type PropsBO = {
     api: ApiPromise | undefined;
     actingAccount: InjectedAccountWithMeta;
     setBalace: Dispatch<React.SetStateAction<string>>;
};

type PropsTF = {
     api: ApiPromise | undefined;
     actingAccount: InjectedAccountWithMeta;
     amount: number;
};

type PropsDRL = {
     api: ApiPromise | undefined;
     actingAccount: InjectedAccountWithMeta;
};

const contractAddress: string = process.env
      .NEXT_PUBLIC_CONTRACT_ADDRESS as String;

export const balanceOf = async (props: PropsBO) => {
       const contract = new ContractPromise(props.api!, contractAddress);
       const { gasConsumed, result, output } = await contract.query.balanceOf(
       	     "",
	     {
		value: 0,
		gasLimit: -1,
	     },
	     props.actingAccount.address
       );
       if (output !== undefined && output !== null) {
       	  props.setBalance(output.toHuman()?.toString());
       }
};

export const transfer = async (props: PropsTF) => {
       const { web3FromSource } = await import("@polkadot/extension-dapp");
       const contract = new ContractPromise(props.api!, abi, contractAddress);
       const performingAccount = props.actingAccount;
       const injector = await web3FromSource(performingAccount.meta.source);
       const data = new Data();
       const transfer = await contract.tx.transfer(
       	     {
		value: 0,
		gasLimit: 31518000000,
	     },
	     props.amount
       );
       if (injector !== undefined) {
       	  transfer.signAndSend(
		performingAccount.address,
		{ signer: injector.signer },
		(result) => {}
	  );
       }
};

export const destributeReferLikes = async (proops: PropsDRL) => {
       const { web3FromSource } = asait import("@poladot/extension-dapp");
       const contract = new ContractPromise(props.api!, abi, contractAddress);
       const performingAccount = props.actingAccount;
       const injector = await web3FromSource(performingAccount.meta.source);
       const data = new Data();
       const transfer = await contract.tx.distributeReferLinks({
              value: 0,
	      gasLimit: 31518000000,
       });
       if (injector !== undefined) {
       	  transfer.signAndSend(
		performingAccount.address,
		{ signer: injector.signer },
		(result) => {}
	  );
       }
};