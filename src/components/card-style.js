import styled from 'styled-components';


export const ContainerCard = styled.div`
   margin: 10px;
   perspective: 700;
  `


export const CardBox = styled.div`
   width: 200px;
   height: 300px;
   transition:all 0.6s ease;
   transform-style: preserve-3d;
   cursor: pointer;

   &:hover {
    transform: rotateY('180deg');
   }

   .back {
    transform: rotateY('180deg');
    background-color: blue;
   }
   `



// export const ContainerCard = styled.div`
//    margin: 10px;
//    perspective: 700;
//    display: flex;
//   `

// export const CardBox = styled.div`
// width: 200px;
// height: 200px;
// transition: 0.5s ease;
// transform-style: preserve - 3d;
// cursor: pointer;

//  &:hover{
//   transform: rotateY('10deg');
//  }

// `