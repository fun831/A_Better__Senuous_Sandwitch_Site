import React, { Component } from 'react';
import SandwichItem from './sandwich_item';
import Navbar from './navbar';

export default class Menu extends Component {
	
	 render() {
	 this.sandwichs = [
			{ id: 0, "title": "The Sensuous ", "description": "Ham, Turkey, and Roast Beef with Jack Cheese", "active": false },
			{ id: 1, "title": "The Stimulator ", "description": "Ham and Turkey with Your Choice of Cheese" , "active": false },
			{ id: 2, "title": "The Enticer ", "description": "Pastrami with Jack Cheese " , "active": false },
			{ id: 3, "title": "The Spicy Enticer ", "description": "Pastrami, Pepperoni, and Italian Sausage with Your Choice of Cheese " , "active": false },
			{ id: 4, "title": "The Tantalizer ", "description": "Pastrami, Roast Beef, and Turkey with Jack Cheese " , "active": false },
			{ id: 5, "title": "The Satisfier ", "description": "Chicken Breast with Jack Cheese " , "active": false },
			{ id: 6, "title": "The Succulent Seafood Delight ", "description": "Crab and Assorted Seafood with Your Choice of Cheese " , "active": false },
			{ id: 7, "title": "The Au Natural ", "description": "Olives and Cream Chesse " , "active": false },
			{ id: 8, "title": "The American Dream ", "description": "Roast Beef with Your Choice of Cheese " , "active": false },
			{ id: 9, "title": "The Big Dipper ", "description": "Roast Beef with Au Jus and Your Choice of Cheese" , "active": false },
			{ id: 10, "title": "The Super Saucy ", "description": "Roast Beef Smothered in Barbecue Sauce with Your Choice of Cheese " , "active": false },
			{ id: 11, "title": "The Figmentation ", "description": "Your Choice of Meats and Cheese" , "active": false },
			{ id: 12, "title": "The Sorry, Charlie ", "description": "Tuna with Your Choice of Chesse " , "active": false },
			{ id: 13, "title": "The Bodacious ", "description": "Ham and Salami with Your Choice of Cheese " , "active": false }
		];

		this.meats = [
			{ id : 0, "type": "Ham" , "active" : false},
			{ id : 1, "type": "Turkey" , "active" : false},
			{ id : 2, "type": "Roast Beef" , "active" : false},
			{ id : 3, "type": "Pepperoni", "acitve": false},
			{ id : 4, "type": "Seafood", "active" :false},
			{ id : 5, "type": "Salami", "active" :false},
			{ id : 6, "type": "Pastrami", "active" : false},
			{ id : 7, "type": "Italian Sausage", "active": false},
			{ id : 8, "type": "Chicken Breast", "active" : false},
			{ id : 9, "type": "Tuna", "active" : false},
			{ id : 10, "type":"Crab", "active" : false}
		]

		
		this.meats = [
			{ id : 0, "type": "Ham" , "active" : false},
			{ id : 1, "type": "Turkey" , "active" : false},
			{ id : 2, "type": "Roast Beef" , "active" : false},
			{ id : 3, "type":  "Pepperoni", "active" : false},
			{ id : 4, "type":  "Seafood", "active" : false},
			{ id : 5, "type":  "Salami", "active" : false},
			{ id : 6, "type":  "Pastrami", "active" : false},
			{ id : 7, "type":  "Italian Sausage", "active" : false},
			{ id : 8, "type":  "Chicken Breast", "active" : false},
			{ id : 9, "type":  "Tuna", 'active' : false},
			{ id : 10, "type":  "Crab", "active" : false}
		]
	
		
		
		

		return (
			<div>			
				<Navbar/>
				<div className="pi">
					<div classNAme="p">
						<h1 className="header">MENU</h1>
					</div>

					<div className="premium">
						<div className="premium_header">PREMIUM</div>
						{
						this.sandwichs.map(sandwich => {
							return (
								<SandwichItem key={sandwich._id} {...sandwich}/>
							)
						})
						}
					</div>

					<div className="build">
						<h1>BUILD YOUR OWN</h1>
					</div>

				</div>
			</div>
					
				

				
			
		);
	}
}


