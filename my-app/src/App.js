import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rp from 'request-promise';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      imgs: [],
      value: '',
      copied: false,
  
    }

    this.handleChange = this.handleChange.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  getImages(url){
    var that = this;
    rp(url)
    .then(function(html){
      var div = document.createElement('div');
      div.innerHTML = html;
      
      var images = div.getElementsByTagName('img');
      var imageDivs = []
      for(var i=0; i<images.length; i++){
        console.log(images[i].src)
        if(images[i].src != ""){
          imageDivs.push(images[i].src)
        }
        
      }
      that.setState({
        imgs : imageDivs
      })
    })
    .catch(function(err){
      //handle error
      console.log(err)
    });
  }

  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
    if(e.target.value == ""){
      this.setState({
        status: ""
      })
    }
    this.getImages(e.target.value)
  }


  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input value={this.state.url} placeholder="enter image link here" className="linkInput" onChange={this.handleChange} name="url"/>
        </header>

            <div>
              <div>
                {this.state.imgs.map((src) =>
                      
                      <CopyToClipboard text={src}
                        onCopy={() => this.setState({copied: true})}>
                        <button className="grid-button"><img src={src} height="300" width="300" className="grid-img"/></button>
                      </CopyToClipboard>
                    
                )}
              </div>
            </div>


      </div>
    );
  }
}

export default App;
