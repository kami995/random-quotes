import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import quotes from './quotes'

class QuoteBox extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                tekst: quotes[0][0],
                author: quotes[0][1]
            };
        }

    generateNew(){
        let broj = Math.floor(Math.random() * quotes.length);
        this.setState({
            tekst: quotes[broj][0],
            author: quotes[broj][1]
        })
    }    
    
    render(){
        return(

            <div id="quote-box">
                    <div>
                        <p id="text">"{this.state.tekst}"</p>
                        <p id="author">{this.state.author}</p>
                    </div>                          
                    <Button promeni={this.generateNew.bind(this)} />
                    <TweetButton />
            </div>
            
        );
    }
}

// class Text extends QuoteBox{
//     // eslint-disable-next-line
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//         <div>
//             <p id="text">"{this.props.tekst}"</p>
//             <p id="author">{this.props.author}</p>
//         </div>
//         );
//     }
// }

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

class TweetButton extends React.Component{
    render(){
        return(
            <div><br />
                <a id="tweet-quote" 
                href="https://twitter.com/" 
                rel="noopener noreferrer" 
                target="_blank">Tweet this</a>
            </div>
        )
    }
}

ReactDOM.render(
    <QuoteBox />,
    document.getElementById('root')
  );