import React from 'react';
// import React, { Component } from 'react';
// import '../style/card.css';
// import styled from 'styled-components';
// import { profileData } from "./card-data";
// import { CardBox, ContainerCard } from './card-style';




// class Card extends Component {
//   constructor() {
//     super();
//     this.state = {
//       profileData
//     }
//   }
//   render() {
//     return (
//       <div className="card-container">
//         {
//           this.state.profileData.map((data) => {
//             return (
//               <div className="card-box" key={data}>
//                 <div className='card-front'>
//                   <img src={data.foto} alt="FOTO" />
//                 </div>
//                 <div className='card-back'>
//                   {data.profile}
//                 </div>
//               </div>
//             )
//           })
//         }
//       </div>
//     );
//   }
// }

const Card = () => {
  return (
    <div>
      <div>
        <h1>ini card njing</h1>
        <img src="../img/profile-4.jpeg" alt="profile-1" srcset="" />
      </div>
    </div>
  )
}




// class Card extends Component {
//   constructor() {
//     super();
//     this.state = {
//       galery: ["Andi", "Budi", "Caca", "Dimas"]
//     }
//   }
//   render() {
//     return (
//       <div className="card-container">
//         {
//           this.state.galery.map((data, key) => {
//             return (
//               <div className="card-box" key={key}>
//                 <div className='card-front'>
//                   {data}
//                 </div>
//                 <div className='card-back'>
//                   profile
//                   </div>
//               </div>
//             )
//           })
//         }
//       </div>
//     );
//   }
// }






// class Card extends Component {
//   constructor() {
//     super();
//     this.state = {
//       galery: ["Andi", "Budi", "Caca", "Dimas"]
//     }
//   }
//   render() {
//     return (
//       <ContainerCard>
//         {
//           this.state.galery.map((data, key) => {
//             return (
//               <CardBox key={key}>
//                 <div className='front'>
//                   {data}
//                 </div>
//                 <div className='back'>
//                   profile
//                   </div>
//               </CardBox>
//             )
//           })
//         }
//       </ContainerCard>
//     );
//   }
// }




// class Card extends Component {
//  render() {
//   return (
//    <div className="card-container">

//     <div className="card-box">
//      <div className='front'>

//      </div>
//      <div className='back'>
//       belakang
//      </div>
//     </div>
//    </div>

//   )
//  }

export default Card;