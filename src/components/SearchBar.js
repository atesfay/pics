import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''}; // intial state for controled event

        // for uncontroled event
    // onInputChange(event){
    //     console.log(event.target.value);

    // }

    // onInputClick(){
    //     console.log('Input was clicked');

    // }

    onFormSubmit = event => {
        event.preventDefault();
        // console.log(this.state.term)
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            // onClick={this.onInputClick} 
                            // onChange={event => console.log(event.target.value)} // alternate way to write event in arrow func
                            // onChange={e => console.log(e.target.value)} // alternate way to write event in arrow func

                                // for unconroled event 
                            // onChange={this.onInputChange}
                           value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })
                            }
                           /> 
                    </div>
                </form>

            </div>
        );
    }
}

export default SearchBar;