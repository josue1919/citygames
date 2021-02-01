import styled from 'styled-components';
import  logo from './../../assets/img/logo.png'
import {Link} from 'react-router-dom';
const Header=()=>{
    return(
        <>
        <HeaderNav>
            <Link to="/"><img src={logo} alt="logo pagina"/></Link>
           <section className="botones">
               {/* <a href="#">Buscar</a> */}
               {/* <a href="#">Top 3</a> */}
           <LoginBoton><Link to="/login">Login</Link></LoginBoton>
           </section>
        </HeaderNav>
        </>
    );
}

const HeaderNav=styled.nav`
width:100%;
height:90px;
background-color: #282248;
display:flex;
justify-content:space-between;
align-items:center;
box-shadow:rgba(0,0,0,0.1)0 0 10px;
    .botones{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-right:50px;
       a{
           margin:0px 10px 0px 10px;
           text-decoration:none;
           font-size:20px;
           color:#fff;
       }


        
    }
    img{
        width:60px;
        height:60px;
        flex-direction:flex-start;
        margin-left:40px;
    }

    @media(max-width:396px){
        .botones{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-right:50px;
       a{
           margin:0px 10px 0px 10px;
           text-decoration:none;
           font-size:15px;
           color:#fff;
       }


        
     }
    }

`;


const LoginBoton=styled.button`

color: #fff !important;
color: #318aac !important;
  font-size: 20px;
  font-weight: 500;
  padding: 0.5em 1.2em;
  background: rgba(0,0,0,0);
  border: 2px solid;
  border-color: #318aac;
  transition: all 1s ease;
  position: relative;
  cursor: pointer;
  outline:none;
    

&:hover {
    background: #318aac;
  color: #fff !important;
}

`;

export default Header;