import Image from 'next/image'
import { Product } from '../../type/interface'

const ProductList = ({ item }: { item: Product[] }) => {
	const categories = Array.from(new Set(item.map((dish) => dish.category)));
	return (
		<div className='max-h-full overflow-y-scroll'>
			{categories.map((categorie) => (
				<div
					className=''
					key={categorie}
				>
					<h2>{categorie}</h2>
					<div className="grid grid-cols-3">
					{item.map(
						({ img, name, category }, index) =>
							category === categorie && (
								<div key={`${categorie} ${index + 1}`}>
									<Image
										src={`/public/img/${img}`}
										alt={name}
										width={100}
										height={100}
									/>
									<h3>{name}</h3>
								</div>
							),
						)}
						</div>
				</div>
			))}
		</div>
	);
};

export default ProductList;
