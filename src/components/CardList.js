import React from 'react';
import {robots} from '../robots';
import Card from './Card';

const CardList = ({robots}) =>{

	//key olmazsa bir component silindiğinde DOM u baştan yüklemek zorunda kalıyor
	const cardsArray = robots.map((user,i) => {
		return (
			<Card key= {i}
			 id= {user.id} 
			 name= {user.name} 
			 email= {user.email}
			/> 
		)
	});
	return(
		<div>
		    {cardsArray}
	    </div>  
	);
}

export default CardList;