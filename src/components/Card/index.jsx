import styled from 'styled-components';

const HomeCard =(props)=>{
    return(
        <Card>
        <Image src={props.image} />
        <Information>
            {/* <Category description={props.category} /> */}
            <Title>{props.description}</Title>
        </Information>
        <Button >{props.label}</Button>
    </Card>
       )
}

const Card=styled.div`
background-color: #282248;
width:250px;
height:300px;
box-shadow:rgba(0,0,0,0.1)0 0 10px;
display:flex;
flex-direction:column;


`;

const Image=styled.img`
width:100%;
height:150px;

`;

const Information=styled.div`
width:100%;
height:150px;
display:flex;
flex-direction:column;
color:#fff;
align-items:center;

`;

const Title=styled.h3`

color:#fff;
`


const Button=styled.button`

margin-left:5px;
width:100px;
height:30px;
color: #fff !important;
color: #318aac !important;
  font-size: 15px;
  /* padding: 0.5em 1.2em; */
  background: rgba(0,0,0,0);
  border: 2px solid;
  border-color: #318aac;
  transition: all 1s ease;
  position: relative;
  cursor: pointer;
  outline:none;
  margin-bottom:10px;
    

&:hover {
    background: #318aac;
  color: #fff !important;
}

`;
export default HomeCard;