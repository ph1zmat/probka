import Slide1 from '../../../public/img/slider1.webp';
import Slide10 from '../../../public/img/slider10.webp';
import Slide11 from '../../../public/img/slider11.webp';
import Slide2 from '../../../public/img/slider2.webp';
import Slide3 from '../../../public/img/slider3.webp';
import Slide4 from '../../../public/img/slider4.webp';
import Slide5 from '../../../public/img/slider5.webp';
import Slide6 from '../../../public/img/slider6.webp';
import Slide7 from '../../../public/img/slider7.webp';
import Slide8 from '../../../public/img/slider8.webp';
import Slide9 from '../../../public/img/slider9.webp';
import Carousel from '../ui/carousel';

const images = [
	Slide1,
	Slide2,
	Slide3,
	Slide4,
	Slide5,
	Slide6,
	Slide7,
	Slide8,
	Slide9,
	Slide10,
	Slide11,
];

const Main = () => {
	return (
		<section className='w-full grid grid-cols-2 py-12 my-auto gap-8'>
			<div className='w-full'>
				<Carousel image={images} />
			</div>
			<div className='flex flex-col justify-center gap-4'>
				<h1 className='bernier text-7xl text-gold pb-4 border-b-2 border-gold'>
					О НАС
				</h1>
				<p className='mont text-xl text-white'>
					«Хмельная пробка» — это Пивной бар, который разместился в историческом
					здании XIX века, в самом сердце Мозыря. Если вы хотите интересно и со
					вкусом провести вечер, «Хмельная пробка» — это то, что вам нужно.
					Здесь отличная атмосфера, великолепная еда и крафтовое пиво. Доставка
					еды.
				</p>
			</div>
		</section>
	);
};

export default Main;
