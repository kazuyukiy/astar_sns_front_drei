import { useRouter } from "next/router";
import React, { useState } from "react";

import Footer from "./oganisms/footer";

export default function BottomNavigation(propos: any) {
       const router = useRouter();
       const [witchScreen, setWitchScreen] = useState(
       	     router.pathname.replace(/[/]/g, "")
       );

       return(
	<Footer selectedScreen={witchScreen} setSelectedScreen={setWitchScreen} />
       );
}
