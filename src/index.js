import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import quotes from './quotes'

class QuoteBox extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                tekst: '',
                author: ''
            };
        }

    componentDidMount(){
        this.generateNew();
    }

    generateNew(){
        let broj = Math.floor(Math.random() * quotes.length);
        this.setState({
            tekst: quotes[broj][0],
            author: quotes[broj][1]
        })
    }    
    
    render(){
        let tweetURL = 'https://twitter.com/intent/tweet?text=' + '"' + this.state.tekst + '"' + ' -' + this.state.author;
        return(
            <div id="quote-box">
                    <div>
                        <p id="text">"{this.state.tekst}"</p>
                        <p id="author">{this.state.author}</p>
                    </div>                          
                    <Button promeni={this.generateNew.bind(this)} />
                    <div><br />
                        <a id="tweet-quote" 
                        href={tweetURL} 
                        rel="noopener noreferrer" 
                        target="_blank">Tweet this</a>
                    </div>
            </div>
            
        );
    }
}

class Button extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button
             id="new-quote"
             onClick={this.props.promeni}>
                 New Quote
            </button>
        );
    }
}

ReactDOM.render(
    <QuoteBox />,
    document.getElementById('root')
  );