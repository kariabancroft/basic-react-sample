import React from 'react';
import '../App.scss';
import { Row, Callout, Colors, Alignments } from 'react-foundation';

 const Dashboard = (props) => {
   return (
     <div>
       <h3>Welcome to your dashboard!</h3>
       <div>
         <Callout alignment={Alignments.RIGHT} color={ Colors.SECONDARY }>
           <p>You have { props.items } total items today</p>
         </Callout>
       </div>
     </div>
   );
};

export default Dashboard;
