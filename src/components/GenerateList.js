import React, {Component} from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";

class GenerateList extends Component{
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.apiCall();
    };

    apiCall = () => {
        API.search()
          .then(res => this.setState({ results: res.data.results }))
          .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const search = event.target.name;
        const value = event.target.value;
        this.setState({
        [search]: value
        });
    };

    // filteredResults = ()=>{
    //     if(this.state.results.firstName.includes(this.state.search)){
    //         return <ResultList results= {this.state.results} />
    //     }
    // }

    render() {
        return (
            <>
                <div>
                    <SearchForm
                        search={this.state.search}
                        handleInputChange={this.handleInputChange}
                    />
                    <ResultList results= {this.state.results} />
                </div>
            </>
        );
    }
}

export default GenerateList;