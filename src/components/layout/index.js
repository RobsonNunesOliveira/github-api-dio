import React from 'react';
import Header from '../header';
import * as S from "./styled"
//import useGithub from "../../hooks/github-hooks"

const Layout = ({children}) => {

    

    return(
        <S.WrapperLayout>
        <Header/>
        {children}
            
        </S.WrapperLayout>
    )

}

export default Layout;