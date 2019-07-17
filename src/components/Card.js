import React from 'react';
// import React, { Component } from 'react';
// import '../style/Card.css';
// import styled from 'styled-components';
// import { profileData } from "./Card-data";
// import { CardBox, ContainerCard } from './card-style';



const CardContainer = {
  margin: '10px',
  perspective: 700,
  background: 'orange',
}

const CardBox = {
  background: 'blue',
  width: '290px',
  height: '400px',
  margin: '20px',
  display: 'inline-block',
  transition: 'all 0.5s ease',
  // transform: 'preserve-3d',
  cursor: 'pointer',
  // position: 'absolute',
  // radius: '10px',
  // display: 'flex',
  ':hover': {
    transform: 'rotateY(180deg)',
  }
}


// .card - box: hover {
//   transform: rotateY(180deg);
// }

const CardFront = {
  width: '290px',
  height: '400px',
  border: '10px',
  size: 'cover',
  position: 'absolute',
  backfaceVisibility: 'hidden',
}


const CardBack = {
  transform: 'rotateY(180deg)',
  color: 'red',
  backfaceVisibility: 'hidden',
}

// .card - front, .card - back, img {
//   position: absolute;
//   width: 290px;
//   height: 400px;
//   border - radius: 10px;
//   backface - visibility: hidden;
//   display: flex;
//   align - items: center;
//   justify - content: center;
// }


const Card = () => {
  return (
    <div className="Card-Container" style={CardContainer}>
      <div>
        <div style={CardBox}>
          <div style={CardFront}>
            <img src={require("./img/Profile-1.jpg")}
            />
          </div>
        </div>
      </div>


    </div>
  )
}









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

// const Card = () => {
//   return (
//     <div>
//       <div>
//         <h1>ini card njing</h1>
//         <img src="../img/profile-4.jpeg" alt="profile-1" srcset="" />
//       </div>
//     </div>
//   )
// }






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
//           this.state.profileData.map((data, key) => {
//             return (
//               <div className="card-box" key={key}>
//                 <div className='card-front'>
//                   <img src={require(data.img)} />
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