import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import Res from './components/Res.jsx';
import Error from './components/Error.jsx';


function App() {



	const [ciudad, setCiudad] = useState('');
	const [pais, setPais] = useState('');
	
	const [response, setRespnse] = useState({});
	const [error, setError] = useState(false);

	const consultDatas = datas => {
		//console.log(datas);

		setCiudad(datas.ciudad);
		setPais(datas.pais);
		
	}
	

	useEffect(() => {
		
		if(ciudad === '') return;

		let keyAPI = "171636f1e57033ef063ae3271d79b74e";
		const consultAPI = async() => {
			
			const API = await `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${keyAPI}`;
			let res;
			try {
				

			res = await axios.get(API);
			setRespnse(res.data);

			} catch(e) {
				// statements
				setError(true);
			}


		}
		setError(false)

		consultAPI();


	}, [ciudad, pais]);
	
	let resComponent;

	if(ciudad === '' || pais === ''){
		resComponent = null;
	}else if (error) {
		resComponent = <Error mensaje="La Ciudad y el Pais no coinciden o no se Encuentran en nuestros Registros" />;
	}else{
		resComponent = <Res
							response={response}
						/>;
	}

  return (
    <>
        <div className="contenedor-form">
	    	<div className="container">
	    		<div className="row">
			  		<Header titulo="titulo"/>
			  		<Form consultDatas={consultDatas} />
			      	{ resComponent }
				</div>
			</div>
		</div>
    </>
  );
}

export default App;
