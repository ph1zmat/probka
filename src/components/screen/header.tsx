'use client';

import {
	IconAlignLeft,
	IconAlignRight,
	IconShoppingCartFilled,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../../public/img/logo.webp';

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<header className='flex w-full py-4 items-center justify-between max-h-36'>
				<div className=''>
					<IconShoppingCartFilled className='size-12 text-white' />
				</div>
				<div className=''>
					<Link href={'/'}>
						<Image
							src={Logo}
							alt=''
							width={120}
							height={120}
							className=''
						/>
					</Link>
				</div>
				<div
					className=''
					onClick={() => setOpen(!open)}
				>
					{open ? (
						<IconAlignLeft className='size-12 text-white' />
					) : (
						<IconAlignRight className='size-12 text-white' />
					)}
				</div>
			</header>
			<motion.div
				animate={!open ? { translateX: '800px' } : { translateX: '0px' }}
				className='absolute flex z-20 top-28 right-0 h-[80%] w-[45%]'
				transition={{ duration: 1, type: 'spring' }}
			>
				<ul className='uppercase flex flex-col h-full w-full'>
					<li className='nav-item p-4 text-3xl w-full h-[20%]'>
						<Link
							href={'/'}
							className='border-[2px] border-white rounded-md w-full h-full flex items-center justify-start p-4 text-white'
						>
							<p className=' border-y-[2px] border-white bernier'>Главная</p>
						</Link>
					</li>
					<li className='nav-item p-4 text-3xl w-full h-[20%]'>
						<Link
							href={'/alkohol'}
							className='border-[2px] border-white rounded-md w-full h-full flex items-center justify-start p-4 text-white'
						>
							<p className=' border-y-[2px] border-white bernier'>
								Крафтовое пиво|Настойки Коктейли|Алкогольные напитки
							</p>
						</Link>
					</li>
					<li className='nav-item p-4 text-3xl w-full h-[20%]'>
						<Link
							href={'/gastropub'}
							className='border-[2px] border-white rounded-md w-full h-full flex items-center justify-start p-4 text-white'
						>
							<p className=' border-y-[2px] border-white bernier'>
								Вкусная еда - Доставка
							</p>
						</Link>
					</li>
					<li className='nav-item p-4 text-3xl w-full h-[20%]'>
						<Link
							href={'/news'}
							className='border-[2px] border-white rounded-md w-full h-full flex items-center justify-start p-4 text-white'
						>
							<p className=' border-y-[2px] border-white bernier'>Акции</p>
						</Link>
					</li>
					<li className='nav-item p-4 text-3xl w-full h-[20%]'>
						<Link
							href={'/contact'}
							className='border-[2px] border-white rounded-md w-full h-full flex items-center justify-start p-4 text-white'
						>
							<p className=' border-y-[2px] border-white bernier'>Контакты</p>
						</Link>
					</li>
				</ul>
			</motion.div>
		</>
	);
};

export default Header;
