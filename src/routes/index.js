import {Route, Switch , BrowserRouter  as Router }  from "react-router-dom"
import RouterAmin from "../book/admin"
const Routers = ()=>{
    return (
        <Router> 
                <Switch> 
                    <Route exact path="/admin/:path?/:path?/:path?">  
                        <RouterAmin/> 
                     </Route>
                    <Route exact  path="/">client </Route>
                    <Route exact  path ="*"> page 404 </Route>
                </Switch>
        </Router>        
    )   
}
export default  Routers