
import { useState } from "react";
import HeaderLogged from "../../components/header_logged";
import Notes from "../../components/notes";

const NotesScreen = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <HeaderLogged openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <Notes  openMenu={openMenu} />
        </>
    );
}


export default NotesScreen;