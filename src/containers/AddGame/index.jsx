import React, { useEffect, useState } from 'react';
import { Formik, Field, ErrorMessage, Form, useFormikContext } from 'formik';
import { TextField } from "formik-material-ui";
import styled from 'styled-components';
import * as yup from 'yup';
import { db, storage } from '../../firebase/init';
import { Upload, message } from 'antd'

const FormularioEx = () => {
    const [picture, setpicture] = useState(null);

    const key = 'updatable';
    const openMessage = () => {
        message.loading({ content: 'Guardando...', key });
        setTimeout(() => {
            message.success({ content: 'Juego mandado a revision...', key, duration: 2 });
        }, 600);
    };

    return (
        <Wrapper>
            <Formik
                initialValues={{
                    name: "",
                    description: "",
                }}
                validationSchema={yup.object({
                    name: yup.string()
                        .required("Necesario poner nombre "),
                  
                    description: yup.string()
                        .required("Escribe una descripcion")
                        .min(8, "La descripción es muy corta"),
                })}

                onSubmit={async (values, { resetForm }) => {
                    const { name,  description } = values;

                    const newDishes = {
                        createDate: new Date(),
                        name,
                        description,
                    }
                    db.collection('games')
                        .doc()
                        .set(newDishes).then(res => {
                            openMessage()
                        }).catch(error => {
                            message.error(error);
                        })
                    setTimeout(() => {
                        resetForm()
                    }, 2000);
                }
                }
            >
                {({ isSubmitting }) => (
                    <WrapperForm noValidate >
                        <WrapperUpLoadImage>
                            <p>Imagen</p>
                            <UpLoadImage>
                                {/* <UploadFile /> */}
                            </UpLoadImage>
                        </WrapperUpLoadImage>
                        <Divider />
                        <WrapperField>
                            <Field
                                label="Nombre del videojuego"
                                variant="outlined"
                                name="name"
                                size="small"
                                component={TextField}
                            />
                            
                            <Field
                                label="Descripción"
                                variant="outlined"
                                name="description"
                                multiline
                                rows={3}
                                component={TextField}
                            />
                            <Button type="submit" >
                                Guardar
						    </Button>
                        </WrapperField>
                    </WrapperForm>
                )}
            </Formik>
        </Wrapper>
    );
};


const Wrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
/* margin-top:40px; */

`;



const WrapperForm = styled(Form)`

background-color:#dfdcef;
     display: flex;
    
    /* justify-content: space-between; */
    /* margin: 0 auto; */
    padding: 40px 40px;
    width: 700px;
    height: 385px;
    border-radius: 30px;
    font-family: 'Lato', sans-serif;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const WrapperField = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;

   
`;

const InputField = styled(Field)`
    border:1px solid red;

   
`;

const WrapperUpLoadImage = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    font-family: 'Lato', sans-serif;

    img{
        width: 100%;
        height: 100%;
    }
    
    .boton{
        width: 120px;
        align-self: center;
        margin-top: 15px;
    }
    p{
        text-align: center;
        font-size: 16px;
    }
`;

const UpLoadImage = styled.div`
    /* border: dashed 2px #bdbebf;
    height: 214px;
    width: 214px; */

    .avatar-uploader > .ant-upload {
        width: 214px;
        height: 214px;
   }
`;

const Divider = styled.div`
    border-right: 1px solid #bdbebf;
    height: 100%;
    margin: 0px 40px;
`;

const Button = styled.button`
    outline: none;
    border: solid 1px;
    border-radius:40px;
    height: 40px;
    color: #fff !important;
color: #318aac !important;
  font-size: 20px;
  font-weight: 500;

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



export default FormularioEx;