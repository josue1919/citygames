import styled from 'styled-components';
import logo from './../../assets/img/logo.png';
import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const Login=()=>{

    return(
      
        <WrapperLogin>

            <CardLogin>
                <Cardimg src={logo}/>
                    <h1>Login</h1>
                <CardContenido>
                <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Iniciar
        </Button>
      </Form.Item>
    </Form>
                </CardContenido>
            </CardLogin>



                
        </WrapperLogin>


       
    )
}


const WrapperLogin=styled.div`
display:flex;
justify-content:center;
margin-top:60px;


`;

const CardLogin=styled.div`
width:400px;
height:400px;
display:flex;
flex-direction:column;
align-items:center;
box-shadow:rgba(0,0,0,0.1)0 0 10px;
background-color:#282248;
h1{
    color:#fff;
    padding:0px;
    margin:0px;
}
`;

const Cardimg=styled.img`

width:100px;
height:100px;
margin-top:-50px;

`;
const CardContenido=styled.div`

display:flex;
flex-direction:column;
align-items:center;

`;
export default Login;