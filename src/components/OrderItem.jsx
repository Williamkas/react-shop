import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png';

const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);	
	}

	return (
		<>
			<div className="OrderItem">
				<figure>
					<img src={product.images[0]} alt={product.title} />
				</figure>
				<p>{product.title}</p>
				<p>${product.price}</p>
				<img src={close} alt="close" onClick={() => handleRemove(product)}/> {/*Es muy importante al realizar el onClick No llamar directamente la función sino usar la siguiente sintaxis: () => handleRemove() Ésto evitará que se llame la función automáticamente, sino que se llame al realizar el click*/}
			</div>
		</>
	);
}

export default OrderItem;