// import React from "react";
// import PrimaryButton from "../../../../Common/PrimaryButton/PrimaryButton"
// import Label from "../../../../Common/Label/Label";
// import AccountInfo from '../AccountInfo/AccountInfo'
// import "./styles.css"

// class CreateAccount extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//         bankAccount: '',
//         balance: '',
//         currency: 'BGN'
//       };
//   }

  
//   render() {

//       return (
//         <div>
//           <div className="form">
//            <form className="createForm">
//               <div className="title">
//                 <Label text="Account:" className="label" />
//                 <input type="text" value={this.state.bankAccount} onChange={(e) => this.setState({bankAccount: e.target.value})} className="input"/>
//               </div>
              
//               <div className = "balance_currency">
//                   <Label text="Balance:" className="label" />
//                   <input type="text" value={this.state.balance} onChange={(e) => this.setState({balance: e.target.value})}  className="input__balance" placeholder="e.g 500"/>
          
//                 <Label text="Currency:" className="label"/>
//                 <select value={this.state.currency} onChange={(e) => this.setState({currency: e.target.value})} className="dropdown">
//                     <option value="BGN">BGN</option>
//                     <option value="USD">USD</option>
//                     <option value="EUR">EUR</option>
//                 </select>
//               </div>

//                 <PrimaryButton
//                   value="Create"
//                   onClick={this.props.onClick}
//                   className = "button"
//                 />
//             </form>
//             </div>
//         </div>
//       );
    
//   }
// };

// export default CreateAccount;