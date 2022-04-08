import React, {Component} from 'react'
import ContTextRacha from '../components/Conten_UpdRacha_Texto';
import ContImagRacha from '../components/Conten_UpdRacha_Imagen';


function Texto(){
  return(
   <ContTextRacha></ContTextRacha>
  );
}


function Imag(){
  return(
   <ContImagRacha></ContImagRacha>
  );
}

export default class RenderizadoTipoRacha extends Component{

  constructor(props){
    super(props);
    this.state = {
      Tipo:true,
    };
  }
  render(){
    return(
    <div>
      {this.state.Tipo?<ContTextRacha/>:  <ContImagRacha/>}
    </div>
    );
  }
}