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
        const newArray = []
        this.state.results.map(({name})=>{
        newArray.push(name.first)
        console.log(newArray.sort())
        this.setState({
            results: [...this.state.results, newArray]
        })
        return newArray
    })
    }

    

    // sorted = (a, b) => {
    //     // if(this.state.results.name < this.state.results.name) { return -1; }
    //     // if(this.state.results.name > this.state.results.name) { return 1; }
    //     // return 0;
    //     // console.log(a)
    // }

    // handleSort = ()=>{
    //     if(this.state.order === "descend"){
    //         this.state.results.sort()
    //         console.log(this.nameArray())
    //     }
    //     //  else if(this.state.order === "ascend"){
    //     //     this.state.results.reverse(name)
    //     //     console.log(this.state.results)
    //     // }
    //     this.setState({
    //         results: this.state.results
    //     })
        
    // }

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