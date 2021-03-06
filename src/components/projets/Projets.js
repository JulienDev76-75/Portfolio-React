import React from "react";
import Shifumi from "./cardsprojects/Shifumi";
import Memory from "./cardsprojects/Memory";
import Hangman from "./cardsprojects/Hangman";
import Terredegeek from "./cardsprojects/Terredegeek";

//i call the data.json file which is based on projetsFolder
//i map it, it means for every id inside the data.json, it will create div elements
//datajson structure : id-titre-contenu, to reach it : post.titre etc.
//post is a free parameter for data function, necessary to reach content of data.json

class Projets extends React.Component {
  constructor (props) {
      super (props);
  }

  render () {
      return (
          <div className="container-fluid d-flex flex-column py-4" id="projet">
              <section id="mesprojets" className="container-fluid w-75 mx-auto">
                  <h2 className="text-center text-white pb-1 pt-4 w-75 mx-auto">Mes Projets</h2><hr className="hr w-100"></hr>
                  <div className="row py-4">
                      <Shifumi />
                      <Hangman />
                      <Terredegeek />
                      <Memory />
                  </div>
              </section>
          </div>
      );
  }
}

export default Projets;

// function Projets (){
//   return (
//       <div id="projet" className="project_list">
//           <h2 id="mesprojets" className="text-center text-white pt-5">Mes projets<hr className="hr w-100"></hr></h2>
//           {Data.map(post => {
//           return (
//           <div className="d-flex justify-content-center flex-row pt-5 text-center w-100">
//               <div className="col-sm-6">
//                 <div className="card bg-secondary text-white">
//                   <div className="card-body">
//                     <h3 className="card-title">{post.titre}</h3>
//                     <p className="card-text">{post.contenu}</p>             
//                   </div>
//                 </div>
//               </div>
//           </div>
//           );
//       })}
//       </div>
//   )

// }
// export default Projets;













