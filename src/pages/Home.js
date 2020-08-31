import React from 'react';

const categories = [
	{ name: 'Whiskey', link: '/whiskey' },
	{ name: 'Vodka', link: '/vodka' },
	{ name: 'Gin', link: '/gin' },
	{ name: 'Rum', link: '/rum' },
	{ name: 'Tequila', link: '/tequila' }
];

export default function Home() {
  return (
    <div className="Menu">
				<ul>
					{categories && categories.map(
						(item, index) => {
							return (
								<li key={ index }><a href={ item.link }>{ item.name }</a></li>
							)
						}
					)}

				</ul>
			</div>
  );
}

