import React from 'react'
import Header from './Header';
import axios from 'axios';
import Footer from './Footer';
import SingleBody from './SingleBody';

class SingleProduct extends React.Component{
    state = {
      general:{
        products:[],
        percentCompleted:1,
        categories:{},
        langs:[],
        currentLang:'ro',
        matchesFound:[]
      }
    }
    updateStateGeneral = (key, value) => {
      const general = {...this.state.general};
      general[key] = value;
      this.setState({general});
    }
    axiosGetRequest = (action, task) => {
        const $this = this;
        const client = axios.create({
          baseURL: '/api/',
          timeout: 20000
        });
        let currentTask = task?'?task='+task:'';
        client.get(action+currentTask)
        .then(res => {
          if(action==='main_categories'){
            var resp = res.data.data;
            for (let index = 0; index < resp.length; index++) {
              $this.manageCats('t_'+resp[index].id, resp[index])
              
            }
          }
          if(action==='langs'){
            $this.updateStateGeneral('langs', res.data.data);
          }
        })
        .catch(function (error) {
          console.log(error);
       });   
    }
    manageCats = (key, value) =>{
      const general = {...this.state.general}
      general.categories[key] = value
      this.setState({general});
    }
    componentDidMount(){
        this.axiosGetRequest('main_categories');
        this.axiosGetRequest('langs');
    }
    render(){
        return (
            <div className="App">
            <Header 
                updateStateGeneral = {this.updateStateGeneral}
            />
            <SingleBody
              categories = {this.state.general.categories}
            /> 
            <Footer/>
            </div>
        )
    }
}
export default SingleProduct
