import React, { useState } from 'react';
import { Button } from "rbx";
import UserService from '../../../services/user';
import { Navigate } from "react-router-dom";

function UsersDelete() {
    const [navigateToHome, setNavigateToHome] = useState(false);

    const deleteUser = async () => {
        if (window.confirm('Are you sure you wish to delete this account?')) {
            UserService.delete()
            setNavigateToHome(true)
        }
    }

    if (navigateToHome)
        return <Navigate to={{ pathname: "/" }} />

    return (
        <Button color="danger" onClick={() => deleteUser()}>
            Excluir conta
        </Button>
    )
}

export default UsersDelete;