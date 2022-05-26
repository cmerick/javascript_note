import React, { useState } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import { Navigate } from 'react-router-dom';
import UsersService from '../../../services/user';

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [NavigateToRegister, setNavigateToRegister] = useState(false);
    const [NavigateToNotes, setNavigateToNotes] = useState(false);
    const [error, setError] = useState(false);

    if (NavigateToRegister)
        return <Navigate to={{ pathname: "/register" }} />
    else if (NavigateToNotes)
        return <Navigate to={{ pathname: "/notes" }} />

    const HandleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const user = await UsersService.login({ email: email, password: password });
            setNavigateToNotes(true);
        } catch (error) {
            setError(true);
        }
    }

    return (
        <>
            <Column.Group centered>
                <form onSubmit={HandleSubmit}>
                    <Column size={12}>
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
                            <Control>
                                <Column.Group breakpoint="mobile">
                                    <Column>
                                        <a onClick={e => setNavigateToRegister(true)} className="adjust">Register</a>
                                    </Column>
                                    <Column><p>or</p></Column>
                                    <Column>
                                        <Button className='button link' >Login</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Help color="danger">Email or Password invalid</Help>}
                    </Column>
                </form>
            </Column.Group>
        </>
    )
}

export default LoginForm;