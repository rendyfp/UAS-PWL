import React from 'react';
import ReactDOM from 'react-dom/client';
import LatihanJSON2dariPHP from './LatihanJSON2dariPHP';


const Halaman = ()=>{
return (<>
    <LatihanJSON2dariPHP/>

</>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Halaman/>);