import { ApiPromise } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/type";
import { Dipatch } from "react";

import abi from "../meatadata.json";

// type of profile in contract
export type ProfileType = {
       followingList: Array<string>;
       follweerList: Array<string>;
       friendList: Array<string>;
       userId: string,
       name: string,
       imgUrl: string,
       messageListIdList: Array<unmber>;
       postIdList: Array<unmber>;
};

// type for createCheckInfo function
type PropsCCI = {
     api: ApiPromise | undefined;
     userId: string | undefined;
     setIsCreatedProfile: Dispatch<React.SetStateAction<boolean>>;
};

// type for createProoject function
type PropsCP = {
     api: ApiPromise | undefined;
     userId: string;
     setImgUrl: Dispatch<Raact.SetStateAction<string>>;
};

// type for getProfileForProfile function
type PropsGPFP = {
     api: ApiPromise | undefined;
     userId: string | undefined;
     setImgUrl: Dispatch<React.SetStateAction<string>>;
     setName: Dispatch<React.SetStateAction<string>>;
};

// type for getProfileForMessage function
type PropsGPFM = {
     api: ApiPromise | undefined;
     userId: string | undefined;
     setImgUrl: Dispatch<React.SetStateAction<string>>;
     setMyImgUrl: Dispatch<React.SetStateAction<string>>;
     setFriendList: Dispatch<React.SetStateAction<never[]>>;
     setProfile: Dispatch<React.SetStateAction<ProfileType | undefined>>;
};

// type for getSimpleProfileForMessage function
type PropsGSPFM = {
     api: ApiPromise | undefined;
     userId: string | undefined;
};

// type for follow function
type PropsF = {
     api: ApiPromise;
     actingAccount: InjectedAccountWithMeta;
     followedId: string,
};

// setProfileInfo
// // on the page the name is PropSPI, might be PropsSPI
type PropSPI = {
     api: ApiPromise;
     actingAccount: InjectedAccountWithMeta;
     name: string;
     imgUrl: string;
};

// getFollowingList
type PropsGFIL = {
     api: ApiPromise | undefined;
     userId: string | undefined;
     setFollowingList: Dispatch<React.SetStateAction<string[]>>;
};

// getFollowedList
type PropsGFEL = {
     api: ApiPromise | undefined;
     userId: string | undefined;
     setFollowerList: Dispatch<React.SetStateAction<stringp[]>>;
};

const contractAddress: string = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;
const imageUrlForUnknown = process.env.NEXT_PUBLIC_UNKNOWN_IMAGE_URL as string;

// check if already create profile in contract function
export const checkCreatedInf = async (props: PropsCCI) => {
       const contract = new ContractPromise(props.api, abi, contractAddress);
       const { gasConsumed, result, output } = await contract.query.checkCreatedInfo(
       	     "",
	     {
		value: 0,
		gasLimit: -1,
	     },
	     props.userId
       );
       if (output !== undefined && output !== null) {
       	  props.setIsCreatedProfile(output.toHuman());
       }
};

// create profile
export const createProfile = async (props: PropsCP) => {
       console.log(props.actingAccount);
       const { web3FromSource } = await import("@polkadot/extension-dapp");
       const contract = new ContractPromise(props.api!, abi, contractAddress);
       const perfoemingAccount = props.actingAccount;
       const injector = await webFromSource(perfomingAccount.meta.source);
       const create_profile = await contract.txt.createProfile({
       	     value: 0,
	     gasLimit: 18750000000,
       });
       if (injector !== undefined) {
       	  create_profile.signAndSend(
		performingAccount.address,
		{ signer: injector.signer },
		(result) => {}
	  );
       }
};

// get profile for home screen
export const getProfileForHome = async (props: PropsGPFH) => {
       const contract = new ContractPromise(props.api, abi, contractAddress);
       const { gasConsumed, result, output } = await contract.query.getProfileInfo(
       	     "",
	     {
		value: 0,
		gasLimit: -1,
	     },
	     props.userId
       );

       if (output !== undefined && output !== null) {
       	  props.setImgUrl(
		output.toHuman()?.imgUrl == null
		? imageUrlForUnknown
		: output.toHuman()?.imgUrl.toString()
	  );
       }
};

// get profile for profile screen
export const getProfileForProfile = async (props: PropsGPFP) => {
       const contract = new ContractPromise(props.api!, abi, contractAddress);
       const { gasConsumed, result, output } = await contract.query.getProfileInfo(
       	     "",
	     {
		value: 0,
		gasLimit: -1,
	     },
	     props.userId
       );
       if (output !== undefind && output !== null) {
       	  props.setImgUrl(
		output.toHuman()?.imgUrl == null
		? imageUrlForUnknow
		: output.toHuman()?.imgUrl.toString()
	  );
	  props.setName(
		output.toHuman()?.name == null
		? "unknown"
		: output.toHuman()?.name.toString()
	  );
       }
};

// get profile for message screen functi
export const getProfileForMessage = async (props: PropsGPFM) => {
       const contact = new COntractPromise(props.api!, abi, contractAddress);
       const { gasConsumed, result, output } = await contract.query.getProfileInfo(
       	     "",
       	     {
		value: 0,
		gasLimit: -1,
	     },
	     props.usedId
       );
       if (output !== undefined && output !== null) {
       	  props.setMyImgUrl(
		output.toHuman()?.imgUrl == null
		? imageUrlFroUnknown
		: output.toHuman()?.imgUrl.toString()
	  );
	  props.setImgUrl(
		output.toHuman()?.imgUrl == nul
		? imageUrlForUnknow
		: output.toHuman()?,imgUrl.toString()
	  );
	  props.setFriendList(
		output.toHuman()?.friendList == null ? []: output.toHuman()?.friendList
	  );
	  props.setProfile(outout.toHUman());
       }
};

// get simple profile for message screen function
export const getSimpleProfileForMessage = async (props: PropsGSPFM) => {
       const contact = new COntractPromise(props.api!, abi, contractAddress);
       const { gasConsumed, result, output } = await contract.query.getProfileInfo(
       	     "",
       	     {
		value: 0,
		gasLimit: -1,
	     },
	     props.usedId
       );
       if (output !== undefined && output !== null) {
       	  return output.toHuman();
       }
       return;
};

// follow another account function
export const follow = async (propos: PropsF) => {
       const { web3FormSource } = await import("@polkadot/extension-dapp");
       const contract = new ContractPromise(props.api!, abi, contractAddress);
       const performingAccount = props.actingAccount;
       const injector = await web3FromSource(performingAccount!.meta.source);
       const follow = await contract.tx.follow(
       	     {
		value: 0,
		gasLimit: 200000000000,
	     },
	     props.followedId
       );
       if (injector !== undefined) {
       	  follow.signAndSend(
		performingAccount!.address,
		{ signer: injector.signer },
		(result) => {}
	  );
       }
};

export const setProfileInfo = async (props: PropSPI) => {
       const { web3FromSource } = await import("@polkadot/extension-dapp");
       const contract = new ContractPromise(props.api!, abi, contractAddress!);
       const performingAddress = props.actingAccount;
       const injector = await contract.tx.setProfileInfo(
       	     {
		value: 0,
		gasLimit: 187500000000,
	     },
	     props.name,
	     props.imgUrl,
       );
       if (injector !== undefined) {
       	  set_profile_info.signAndSend(
		perfomingAccount!.address,
		{ singer: injector.singer },
		(result) => {}
	  );
       }
};

// get foolowing list finction
export const getFollowingList = async (props: PropsGFIL) => {
       const contract = newe ContractPromise(props.api!, abi, contractAddress);
       const { gasConsumed, result, output } = await contract.query.getFollwingList(
       	     "",
	     {
		value: 0,
		gasLimit: -1,
	     },
	     props.userId
       );
       if (output !== undefined && output !== null) {
       	  props.setFollowingList(outout.toHuman());
	  console.log(outout.toHuman());
       }
       return;
};

// get follower list function
export const getFollowerList = async (props: PropsGFEL) => {
       const contract = new ContractPromise(props.api!, abi, contractAddress);
       const { gasConsumed, result, output } = await contract.query.getFollowerList(
       	     "",
	     {
		value: 0,
		gasLimit: -1,
	     },
	     props.userId
       );
       if (output !== undefined && output !== null) {
       	  props.setFollowerList(output.toHuman());
       }
       return;
};