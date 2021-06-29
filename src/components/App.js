import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    state = { images: []};

    onSearchSubmit = async term => {
        // console.log(term);
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 9OVvHol2hCXalvmRq3XdrPhjZjpJa5JAG1STvxWGLR8' 
            }
        });
        // .then(response => {
        //     console.log(response.data.results);
        // });
        // console.log(response.data.results);
        this.setState({ images: response.data.results });
    };

    render(){
        return (
            <div className="ui container" style={{marginTop: '30px'}} >
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }

};
export default App;