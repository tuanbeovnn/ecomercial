import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {product} = this.props;
        const tech = JSON.parse(product.technicalInfo);
        console.log(tech);
        
        return (
            <tr>
                <td style={{width:'50px'}}>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.originalPrice}</td>
                <td>{product.discount}</td>
                <td><img style={{width:'54px', height:'64'}} src={product.image[0]}/></td>
                <td>{product.description}</td>
                <td>{product.code}</td>
                <td>{product.brandCode}</td>
                <td>TechnicalInfo: <br/>{tech.description},<br/> {tech.machinename},<br/> {tech.ipaddress}</td>
                <td>{product.status}</td>
                <td>{product.quantity}</td>
                <td>{product.rating}</td>
                <td>
                    <button type="button"><i class="fas fa-trash"></i></button>&nbsp;&nbsp;
                    <button type="button"><i class="fas fa-wrench"></i></button>
                </td>
            </tr>
        )
    }
}
