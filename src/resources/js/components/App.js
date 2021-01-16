
import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Modal from './Modal';
import axios from 'axios';

class App extends React.Component{
  state = {
    general:{
      products:[],
      percentCompleted:1,
      categories:[],
      langs:[],
      currentLang:'ro',
      matchesFound:[],
      clickedProduct:'',
      viewedProducts:{},
      modal:{
        open:false,
        modalTitle:'',
        modalMessage:'',
        modalBtn1:'',
        modalBtn2:'',
        deleteField:false
    }
    }
  }
  updateStateGeneral = (key, value) => {
    const general = {...this.state.general};
    general[key] = value;
    this.setState({general});
  }
  
  componentDidMount(){
    // this.axiosGetRequest('main_categories');
    this.axiosGetRequest('products', 'asc');
    this.axiosGetRequest('langs');
    const localStorageRef = localStorage.getItem('viewed');
    if (localStorageRef){
        this.updateStateGeneral('viewedProducts', JSON.parse(localStorageRef));
    }
  }
  loaderLoad(){
    const $this = this;
    setTimeout(function(){
      if($this.state.general.percentCompleted < 99){
        $this.state.general.percentCompleted++
        $this.updateStateGeneral('percentCompleted', $this.state.general.percentCompleted);
        $this.loaderLoad();
      }else{
        return;
      }
    }, 20)
  }
  axiosGetRequest = (action, task) => {
    const $this = this;
    const client = axios.create({
      baseURL: '/api/',
      timeout: 20000
    });
    if(action === 'products'){
      $this.loaderLoad();
    }
    let currentTask = task?'?task='+task:'';
    client.get(action+currentTask)
    .then(res => {
      if(action==='products'){
        $this.updateStateGeneral('percentCompleted', 100);
        $this.updateStateGeneral('products', res.data);
      }
      if(action==='main_categories'){
        $this.updateStateGeneral('categories', res.data.data);
      }
      if(action==='langs'){
        $this.updateStateGeneral('langs', res.data.data);
      }
      
    })
    .catch(function (error) {
      console.log(error);
   });
  }
  viewedProducts = (viewed) =>{
    const general = {...this.state.general};
    general.viewedProducts[viewed.product.id] = viewed.product;
    this.setState({general});
    localStorage.setItem('viewed', JSON.stringify(general.viewedProducts));
    localStorage.setItem('current', viewed.product.id);
    window.location.href = '/product/'+viewed.product.slug
  }
  removeViewed = (e) => {
    e.preventDefault();
    this.updateStateGeneral('viewedProducts',{});
    localStorage.setItem('viewed', '');
  }
  modalOpenMessage = (title, content, btn1, btn2) => {
    const modal = {
        open:true,
        modalTitle:title,
        modalMessage:content,
        modalBtn1:btn1?btn1:'',
        modalBtn2:btn2?btn2:'',
        deleteField:false
    }
    this.updateStateGeneral('modal', modal);
  }
  modalClose = () => {
    console.log('close')
    this.updateStateGeneral("modal", {
        open:false,
        modalTitle:'',
        modalMessage:'',
        modalBtn1:'',
        modalBtn2:'',
        deleteField:false
    });
  }
  render(){
    return(
      <div className="App">
        <Header 
                currentLang = {this.state.general.currentLang}
                langs = {this.state.general.langs}
                updateStateGeneral = {this.updateStateGeneral}
        />
        <Body percentCompleted={this.state.general.percentCompleted} 
              axiosGetRequest={this.axiosGetRequest} 
              products={this.state.general.products}
              langs = {this.state.general.langs}
              currentLang = {this.state.general.currentLang}
              updateStateGeneral = {this.updateStateGeneral}
              matchesFound = {this.state.general.matchesFound}
              viewedProducts = {this.viewedProducts}
              currentlyViewedList = {this.state.general.viewedProducts}
              removeViewed = {this.removeViewed}
              modalOpenMessage = {this.modalOpenMessage}
        />
        <Footer/>
        <Modal modalClose={this.modalClose} modal = {this.state.general.modal}/>
      </div>
    );
  }
}
export default App;
