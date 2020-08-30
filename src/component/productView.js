import React, {Component} from 'react';
import axios from 'axios';

export default class homepage extends Component{

prodData;

constructor(props){
    super(props);
    this.state={
        name: '',
        description: '',
        quantity: ''
    }
}

    componentDidMount(){
        this.prodData = JSON.parse(localStorage.getItem('product'));

        if(localStorage.getItem('product')){
            this.setState({
              name: this.prodData.name,
              description: this.prodData.description,
              quantity: this.prodData.quantity
             
            })
          }
    }

    render(){
        return(
            <div>
               <div class="container">
	            <br/>  
                <hr/>
	
            <div class="card border border-success">
	            <div class="row">
		            <aside class="col-sm-5 border-right">
                        <article class="gallery-wrap "> 
                            <div class="img-big-wrap">
                                <div> <a href="#"><img src="https://s9.postimg.org/tupxkvfj3/image.jpg"/></a></div>
                            </div>
              
                                <div class="img-small-wrap">
                                    <div class="item-gallery"> <img src="https://s9.postimg.org/tupxkvfj3/image.jpg"/> </div>
            
                                </div> 
    
                        </article> 
		            </aside>
		            <aside class="col-sm-7">
                <article class="card-body p-5">
                    <h1>Product View</h1>

                    <dt>Product Name</dt>
                       <dd> <p class="title mb-3">{this.state.name}</p></dd>

                        
        
                <dl class="item-property">
                    <dt>Description</dt>
                        <dd><p>{this.state.description} </p></dd>
                        </dl>
                    <dl class="param param-feature">
        
            </dl> 
          
       
                <dl class="param param-feature">
                <dt>Quantiy</dt>
                    <dd>{this.state.quantity}</dd>
                </dl> 
 

        <hr/>
	<hr/>
        </article> 
		</aside> 
	</div> 
</div> 
</div>
     </div>
        )
    }
}