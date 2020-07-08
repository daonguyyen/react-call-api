import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>iPhone 8 plus</td>
                <td>500</td>
                <td>
                    <span className="label label-warning">Còn hàng</span>
                </td>
                <td>
                    <button type="button" className="btn btn-success">Sửa</button>
                    <button type="button" className="btn btn-danger m-l-5">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;