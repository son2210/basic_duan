import React from 'react'

const Layout = ({children}) => {
    const id = true
    return (
        <div className="row">
            <div className="col-2"> 
                <sidebarAdmin/>
                giữ nguyên 
            </div>
            <div className="col-10">
                {children}
            </div>
        </div>
       
    )
}

export default Layout
