import NextImage from 'next/image'
import { FC } from 'react'

// eslint-disable-next-line jsx-a11y/alt-text
const Image: FC<{
	src: string
	width: number
	height: number
	alt: string
	className: string
	[key: string]: any
}> = (props) => <NextImage {...props} />

export default Image
