
import styled from 'styled-components';
import HomeCard from './../../components/Card/index';

const Top=()=>{

    return(
        
        <WrapperTop>
        <TitleTop>
        <h1>Top 3 mas votados</h1>
        </TitleTop>


            <ContainerTop>
                <HomeCard
                    image="https://i.blogs.es/3e6787/genshin-impact-cbt-2-scaled-2/450_1000.jpg"
                    category="DISEÑO Y DECO"
                    description={"ESPACIOS DE DISEÑO"}
                    label="Ver más"
                />
    <HomeCard
        image="https://i.blogs.es/3e6787/genshin-impact-cbt-2-scaled-2/450_1000.jpg"
        category="DISEÑO Y DECO"
        description={"ESPACIOS DE DISEÑO"}
        label="Ver más"
    /><HomeCard
    image="https://i.blogs.es/3e6787/genshin-impact-cbt-2-scaled-2/450_1000.jpg"
    category="DISEÑO Y DECO"
    description={"ESPACIOS DE DISEÑO"}
    label="Ver más"
/>
            </ContainerTop>
        </WrapperTop>
        
    )
}


const WrapperTop=styled.div`

/* margin-top:40px; */
display:flex;
flex-direction:column;


`;
const ContainerTop=styled.div`

margin-top:10px;
display:flex;
justify-content:space-around;



`;
const TitleTop=styled.div`

display:flex;
justify-content:center;
h1{
    padding:0px;
    margin:0px;
    color:#fff;
}


`;


export default Top;