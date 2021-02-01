import React, { useState } from 'react';
import { storage, db } from '../../firebase/init';
import { Formik, Field, ErrorMessage, Form, useFormikContext } from 'formik';
import { TextField } from "formik-material-ui";
import styled from 'styled-components';
import * as yup from 'yup';
import { message } from 'antd';
import FileUpload from '../../components/UploadImage/index';


const AddGame=()=>{

    const key = 'updatable';
    const openMessage = () => {
        message.loading({ content: 'Guardando...', key });
        setTimeout(() => {
            message.success({ content: 'Se guardo correctamente', key, duration: 2 });
        }, 600);
    };

    return(
        <>
            <Formik
                initialValues={{
                    name: "",
                    price: "",
                    images: null,
                    description: "",
                }}
                validationSchema={yup.object({
                    name: yup.string()
                        .required("Necesario poner nombre al platillo."),
                    price: yup.number()
                        .required("¿Cuánto cuesta el platillo?")
                        .moreThan(-1, "No puede tener precios negativos"),
                    description: yup.string()
                        .required("Escribe una breve descripción del platillo.")
                        .min(8, "La descripción es muy corta"),
                })}

                onSubmit={(values, {resetForm}) => {
                    const { name, price, images, description } = values;

                    const storageRef = storage.ref(`/pictures/${images.name}`);
                    const task = storageRef.put(images.originFileObj);
                    task.on('state_changed', snapshot => {

                    }, error => {
                        console.log(error.message);
                    }, async () => {
                        const images = await (await task).ref.getDownloadURL()
                        db.collection('dishes').doc()
                            .set({
                                name,
                                price,
                                images,
                                description,
                            })

                        openMessage();
                        resetForm();
                    })
                }}
            >
                {({ setFieldValue, handleSubmit }) => (
                    <WrapperForm onSubmit={handleSubmit}>
                        <WrapperUpLoadImage>
                            <p>Platillo</p>
                            <UpLoadImage>
                                <FileUpload
                                    onImageLoaded={images => setFieldValue("file", images)} />
                            </UpLoadImage>
                        </WrapperUpLoadImage>
                        <Divider />
                        <WrapperField>
                            <Field
                                label="Nombre del platillo"
                                variant="outlined"
                                name="name"
                                size="small"
                                component={TextField}
                            />
                            <Field
                                label="Precio"
                                type="number"
                                variant="outlined"
                                name="price"
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
                            <Button type="submit">
                                Guardar
						</Button>
                        </WrapperField>
                    </WrapperForm>
                )}
            </Formik>
        </>

    );
};

const WrapperForm = styled(Form)`
     display: flex;
    /* justify-content: space-between; */
    margin: 0 auto;
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
    cursor: pointer;
    background-color: #ff7931;
    color: #fff;
`;

export default AddGame;