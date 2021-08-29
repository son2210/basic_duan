import  {Route  , Switch , BrowserRouter as Router }  from "react-router-dom"
import Layout from "./layout"
import Dashboard from "./page/dashboard"
import ListProduct from "./page/product"
import Addproduct from "./page/product/actionProduct/addProduct"
import EditProduct from "./page/product/actionProduct/editProduct"
const RouterAmin  = ()=>{   
    return  (
        <Switch> 
            <Layout> 
               <Route exact  path="/admin"> <Dashboard/> </Route>
               <Route exact  path="/admin/products"> <ListProduct/> </Route>
               <Route exact  path="/admin/product/add">  <Addproduct/>  </Route>
               <Route exact  path="/admin/product/edit/:id">  <EditProduct/>  </Route>
            </Layout>
        </Switch>
    )
}
export default  RouterAmin