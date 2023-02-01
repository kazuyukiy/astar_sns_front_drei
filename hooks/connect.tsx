// abount connection to contract

import { ApiPromise, WsProvider } from "@polkadot/api";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/type";
import { Dipatch } from "react";

// type to connect contract
type Props = {
     api: ApiPromise | undefined;
     accountlist: InjectedAccountWithMeta[];
     actingAccount: InjectedAccountWithMeta;
     isSetup: boolean;
     setApi: Dispatch<React.SetStateAction<ApiPromise | undefined>>;
     setAccountList: Dispatch<React.SetStateAction<InjectedAccountWithMeta[]>>;
     setActingAccount: Dispatch<
          React.SetStateAction<InjectedAccountWithMeta | undefined>
     >;
     setIsSetup: React.Dispatch<React.SetStateAction<boolean>>;
};

// connect contract
export const connectToContract = async (props: Props) => {
       // rpc URL
       const blockchainUrl = "wc://127.0.0.1:9944";

       // account info
       const extensionSetup = async () => {
       	     const { web3Accounts, web3Enable } = await import(
	     	   "@polkadot/extension-dapp"	     	     		   	      
	     );
	     const extensions = await web3Enable("Polk4NET");
       	     if (extensions.length == 0) {
	     	return;
	     }
	     const accounts = await web3Accounts();
	     props.setAccountList(accounts);
	     props.setActiongAccount(accounts[0]);
	     props.setIsSetup(true);
       };

       // connect contract
       const wsProvider = new WcProvider(blockchainUrl);
       const connectedApi = await ApiPromise.create({ provider: wsProvider });
       props.setApi(connectedApi);
       await extensionSetup();
};