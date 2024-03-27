import Image from 'next/image'
import { Product } from '../../type/interface'

const Product = ({ item }: { item: Product }) => {
	const { name, img, structure, price, weight, country } = item;
	return (
		<div className='grid grid-cols-2 w-full gap-8'>
			<h1 className='bernier text-gold text-4xl col-span-2'>{name}</h1>
			<div className=''>
				<Image
					src={`/public/img/${img}`}
					alt={name}
					width={400}
					height={400}
				/>
			</div>
			<div className='mont h-full flex flex-col justify-center text-white text-xl gap-4'>
				{structure !== '~' && <p className='text-whi'>Состав: {structure}</p>}
				{price !== '~' && <p>Цена: {price}р</p>}
				{weight !== '~' && <p>Объем: {weight}г</p>}
				{country !== '~' && country !== undefined && <p>Страна: {country}</p>}
				<button>
					<p>Добавить</p>
				</button>
			</div>
		</div>
	);
};

export default Product;
