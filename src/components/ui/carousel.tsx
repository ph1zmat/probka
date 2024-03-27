'use client';

import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { cn } from '../../utils/cn'

const Carousel = ({ image }: { image: StaticImageData[] }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	return (
		<div className='w-full flex flex-col gap-6 h-auto'>
			<div className='w-full relative h-[450px]'>
				{currentSlide !== 0 && (
					<div
						className='absolute top-0 left-0 h-full flex text-stone-300 text-opacity-60 p-2 items-center bg-transparent hover:bg-stone-700 hover:text-white transition-all duration-500 hover:bg-opacity-50'
						onClick={() => setCurrentSlide(currentSlide - 1)}
					>
						<IconCaretLeftFilled className='size-8' />
					</div>
				)}
				<Image
					src={image[currentSlide]}
					alt={`Изображение ${currentSlide + 1}`}
					width={600}
					height={400}
					className='object-cover h-full w-full'
				/>
				{currentSlide !== image.length - 1 && (
					<div
						className='absolute top-0 right-0 h-full flex text-stone-300 text-opacity-60 p-2 items-center bg-transparent hover:bg-stone-700 hover:text-white transition-all duration-500 hover:bg-opacity-50'
						onClick={() => setCurrentSlide(currentSlide + 1)}
					>
						<IconCaretRightFilled className='size-8' />
					</div>
				)}
				<div className='absolute w-[80%] bottom-0 flex items-center gap-4 py-4 translate-x-1/3'>
					{image.map((image, index) => (
						<span
							key={index}
							className={cn(
								'size-2.5 rounded-full',
								currentSlide === index
									? 'bg-white'
									: 'bg-stone-300 bg-opacity-40',
							)}
						></span>
					))}
				</div>
			</div>
			<div className='flex items-center gap-2 justify-between'>
				{image.map((image, index) => (
					<Image
						src={image}
						onClick={() => setCurrentSlide(index)}
						alt={`Мини изображение ${currentSlide + 1}`}
						width={50}
						height={30}
						className={cn(
							'object-cover h-full border-2 p-1',
							index === currentSlide
								? 'border-white'
								: 'border-stone-300 border-opacity-40',
						)}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
