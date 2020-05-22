import React, {Component} from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
 

class GenerateList extends Component{
    state = {
        search: "",
        results: [],
        order: "descend"
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

    nameArray = ()=> {
        const sorted = [ ...this.state.results ].sort((a, b) => a.name.first > b.name.first ? 1 : -1)
        this.setState({
            ...this.state,
            results: sorted
        })
    }

    render() {
        return (
            <>
                <div>
                    <SearchForm
                        search={this.state.search}
                        handleInputChange={this.handleInputChange}
                    />
                    <ResultList results= {this.state.results} search = {this.state.search} nameArray= {this.nameArray} order= {this.state.order}/>
                </div>
            </>
        );
    }
}

export default GenerateList;