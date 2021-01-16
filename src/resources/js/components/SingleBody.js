import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

const SingleBody = (props) => {
    let localStorageProducts = JSON.parse(localStorage.getItem('viewed'));
    const localStorageCurrentProduct = parseFloat(localStorage.getItem('current'));
    const lsSetting = localStorageProducts[localStorageCurrentProduct];
    const currentCats = lsSetting.categories.indexOf(',') > -1?
                        lsSetting.categories.split(','):
                        lsSetting.categories;
    const description = lsSetting.description.replace(/\\n|\\r/g,'');
    var allCats = props.categories;
    console.log(typeof(currentCats))

    return (
        <div className="body">
            <div className="container">
                <div className="row jusify-content-left text-left">
                    <div className="col-5">
                        <img className="img-fluid" alt="alt" src="https://placehold.it/1000x1000"/>
                    </div>
                    <div className="col-7">
                        <div className="sectionTitle pl-3">
                            <h2>{lsSetting.name}</h2>
                        </div>
                        <h3 className="lg-price"><span>{lsSetting.base_price}&euro; </span>
                        {lsSetting.price}&euro;</h3>
                        <div className="description" dangerouslySetInnerHTML={{
                            __html: description
                        }}>
                        </div>
                        <div className="tags mt-4">
                            {typeof(currentCats) !== 'string'?
                                Object.keys(currentCats).map( key => (
                            <a 
                                href =  {allCats !== {} && 
                                allCats['t_'+currentCats[key]] !== undefined?
                                '/categories/'+allCats['t_'+currentCats[key]].slug:currentCats[key]}
                                className="shiny btn pl-2 mr-2" key={key}>
                                <FontAwesomeIcon icon={faTag} />  &nbsp;                                
                                {allCats !== {} && 
                                allCats['t_'+currentCats[key]] !== undefined ?
                                allCats['t_'+currentCats[key]].name:currentCats[key]}
                                </a>
                                ))
                            :
                            allCats !== {} && 
                            allCats['t_'+currentCats] !== undefined ?
                            <a className="shiny btn pl-2 mr-2" href="/">
                                    <FontAwesomeIcon icon={faTag} />  &nbsp;             
                                {allCats['t_'+currentCats].name}</a>:'Loading categories...'
                            }
                        </div>
                        <div className="sku mt-4">Sku: {lsSetting.sku}</div>
                        <button className="btn btn-block shiny mt-4">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBody