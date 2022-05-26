import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import Register from './screens/auth/register'
import Login from './screens/auth/login'
import NotesIndex from './screens/notes/index'
import UserEdit from './screens/users/edit'

import PrivateRouter from './components/auth/private_router';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/register' element={<Register />}></Route>
                    
                    <Route exact path='/login' element={<Login />}></Route>
                    
                    <Route element={<PrivateRouter />}>
                        <Route exact path='/notes' element={<NotesIndex />} />
                    </Route>
                    <Route element={<PrivateRouter />}>
                        <Route exact path='/users/edit' element={<UserEdit />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;