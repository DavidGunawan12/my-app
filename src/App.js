import './App.css'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gambar from './images/axioo.jpg'

function Kartu(props){
  return(
    <>
    <div class="card">
  <img src={Gambar} class="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">{props.namabrg}</h5>
    <p class="text-danger m-auto">Rp.{props.harga}</p>
    <hr />
    <div className="row">
      <div className="col-2"><button onClick={props.kurang} className='btn btn-danger'>-</button></div>
      <div className="col-8 text1"><input value={props.jumlah} type="text" className='form-control'/></div>
      <div className="col-2"><button onClick={props.tambah} className='btn btn-success'>+</button></div>
    </div>
    <div className="div text-center mt-3"><h5>TOTAL</h5>Rp.{props.hasil}</div>
    
    
  </div>
</div>
    </>
  )
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { namabrg:"Laptop Axioo Murah Punya",harga:2000000,jumlah: 0,hasil:0}
  }
  tambah= () => {
        this.setState({
          jumlah: this.state.jumlah + 1,
          hasil: (this.state.jumlah + 1)  * this.state.harga
        })
      }
      kurang= () => {
            if(this.state.jumlah > 0 ){
              this.setState({jumlah: this.state.jumlah - 1,
              hasil: (this.state.jumlah - 1) * this.state.harga})
            }
          
        }
  render() { 
    return (
      <><Kartu namabrg={this.state.namabrg} harga={this.state.harga} jumlah={this.state.jumlah} 
      tambah={this.tambah} kurang={this.kurang} hasil={this.state.hasil}/></>
       );
  }
}
export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       nama:'RPL',
//       jumlah: 0,
//       harga: 0
//     }
//   }

//   ubah_state=() => {
//     this.setState({ nama:'Rekayasa Perangkat Lunak'})
//   }

//   tambah = () => {
//     this.setState({ jumlah:this.state.jumlah +1 })
//   }

  // kurang =() => {
  //   if (this.state.jumlah > 0) {
  //   this.setState({ jumlah:this.state.jumlah -1  })
  // }
// }
  
  
//   render() { 
//     return ( 
//       <>
//       <h1>{this.state.nama}</h1>
//       {/* <button onClick={this.ubah_state}>Ubah</button> */}
//       <h1>{this.state.jumlah}</h1>
//       <button onClick={this.kurang}>-</button>
//       <button onClick={this.tambah}>+</button>
//       </>
//      );
//   }
// }
 
// export default Kartu;