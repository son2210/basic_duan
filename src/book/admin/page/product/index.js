import React from 'react'
import FromProducts from './components/fromProduct'
import TableProduct from './components/listProduct'
import Pagination from './components/pagination'
import  {useSelector} from 'react-redux'
const ListProduct = () => {
    const {data, loading} = useSelector(state=>state.ProductSlice)
    console.log(data);
    return (
        <div>
            headr các from tìm kiếm  , danh mục , tên sản phẩm <FromProducts/>

            list Sản phẩm  <TableProduct/>

             <Pagination/>
        </div>
    )
}

export default ListProduct
