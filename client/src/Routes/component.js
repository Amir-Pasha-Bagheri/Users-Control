import Homepage from '../pages/Homepage/homepage'
import Login from '../pages/LogIn/Login'
import Signin from '../pages/SignIn/Signin'
import Account from '../pages/Account/Account'

const homepage = () =>{
    return <Homepage/>
}

const login = () =>{
    return <Login/>
}

const signin = () =>{
    return <Signin/>
}

const account = () =>{
    return <Account/>
}

const notFound = () =>{
    return <p>Not Found</p>
}

export{
    homepage,
    login,
    signin,
    account,
    notFound
}