import React from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("¡Solo puede cargar archivos JPG / PNG!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("¡La imagen debe tener un tamaño inferior a 2MB!");
    }
    return isJpgOrPng && isLt2M;
}

class FileUpload extends React.Component {
    state = {
        loading: false,
    };

    handleChange = (info) => {
        if (info.file.status === "uploading") {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === "done") {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl) => {
                this.props.onImageLoaded(info.file);
                return this.setState({
                    imageUrl,
                    loading: false,
                });
            });
        }
    };

    render() {
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <UploadOutlined style={{ fontSize: '30px' }} />}
                <div className="ant-upload-text">Arrastra una imagen aquí <br /> o has clik aquí</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <Upload
                name="images"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? (
                    <img src={imageUrl} alt="platillo" style={{ width: '214px', height: '214px' }} />
                ) : (
                        uploadButton
                    )}
            </Upload>
        );
    }
}

export default FileUpload;