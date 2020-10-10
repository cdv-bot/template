import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { callApi } from '../../utils/apiCaller';

function ProductActionPage(props) {
    let { id } = useParams();

    const history = useHistory();
    const [textValue, setTextValue] = useState({
        id: "",
        name: "",
        price: "",
        status: ""
    });

    //sửa id
    useEffect(() => {
        if (id) {
            callApi(`products/${id}`, 'GET', null).then(res => {
                setTextValue(res.data);
            });
        }
    }, [id]);

    //value text
    const onChanges = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        setTextValue({
            ...textValue,
            [name]: value
        });
    }

    //submit 
    const onSubmit = (e) => {
        e.preventDefault();
        if (id) {
            callApi(`products/${id}`, 'PUT', textValue).then(() => {
                history.goBack();
            });
        } else {
            callApi('products', 'POST', textValue).then(res => {
                history.goBack();
            });
        }
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Tên sản phẩm : </label>
                    <input type="text" className="form-control"
                        name="name"
                        value={textValue.name}
                        onChange={onChanges}
                    />
                </div>
                <div className="form-group">
                    <label>Giá : </label>
                    <input type="number" className="form-control"
                        name="price"
                        value={textValue.price}
                        onChange={onChanges}
                    />
                </div>
                <div className="form-group">
                    <label>
                        <input type="checkbox"
                            name="status"
                            value={textValue.status}
                            onChange={onChanges}
                            checked={textValue.status}
                        />
                        Còn hàng
                     </label>
                </div>
                <Link to='/product-list' className="btn btn-primary  ">Trở lại</Link>
                <button type="submit" className="btn btn-primary ml-1" >Lưu lại</button>
            </Form>

        </div>
    );
}

export default ProductActionPage;