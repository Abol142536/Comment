import React from 'react';
import  ReactDom from  'react-dom';
import CommentDetails from './CommentDetails';

function App() {
    return (
     <div className="ui comments container">
        <CommentDetails  author="Ali"  date="1 days ago" comment="it was really good"/>
         <CommentDetails  author="mohammad"  date="30 days ago" comment="it was really usfull"/>
         <CommentDetails author="Abolfazlsoltaninia"  date="29 days ago" comment="it was really bad"/>
     </div>
    );
};
const root = document.getElementById('root');
ReactDom.render(<App/>, root);