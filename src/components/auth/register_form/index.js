import React, { useState } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import { Navigate, Link } from "react-router-dom";
import '../../../styles/custom_colors.scss';
import UsersService from '../../../services/user';


function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [NavigateToLogin, setNavigateToLogin] = useState(false);
    const [error, setError] = useState(false);

    const HandleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const user = await UsersService.register({name: name, email: email, password: password});
            setNavigateToLogin(true);
        } catch (error) {
            setError(true);
            error = 'Server Offline'
        }
    }

    if (NavigateToLogin == true)
        return <Navigate to={{ pathname: "/login" }} />

    return (
        <>
            <Column.Group centered>
                <form onSubmit={HandleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Name:</Label>
                            <Control>
                                <Input
                                    type="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                    name="name"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    name="email"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Password:</Label>
                            <Control>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    name="password"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control >
                                <Column.Group breakpoint="mobile">
                                    <Column>
                                        <Button className="link button">Register</Button>
                                    </Column>
                                    <Column><p>or</p></Column>
                                    <Column>
                                        <a onClick={e => setNavigateToLogin(true)} className="adjust">Login</a>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Help color='danger'>Failed to register.</Help>}
                    </Column>
                </form>
            </Column.Group>
        </>
    )
}

export default RegisterForm;
//onClick={e => setNavigateToLogin(true)}