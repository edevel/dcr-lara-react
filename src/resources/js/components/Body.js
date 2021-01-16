import React from 'react'
import ProductThumb from './ProductThumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

const Body = (props) => {
    const prodCall = (e) => {
        props.axiosGetRequest('products', e.currentTarget.value)
    }
    let langsLoaded = props.langs.length?true:false;
    const findMatches = (wordToMatch) => {
        if (!/[^a-zA-Z0-9 ]/.test(wordToMatch)){
            const products = props.products;
            let matches = products.filter(product => {
                const regex = new RegExp(wordToMatch, 'gi');
                return product.name.match(regex) || product.description.match(regex)
            });
            props.updateStateGeneral('matchesFound', matches);
        }else if(wordToMatch !== ''){
            props.modalOpenMessage(
                langsLoaded ? props.langs[12][props.currentLang]:'Error',
                langsLoaded ? props.langs[11][props.currentLang]:'No special characters allowed',
                langsLoaded ? props.langs[13][props.currentLang]:'Close',
            );
            
        }
      }
    const clearMatches = (e) =>{
        e.stopPropagation();
        e.currentTarget.value = '';
    }
    const handleProductClick = (e, product) =>{
        e.preventDefault();
        props.viewedProducts({product});
        findMatches(913266999);
    }
    
    return (
        <div className="body container" >
            <div className="row">
                <div className="col-lg-3 d-flex justify-content-left align-items-center">
                    {parseFloat(props.percentCompleted) < 100?
                        <div className="box">
                            <div className="loader-16"></div>
                        </div>
                    :''}
                </div>
                <div className="col-lg-6 mt-4">
                    <div className="input-group">
                        <input type="text" className="form-control dropdown-toggle" 
                                data-toggle="dropdown"
                                id="productSearch"
                                onChange={(e)=>{findMatches(e.currentTarget.value, )}}
                                autoComplete="off"
                                onBlur={clearMatches}
                                onClick={clearMatches}
                                placeholder=
                                    {
                                        langsLoaded ? 
                                        props.langs[0][props.currentLang]:'Search products'
                                    }
                        />
                        <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                        {props.matchesFound.length?
                            <div className="dropdown-menu container" aria-labelledby="dropdownMenuButton">
                                {  
                                    Object.keys(props.matchesFound).map( key => (
                                        props.matchesFound[key].visibility > 2?
                                        <a className="dropdown-item row d-flex" 
                                            onClick = {(e) => handleProductClick(e, props.matchesFound[key])}
                                            href={'/'+props.matchesFound[key].slug} key={key}
                                            data-click="click"
                                            >
                                            <div className="col-3">
                                                <img
                                                    onClick = {(e) => handleProductClick(e, props.matchesFound[key])}
                                                    src={props.matchesFound[key].main_image} 
                                                    alt={props.matchesFound[key].name}
                                                    className="img-fluid"/>
                                            </div>
                                            <div className="col-9">
                                                <p onClick = {(e) => handleProductClick(e, props.matchesFound[key])}>
                                                    <strong>{props.matchesFound[key].name}</strong>
                                                </p>
                                                <p>{props.matchesFound[key].price}&euro;</p>
                                                <div className="description">
                                                    <p>{props.matchesFound[key].description.replace(/(<([^>]+)>)/ig,'')}</p>
                                                </div>
                                            </div>
                                        </a>
                                        :''
                                    ))
                                }
                            </div>
                        :
                            <div className="dropdown-menu container" aria-labelledby="dropdownMenuButton">
                                <span className="dropdown-item row d-flex">
                                {
                                langsLoaded ? 
                                    props.langs[9][props.currentLang]:'Please type a product name'
                                }
                                </span>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {Object.keys(props.currentlyViewedList).length?
                <div className="row mt-3">
                    <div className="col-12 sectionTitle mt-5">
                        <h2>
                            {
                                langsLoaded ? 
                                props.langs[10][props.currentLang]:'Viewed products'
                            }
                        </h2>
                        <a href="/" className="searchIcon" onClick={(e)=>props.removeViewed(e)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </a>
                    </div>
                    {Object.keys(props.currentlyViewedList).map( key => (
                        <div className="col-3 cardLame mt-1" key={'v'+key}>
                            <div className="row justify-content-left text-left" >
                                <div className="col-4">
                                    <a href={'/product/'+props.currentlyViewedList[key].slug}
                                        onClick = {(e) => handleProductClick(e, props.currentlyViewedList[key])}
                                    >
                                        <img alt={props.currentlyViewedList[key].name} 
                                            src={props.currentlyViewedList[key].main_image}
                                            onClick = {(e) => handleProductClick(e, props.currentlyViewedList[key])}
                                            className="img-fluid"
                                        />
                                    </a>
                                </div>
                                <div className="col-8">
                                    <p>
                                        <strong>
                                            <a href={'/product/'+props.currentlyViewedList[key].slug}
                                                onClick = {(e) => handleProductClick(e, props.currentlyViewedList[key])}
                                            >
                                                {props.currentlyViewedList[key].name}
                                            </a>
                                        </strong>
                                    </p>
                                    <p>{props.currentlyViewedList[key].price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            :''}
            <div className="row justify-content-center">
                <div className="col-12 mt-5 sectionTitle">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-6">
                            <h2>
                            {
                                langsLoaded ? 
                                props.langs[5][props.currentLang]:'Descending price'
                            }
                            </h2>
                        </div>
                        <div className="col-md-6 col-6 justify-content-end d-flex">
                            <select className="form-select ctm-select" defaultValue='1' onChange={prodCall}>
                                <option value="asc">{
                                        langsLoaded ? 
                                        props.langs[3][props.currentLang]:'Ascending price'
                                    }</option>
                                <option value="desc">{
                                        langsLoaded ? 
                                        props.langs[4][props.currentLang]:'Descending price'
                                    }</option>
                            </select>
                        </div>
                    </div>
                </div>
                
            </div>
            {props.percentCompleted < 100?
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="loading-bar">
                            <div
                            className="loading-bar-meter"
                            style={{width: props.percentCompleted + "%"}}
                            ></div>
                        </div>
                    </div>
                </div>
            :''}
            {   
                props.products ?
                    <div className="row">
                        {
                            Object.keys(props.products).map( key => (
                                parseFloat(props.products[key].visibility) === 2 ||
                                parseFloat(props.products[key].visibility) === 4 ?
                                <ProductThumb
                                    key = {'p'+key}
                                    product={props.products[key]}
                                    viewDetails = {langsLoaded?props.langs[7][props.currentLang]:'View Details'}
                                    handleProductClick = {handleProductClick}
                                />
                                :''
                            ))
                        }
                    </div>
                :''
            }
        </div>
    )
}

export default Body