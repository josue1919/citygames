import styled from 'styled-components';
import HomeCard from './../Card/index';

const Buscador=()=>{

    return(
        <BuscadorWrapper>
            <section className="buscador">
                   <input type="text" placeholder="Buscar juego..."/>
                   <button><i class="fas fa-search"></i></button>
            </section>
            <section className="contenido">
            <HomeCard
                    image="https://i.blogs.es/3e6787/genshin-impact-cbt-2-scaled-2/450_1000.jpg"
                    category="DISEÑO Y DECO"
                    description={"ESPACIOS DE DISEÑO"}
                    label="Ver más"
            />
            </section>
        </BuscadorWrapper>

    )
}

const BuscadorWrapper=styled.div`
width:100%;
height:100vh;
display:flex;
margin-top:40px;
flex-direction:column;

    .buscador{
        width:100%;
        display:flex;
        justify-content:center;

        input{
            width:400px;
            height:40px;
            font-size:25px;
            border-radius:20px;
            outline:none;
            padding-left:10px;
            border: 2px solid #318aac;

        }

        button{
            width:50px;
            height:50px;
            border-radius:100px;
            margin-left:5px;
            cursor:pointer;
            outline:none;
            color: rgba(255, 255, 255, 0.9) !important;
            font-size: 20px;
            font-weight: 500;
            /* padding: 0.5em 1.2em; */
            background: #318aac;
            border: 2px solid;
            border-color: #318aac;
            position: relative;
            &:hover{
                color: rgba(255, 255, 255, 1) !important;
                box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
                transition: all 0.2s ease;
            }
        }
    }

    .contenido{
        margin-top:10px;
        display:flex;
        justify-content:space-around;
    }

`;

export default Buscador;
