import React, {useState} from 'react'

const Form = ({consultDatas}) => {

	const [busqueda, guardarBusqueda] = useState({
		ciudad: '',
		pais: ''
	})
	
	const handleChange = e => {
		e.preventDefault();
		
		guardarBusqueda({
			...busqueda,
			[e.target.name]: e.target.value
		})
	}

	const validForm = () => {
		const {ciudad, pais} = busqueda;
		let noValid = !ciudad.trim() || !pais.trim();

		if ( ciudad.trim() === "" || pais.trim() ==="" ) {
			return noValid;
		}
	}

	const consultClima = e => {
		e.preventDefault();

		consultDatas(busqueda);
	}

	return (

		<div className="col s12 m6">
			<form
				onSubmit={consultClima}
			>
				<div className="input-field col s12">
					<label htmlFor="ciudad">Ciudad:</label>
					<input 
						type="text"
						name="ciudad"
						id="ciudad"
						onChange={handleChange}
					/>
				</div>
				<div className="input-field col s12">
					<select 
						name="pais" 
						onChange={handleChange}
					>
						<option value="">Selecciona un Pais...</option>
						<option value="US">Estados Unidos</option>
						<option value="MX">Mexico</option>
						<option value="AR">Argentina</option>
						<option value="CO">Colombia</option>
						<option value="CR">Costarica</option>
						<option value="ES">España</option>
						<option value="PE">Peru</option>
					</select>
				</div>
				<div className="input-field col s12">
					<input 
						disabled={validForm()}
						type="submit"
						className="waves-effect waves-light btn-large btn-block yellow accent-4" 
						value="Buscar Clima"/>
				</div>
			</form>
		</div>

	)
}

export default Form