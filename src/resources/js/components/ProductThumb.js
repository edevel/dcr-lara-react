import React from 'react'

const ProductThumb = (props) => {
    
    return (
        <div className='col-lg-4 mb-4'>
            <div className="productLink">
                <a data-id={props.product.id} 
                    href={'/product/'+props.product.slug}
                    onClick = {(e) => props.handleProductClick(e, props.product)}
                >
                    <img className="img-fluid" alt={props.product.name}
                        data-id={props.product.id}
                        src={props.product.main_image}
                        onClick = {(e) => props.handleProductClick(e, props.product)}
                    />
                </a>                
                <p className="price">{props.product.price}&euro;</p>
                <div className="p-btm">
                    <h3>{props.product.name}</h3>
                    <a href={'/product/'+props.product.slug}
                    data-id={props.product.id} 
                    className="btn btn-primary"
                    onClick = {(e) => props.handleProductClick(e, props.product)}
                    >{props.viewDetails}</a>
                </div>
            </div>
        </div>
    )
}

export default ProductThumb
