import Homepage from '../pages/Homepage/homepage'
import Login from '../pages/LogIn/Login'
import Signin from '../pages/SignIn/Signin'

const homepage = () =>{
    return <Homepage/>
}

const login = () =>{
    return <Login/>
}

const signin = () =>{
    return <Signin/>
}

const notFound = () =>{
    return <p>Not Found</p>
}

export{
    homepage,
    login,
    signin,
    notFound
}