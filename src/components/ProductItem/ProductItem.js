import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product, index, onDeletes }) {
    const onDelete = (id) => {
        if (confirm("Bạn có muốn xóa không ?")) {  // eslint-disable-line
            onDeletes(id);
        }
    }

    let statusName = product.status ? "Con hang" : "Het hang";
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span className="label label-warning">{statusName}</span>
            </td>
            <td>
                <Link to={`product/${product.id}/edit`} className="btn btn-success ">Sửa</Link>
                <button type="button" className="btn btn-success " onClick={() => onDelete(product.id)}>Xóa</button>
            </td>
        </tr>
    );
}

export default ProductItem;