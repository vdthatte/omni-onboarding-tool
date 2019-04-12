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

    var options = {
      uri: 'https://' + 'cors-anywhere.herokuapp.com/' + url 
    };

    rp(options)
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
      // var options = {
      //   uri: 'https://api.upcitemdb.com/prod/v1/lookup',
      //   method: 'post',
      //   headers: {
      //       'User-Agent': 'Request-Promise',
      //       "Content-Type": "application/json",
      //       "user_key": "only_for_dev_or_pro",
      //       "key_type": "3scale",

      //   },
      //   json: true // Automatically parses the JSON string in the response
      // };
    
      // rp(options)
      //   .then(function (repos) {
      //       console.log(repos);
      //   })
      //   .catch(function (err) {
      //     console.log(err)
      //   });

      var options = {
        uri: 'https://api.upcitemdb.com/prod/trial/lookup -d "{\"upc\": \"4002293401102\"',
        method: 'post',
        headers: {
            'User-Agent': 'Request-Promise',
            "Content-Type": "application/json",
            "Accept": "application/json",
            "key_type": "3scale",

        },
        json: true // Automatically parses the JSON string in the response
      };
    
      rp(options)
        .then(function (repos) {
            console.log(repos);
        })
        .catch(function (err) {
          console.log(err)
      });

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
