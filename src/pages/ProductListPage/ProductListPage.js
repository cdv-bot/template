import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { acFetchProducts } from '../../actions';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import { callApi } from '../../utils/apiCaller';

function ProductListPage(props) {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    //call api
    useEffect(() => {
        callApi('products', 'GET', null).then(res => {
            dispatch(acFetchProducts(res.data));
        });
    }, [dispatch]);

    //delete id 
    const onDeletes = (id) => {
        callApi(`products/${id}`, 'DELETE', null).then(res => {
            if (res.status === 200) {
                const arr = products.filter(item => {
                    return item.id !== id;
                });
                dispatch(acFetchProducts(arr));
            }
        });
    };

    let showProducts = () => {
        if (products.length > 0) {
            let result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDeletes={onDeletes}
                    />
                );
            });
            return result;
        }
    };
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to="/product/add" className="bt bt-info mb-10">Thêm sản phẩm</Link>
            <ProductList>
                {showProducts(products)}
            </ProductList>
        </div>
    );
}

export default ProductListPage;