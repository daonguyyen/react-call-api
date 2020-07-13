import React, { Component } from 'react';
import callAPI from './../../utils/apiCaller';
import { Link } from 'react-router-dom';


class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    componentDidMount() {
        var {match} = this.props;
        if(match) {
            var id = match.params.id;
            callAPI(`products/${id}`, 'GET', null).then(res =>{
                var data = res.data;
                this.setState({
                    id : data.id,
                    txtName : data.name,
                    txtPrice : data.price,
                    chkbStatus : data.status
                })
            });
        }
    }
    

    onChange = event => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }

    onSave = event => {
        event.preventDefault();
        var {id, txtName, txtPrice, chkbStatus} = this.state;
        var {history} = this.props;
        if(id){ //update product
            callAPI(`products/${id}`, 'PUT', {
                name :  txtName,
                price : txtPrice,
                status : chkbStatus
            }).then(res => {
                history.goBack();
            })
        }else {
            callAPI('products', 'POST', {
                name :  txtName,
                price : txtPrice,
                status : chkbStatus
            }).then(res => {
                // console.log(res);
                history.goBack();
            })
        }
        
    }

    render() {
        var { txtName, txtPrice, chkbStatus } = this.state
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Product Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            id="" name="txtName"
                            value={txtName}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Product Price: </label>
                        <input
                            type="text"
                            className="form-control"
                            id="" name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Status: </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input 
                            type="checkbox" 
                            name="chkbStatus" 
                            value = {chkbStatus}
                            onChange = {this.onChange}
                            checked = {chkbStatus}/>
                            Con Hang
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary mr-10">Save</button>
                    <Link to='/product-list' className="btn btn-info ">Back</Link>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;