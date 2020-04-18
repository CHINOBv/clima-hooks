import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';

import axios from 'axios';

function App() {



	const [ciudad, setCiudad] = useState('');
	const [pais, setPais] = useState('');
	
	const [response, setRespnse] = useState({})

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

			const res = await axios.get(API);

			setRespnse(res.data);
		}

		consultAPI();

	}, [ciudad, pais]);
	

  return (
    <>
      <Header titulo="titulo"/>
      <Form consultDatas={consultDatas} />
    </>
  );
}

export default App;
