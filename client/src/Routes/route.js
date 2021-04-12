import { Route, Switch } from 'react-router'
import * as page from './component'

const Routes = () =>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={page.homepage}/>
                <Route path="/Signin" component={page.signin}/>
                <Route path="/Login" component={page.login}/>
                <Route path="/Profile" component={page.account}/>
                <Route component={page.notFound}/>
            </Switch>
        </div>
    )
}

export default Routes