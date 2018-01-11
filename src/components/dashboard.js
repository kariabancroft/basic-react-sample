import React from 'react';
import '../App.scss';
import { Row, Callout, Colors, Alignments } from 'react-foundation';

 const Dashboard = (props) => {
   return (
     <Row>
       <p><h3>Welcome to your dashboard!</h3></p>
       <div >
         <Callout alignment={Alignments.RIGHT} color={ Colors.SECONDARY }>
           <p>You have { props.items } total items today</p>
         </Callout>
       </div>
     </Row>
   );
};

export default Dashboard;
