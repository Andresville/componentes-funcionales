import { Component} from "react";

class ClasesComponentes extends Component{
    constructor(){
        super()
        this.state = {
            contador : 0
        }
    }

    render(){
        return <div>
            Clases Componenetes
            <p>
                <button onClick={()=> this.setState({contador : this.state.contador -1})}>-</button>
                {this.state.contador}
                <button onClick={()=> this.setState({contador : this.state.contador +1})}>+</button>
                </p>
        </div>
    }

} 

export default ClasesComponentes