import React, { Component } from 'react';

class ProductActionPage extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form>
                    <div className="form-group">
                        <label>Product Name: </label>
                        <input type="text" className="form-control" id=""/>
                    </div>
                    <div className="form-group">
                        <label>Product Price: </label>
                        <input type="text" className="form-control" id=""/>
                    </div>
                    
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value=""/>
                            Con Hang
                        </label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;