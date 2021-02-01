import styled from 'styled-components';
// import Header from './../../components/Header/index';
import Top from './../Top3/index';
import Buscador from './../../components/Buscador/index';
const Home=()=>{

    return(
        <>
       
        <WrapperHome>
            <Top/>
            <Buscador/>
        </WrapperHome>
        </>
    );
}


const WrapperHome=styled.div`
display:flex;
flex-direction:column;

width:100%;
height:100vh;


`;

export default Home;