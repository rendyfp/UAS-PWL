import React from 'react';
import ReactDOM from 'react-dom/client';
import LatihanFormkePHP from './LatihanFormkePHP';
import LatihanJSONdariPHP from './LatihanJSONdariPHP';
import LatihanJSON2dariPHP from './LatihanJSON2dariPHP';
import LatihanJSON3dariPHP from './LatihanJSON3dariPHP';
import Latihanbutton1 from './Latihanbutton1';

const Halaman = ()=>{
return (<>
    <LatihanFormkePHP/>
    <LatihanJSONdariPHP/>
    <LatihanJSON2dariPHP/>
    <LatihanJSON3dariPHP/>
    <Latihanbutton1/>
</>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Halaman/>);