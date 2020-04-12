import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import DarkModeToggle from '../components/Toggle'
import Svg from '../svg'

const LinkRowContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`
const Title = styled.div`
	font-size: 2.5em;
	font-family: Ubuntu;
	color: ${(props) => props.color};
`
const Icon = styled.svg`
	display: flex;
	margin: 0em 1em;
	fill: ${(props) => (props.fill ? props.fill : '#fafafa')};
	width: ${(props) => (props.width ? props.width : '4em')};
	height: ${(props) => (props.width ? props.width : '4em')};
	padding-left: ${(props) => props.paddingLeft};
`

const Page = styled.div`
	position: relative;
	top: 10;
	bottom: 0;
	z-index: 1;
	display: flex;
	flex: 0 1 60em;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-start;
	background-color: ${(props) => props.palette.bg};
`
const A = styled.a`
	outline: none;
	text-decoration: none;
	&:hover {
		svg > svg {
			filter: drop-shadow(rgb(255, 82, 111) 3px 3px);
		}
	}
	cursor: pointer;
`
const SLink = styled(Link)`
	outline: none;
	text-decoration: none;
`
const Signature = styled(Icon)`
	align-self: flex-start;
	margin-left: 1em;
	margin-top: -1em;
	stroke-width: 0;
	stroke: black;
	fill: ${(props) => props.palette.text};
`
const PageMaxWidthConstraint = styled.div`
	background-color: ${(props) => props.bgColor};
	position: fixed;
	display: flex;
	justify-content: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
`

function Home(props) {
	const { text } = props.palette
	let [sigBgColor, setSigBgColor] = React.useState(350)
	let [sigBgAngle, setSigBgAngle] = React.useState(45)

	const sigBgRadialDistance = 8
	const sigBgHorzOffset = Math.cos((sigBgAngle / 360) * 2 * Math.PI)
	const sigBgVertOffset = Math.sin((sigBgAngle / 360) * 2 * Math.PI)
	const sigRight = sigBgRadialDistance * sigBgHorzOffset
	const sigBottom = sigBgRadialDistance * sigBgVertOffset
	const right = 3 * sigBgHorzOffset
	const bottom = 3 * sigBgVertOffset

	const newColorAndAngle = () => {
		setSigBgColor(Math.floor(Math.random() * 360))
		setSigBgAngle(Math.floor(Math.random() * 360))
	}

	function LinkRow(props) {
		return (
			<LinkRowContainer>
				<Title color={text}>{props.to}</Title>
				<Icon>{props.children}</Icon>
			</LinkRowContainer>
		)
	}

	return (
		<PageMaxWidthConstraint bgColor={props.palette.bg}>
			<Page palette={props.palette}>
				<Signature
					style={{
						filter: `drop-shadow(${sigRight}px ${sigBottom}px hsl(${sigBgColor}, 100%, 66%))`,
					}}
					palette={props.palette}
					width={'10em'}
					onClick={newColorAndAngle}
					viewBox={'0 0 875 536'}>
					<path d='M723 2.1c-8.9.6-17.8 3.4-22.4 7-1.4 1.1-2.6 1.7-2.6 1.3 0-.4-1.3.5-3 2.1-1.6 1.5-2.7 3.2-2.4 3.6.2.4-.5 1.4-1.6 2.2-1.1.7-1.7 1.7-1.4 2 .4.4-.1.9-1 1.3-.9.3-1.3 1-1 1.5.3.5-.2 1.2-1 1.5-.9.3-1.4 1-1.1 1.4.3.5-.3 1.3-1.2 1.9-1 .6-1.4 1.1-1 1.1.8 0-8.7 14.8-10.7 16.5-.6.5-1.7 2.1-2.4 3.5s-4 6.3-7.4 11c-3.3 4.7-7.3 10.7-8.7 13.5-4.7 8.9-16.4 27.5-17.3 27.5-.5 0-.7.4-.4.8.3.5-.3 1.8-1.4 2.9-1 1.2-1.6 2.3-1.3 2.7.3.3-.2.8-1.1 1.2-.9.3-1.4.9-1.1 1.4.2.4-.4 1.6-1.5 2.7-1 1.2-1.6 2.3-1.3 2.7.3.3-.2.8-1.1 1.2-.9.3-1.4.9-1.1 1.4.2.4-.6 1.8-1.8 3.1-1.2 1.3-2 2.5-1.7 2.6.3.1-.3 1.1-1.2 2.3-1 1.1-1.6 2-1.3 2 .3 0-1.8 3.7-4.6 8.2-2.9 4.6-7.9 12.8-11.2 18.3-3.3 5.5-6.4 10.3-6.9 10.6-.5.3-.9 1-.9 1.5.1.5-.4 1.6-1.1 2.5-.7.8-1.4 2.2-1.6 3-.2.8-.8 1.9-1.5 2.4-.7.6-1.3 1.7-1.5 2.5-.2.8-1.8 4-3.6 7s-4.6 7.9-6.1 10.7c-1.6 2.9-3.2 5.3-3.7 5.3s-.6.4-.3 1c.3.5.1 1-.5 1s-.8.4-.5 1c.3.5.1 1-.6 1s-.9.3-.6.7c.4.3.2 1.2-.4 2-.6.7-.9 1.3-.5 1.3s-.4 1.9-1.6 4.2c-1.2 2.4-2.3 4.8-2.4 5.5-.1.6-.6 1.8-1 2.6-.5.9-.7-6-.5-15.9.6-32.4-3.7-76-8.6-87.5-1.5-3.5-3.2-6.7-3.8-7.1-.5-.4-1-1.1-1-1.5-.1-1.2-5.5-6.8-6.6-6.8-.5 0-1.3-.6-1.8-1.3-.5-.8-1.1-1.3-1.4-1.3-.4 0-2.8-.9-5.4-2.2-4-1.8-6.6-2.2-16.3-2.2-11.8 0-11.9 0-23.7 5.7-1.5.8-8.8 8.4-8.6 9 .2.4-.3 1-1 1.5-2.4 1.4-5.7 12-5.7 18.1 0 3.1.7 10.2 1.5 15.7 2.2 15.6 2.9 27.5 1.7 27.5-.9 0-2.7-4.6-2.4-6.3.1-.4-.3-.7-1-.7-.6 0-.9-.3-.5-.6.3-.3-.3-1.5-1.3-2.7-1.1-1.1-1.7-2.3-1.5-2.7.3-.5-.2-1.1-1.1-1.4-.8-.3-1.2-1-.9-1.6.3-.5.1-1-.5-1s-1.3-.7-1.6-1.5c-.8-2.1-13.4-14.2-18-17.3-12.4-8.4-27.7-14.7-44.4-18.3-9-2-13.4-2.3-31.5-2.3-22.8 0-31.3 1-52.4 6.4-24.2 6.1-42.6 13.2-71.1 27.3-11.3 5.5-20.8 10-21.2 9.9-.5-.1-.8.3-.8.9 0 .5-.4.7-1 .4-.5-.3-1-.1-1 .6s-.3 1-.6.6c-.3-.3-1.5.3-2.7 1.3-1.1 1.1-2.4 1.7-2.9 1.4-.4-.3-.8 0-.8.7s-.3 1-.6.6c-.3-.3-1.5.3-2.7 1.3-1.1 1.1-2.4 1.7-2.9 1.4-.4-.3-.8 0-.8.6s-.4.9-.9.6c-.5-.4-1.1-.2-1.3.3-.1.5-6.8 4.8-14.8 9.6-8 4.9-16.6 10.4-19.2 12.3-2.7 1.8-4.8 3-4.8 2.5 0-.4-.5 0-1.1 1-.6.9-1.4 1.5-1.9 1.2-.4-.3-1.1.2-1.4 1.1-.3.8-1 1.3-1.5 1-.5-.3-1.2.1-1.5 1-.3.8-1 1.3-1.5 1-.5-.3-1.2.1-1.5 1-.3.8-1 1.2-1.6.9-.5-.3-1-.2-1 .3 0 .9-18.9 14-20.3 14-.5.1-1.5.9-2.3 1.9-.7 1-1.4 1.4-1.4.9 0-.6-.7-.1-1.5 1-.8 1-1.5 1.5-1.5.9 0-.5-.7.1-1.6 1.3-.8 1.2-1.9 2-2.4 1.7-.4-.3-1.1.2-1.4 1.1-.4.9-.9 1.4-1.2 1.1-.4-.3-1.5.4-2.5 1.6-1 1.2-1.8 1.9-1.9 1.5 0-.3-1 .2-2.2 1.3-5.2 4.4-31.8 23.8-31.8 23.1 0-.4-.5.1-1.1 1.1-.6.9-1.4 1.5-1.9 1.2-.5-.3-1.4.4-2 1.5-.6 1.1-1.5 1.8-2 1.5-.5-.3-1.4.4-2 1.5-.6 1.1-1.5 1.8-1.9 1.5-.5-.2-1.6.7-2.6 2.1-.9 1.4-1.9 2.3-2.2 2-.3-.3-1.4.5-2.4 1.7s-1.8 1.8-1.9 1.2c0-.5-.7.1-1.6 1.3-.8 1.2-2.1 2.2-2.7 2.2-.7 0-1.8.9-2.5 2-.7 1.2-1.7 1.8-2.2 1.5-.6-.3-1-.2-1 .3 0 1-22.6 19.2-23.9 19.2-.5 0-1.6 1.2-2.6 2.6-.9 1.4-1.9 2.3-2.2 2-.3-.3-1.4.6-2.5 1.9-1.1 1.4-2.3 2.3-2.8 2-.4-.3-1.5.7-2.4 2-.9 1.4-2.1 2.3-2.6 2-.5-.3-1.8.8-3 2.5-1.2 1.6-2.4 2.9-2.8 2.7-.4-.1-3.4 2.5-6.8 5.9-5.3 5.3-6.4 7-8.9 14.4-3.6 10.9-4.4 21.3-2 26.1 1.8 3.5 13.8 18.1 17.1 21 3.3 2.8 8.5 3.9 18.8 3.9 12.5 0 20.8-2.3 27.2-7.5 2.4-2 4.4-3.3 4.4-2.9 0 .4 1-.5 2.1-2 1.2-1.5 2.3-2.5 2.6-2.2.3.2 1.8-1 3.5-2.7 1.6-1.8 2.7-2.5 2.3-1.7-.4.8.5 0 2-1.8s3-3 3.5-2.7c.4.3 1.5-.7 2.5-2.1.9-1.4 1.9-2.3 2.2-2 .3.3 1.4-.6 2.5-1.9 1.1-1.4 2.4-2.3 2.9-2 .5.4.9.2.9-.3 0-1.1 27.1-22.9 27.7-22.4.2.2 1.3-.7 2.3-2 1.1-1.3 1.9-1.9 2-1.4 0 .4.9-.2 2-1.5 1-1.3 1.9-2 2-1.5 0 .4.9-.2 2-1.5 1-1.3 1.9-2 2-1.4 0 .5.7-.1 1.6-1.3.8-1.2 1.9-2 2.4-1.7.5.3 1.4-.4 2-1.6.7-1.1 1.4-1.8 1.7-1.5.3.3 1.4-.5 2.4-1.7s1.8-1.8 1.9-1.2c0 .5.7-.1 1.6-1.3.8-1.2 2-2 2.5-1.7.5.4.9.2.9-.3s2.1-2.4 4.7-4.2c2.7-1.9 8.7-6.3 13.5-9.8 4.8-3.5 9-6.4 9.5-6.4.4.1 1.2-.6 1.6-1.4.5-.8 1.2-1.2 1.7-.9.4.3 1-.2 1.4-1 .3-.8 1.2-1.5 2.1-1.5.8 0 1.5-.5 1.5-1 0-.6.6-1 1.4-1 .8 0 1.7-.7 2-1.6.3-.8 1-1.3 1.5-1 .5.3 1.2-.1 1.5-1 .3-.8 1-1.3 1.5-1 .5.3 1.2-.1 1.5-1 .3-.8 1-1.3 1.5-1 .5.3 1.2-.1 1.5-1 .3-.8 1-1.2 1.6-.9.5.3 1 .2 1-.3 0-1.2 20.9-14.9 21.6-14.2.3.3 1-.3 1.5-1.3.6-.9 1.4-1.5 2-1.2.5.4.9.2.9-.4 0-.6 1.4-1.8 3.1-2.7 1.7-.8 2.8-1.1 2.4-.5-.3.6-1.3 10.9-2 22.9-.8 11.9-1.7 23.7-2.1 26.2-.4 2.5-.6 4.9-.5 5.5.4 1.4-2.8 29.8-5.4 49.5-4.6 33.6-10.3 65.6-15.5 87.5-11.5 47.9-11.2 46.7-10.8 54.5.4 5.6 1.2 9 3.3 13.3 3.3 6.7 12.6 15.9 18 17.8 1.9.7 3.5 1.7 3.5 2.2 0 .4.4.6.9.2.5-.3 1.2-.1 1.6.5.4.6.9.9 1.3.6.4-.2 3.3 0 6.6.4 10.4 1.5 22.9-2.2 29.8-8.7 1.4-1.4 3-2.5 3.5-2.4.4.1.8-.4.8-1s.9-1.7 1.9-2.5c1.1-.8 1.7-1.4 1.3-1.4-.3 0 .5-2.4 1.8-5.2 2.9-6.5 10.1-36.5 16.1-67.2 2.5-12.7 4.8-23.8 5.1-24.6.4-.8.6-1.8.5-2.1-.1-.4.8-5.8 1.8-12 3.1-17.8 7.7-52.5 9.9-73.9 1.1-10.7 2.5-23.3 3-28 1.7-14.2 3.3-44.2 2.6-49.6-1.3-10.7-10.3-23.3-19.7-27.7-3.2-1.5-6.5-2.7-7.3-2.7-3.1 0-1.3-1.7 4.7-4.6 3.4-1.6 6.5-2.8 7-2.7.4.2.8-.2.8-.8 0-.5.5-.7 1-.4.5.3 1 .2 1-.3 0-1 21.1-9.6 32-13.1 29.1-9.2 59.5-11.7 73.5-6l6 2.4-.1 5c0 3.6-1.7 9.5-5.8 20.5-7.5 19.8-17.6 43-18.8 43-.5 0-.6.4-.3 1 .3.5.1 1-.5 1s-.8.4-.5 1c.3.5.1 1-.5 1s-.8.4-.5 1c.3.5.1 1-.6 1s-.9.3-.6.7c.8.7-8.9 19.5-11.5 22.3-.9 1-1.4 2.1-1.1 2.4.4.3.1.6-.6.6s-1 .4-.7.8c.3.5-.4 1.9-1.5 3-1.1 1.2-1.6 2.2-1.2 2.2.4 0-.1.7-1.2 1.6-1.1.8-1.9 1.8-1.8 2.2.4 1.3-19.5 30.6-22.7 33.3-1.1.9-1.7 1.9-1.4 2.2.3.3-.3 1.2-1.5 1.9s-2.1 1.9-2.1 2.6c0 .7-.7 1.5-1.5 1.8-.8.4-1.5 1.3-1.5 2 0 .8-.7 1.7-1.5 2-.8.4-1.2 1-.9 1.5.3.5.1.9-.4.9s-.9.6-1 1.2c0 .7-.8 3.3-1.7 5.8-3.6 9.4-1.5 24.6 4.4 32.7 1.6 2.3 2.9 4.3 2.8 4.4-.1.2 1.1 1.7 2.7 3.4 1.6 1.6 2.6 2.3 2.2 1.5-.4-.8.4-.2 1.8 1.3s2.6 2.6 2.6 2.2c0-.3 2.4.7 5.3 2.2 4.8 2.6 6.1 2.8 16.2 2.8 9.5 0 11.6-.3 15.3-2.3 2.3-1.2 4.2-1.9 4.2-1.5 0 .5.5 0 1.1-1 .6-.9 1.3-1.6 1.7-1.4.7.3 7.5-6.3 7.6-7.3 0-.8 23.8-32.5 25-33.2.6-.5.7-.8.1-.8-.5 0-.1-.7.9-1.5 1.1-.8 1.6-1.5 1-1.5-.5 0 0-.7 1-1.5 1.1-.8 1.7-1.5 1.3-1.5-.4 0 .9-2.6 2.9-5.8 2.1-3.1 6.6-10.7 10.2-16.7 3.5-6.1 6.8-11.2 7.3-11.3.5-.2.7-.8.3-1.3-.3-.5 0-.9.6-.9s.8-.5.5-1c-.3-.6-.1-1 .5-1s.8-.5.5-1c-.3-.6-.1-1 .4-1 .6 0 1-.3.9-.8-.1-.4 3.9-8.8 8.8-18.7 9.6-19.2 20.8-46.4 26.1-63.5l3.3-10.5-.6 7c-1.7 20.5-9.7 62.1-12.4 64.9-.5.5-.7 1.4-.4 2 .5 1.5-10.4 33-15.2 43.6-3.1 7-3.8 10-4.2 16.5-.5 9.9.7 14.6 5.9 22.4 8.3 12.4 19.4 18.4 34.4 18.5 7.8 0 9.8-.3 15.2-2.8 6.9-3.1 14.8-10.6 18.1-17.2 3.3-6.6 12.8-32.2 17.2-46.4 2.3-7.4 5-15.1 6-17 1.9-3.7 10-33.7 10-37.2 0-1.6 1-.9 4.6 3.1 5.5 6.1 11.2 10.1 19 13.2 4.9 1.9 7.7 2.3 16.9 2.3 13.3-.1 17.1-1.3 56.9-18.3 14.3-6 26.3-10.8 26.8-10.5.4.3.8.1.8-.4 0-1.1 6-3.5 6-2.4 0 .4.4.2.8-.5 1.7-2.7 64.9-26 82.2-30.3 2.5-.6 5.2-1.3 6.1-1.6 1.3-.4 1.8.5 2.3 3.8.4 2.4 1.7 6.7 3.1 9.6 1.3 2.9 2.6 5.6 2.7 6 .9 2.1 11.3 10.3 16.1 12.6 10.4 4.9 24.8 5.2 33.7.6 2.1-1 4-1.6 4.4-1.3.3.4.6.1.6-.5 0-.7.3-1.1.8-1 1.2.3 8.6-7.7 10.4-11.3 13.8-27.8 16.5-38.2 15.6-60.4-.3-9.4-.8-11.9-3.1-16.9-3.2-6.9-8.6-14.5-10.4-14.6-.6 0-1.8-.8-2.5-1.9-.7-1-1.6-1.8-2-1.7-.4 0-1.6-.7-2.7-1.6-1.1-.9-2.2-1.4-2.5-1.1-.3.4-.6 0-.6-.7s-.2-1.1-.5-.8c-.3.3-3.4-.3-6.8-1.4-3.4-1-9.6-2.2-13.7-2.5-14.3-1.1-51.4 5-77.6 12.8-7.6 2.3-14.6 4.2-15.4 4.3-.8 0-1.7.4-2 .7-.3.3-6.8 2.7-14.5 5.3-15.7 5.4-41.5 15.4-43 16.7-2.5 2.4-2.1.3 1.2-5.1 1.9-3.3 4-6 4.5-6s.6-.5.3-1c-.3-.6-.1-1 .5-1s.8-.5.5-1c-.3-.6.1-1.3.9-1.6.9-.3 1.3-1 1.1-1.5-.3-.4.2-1.7 1.2-2.7 1-1 1.9-2.5 2.1-3.3.2-.8 1-1.9 1.7-2.5.8-.6 1.2-1.4.8-1.7-.3-.4.2-.9 1.1-1.3.9-.3 1.3-1 1-1.5-.3-.5 0-.9.6-.9s.9-.4.5-.9c-.3-.6.3-1.4 1.2-2 1-.5 1.6-1.2 1.3-1.4-.9-.9 41.2-66.9 43.1-67.5.5-.2.7-.8.3-1.3-.3-.5.2-1.2 1-1.5.9-.3 1.3-1 1-1.5-.3-.5.2-1.2 1-1.5.9-.3 1.3-1 1-1.5-.3-.5.2-1.2 1-1.5.9-.3 1.3-1 1-1.5-.3-.5.2-1.2 1-1.5.9-.3 1.3-1 1-1.5-.3-.5.2-1.2 1-1.5.9-.3 1.3-1 1-1.5-.3-.5.2-1.2 1-1.5.9-.3 1.3-1 1-1.5-.3-.5.2-1.2 1-1.5.9-.3 1.4-1 1.1-1.4-.3-.5.1-1.2.9-1.7.8-.4 1.5-1.1 1.6-1.5 0-.4 1.5-3.8 3.3-7.5 5.6-12.1 4.4-25.6-3.4-36.2-1.6-2.3-2.7-4.1-2.4-4.1.2 0-1-1.5-2.8-3.3-1.8-1.9-3.4-3.4-3.7-3.3-.3 0-2.4-1.2-4.7-2.7-2.4-1.5-4.7-2.7-5.3-2.7-.5 0-1-.5-1-1.2 0-.6-.3-.8-.6-.5-.4.3-1.4.3-2.3-.1-.9-.4-5.4-.5-10.1-.1zM489.9 176.3c0 2.1-.1 2.1-.9.2-1.2-2.8-1.2-3.7 0-3 .6.3 1 1.6.9 2.8z' />
				</Signature>

				<A href='https://hire.travisk.info'>
					<LinkRow to='About'>
						<Icon
							width={Svg.about.width}
							fill={props.palette.text}
							paddingLeft='0.3em'
							viewBox={Svg.about.viewbox}>
							<path d={Svg.about.path} />
						</Icon>
					</LinkRow>
				</A>

				<A href='https://travisk.info/projects'>
					<LinkRow to='Projects'>
						<Icon
							width={Svg.projects.width}
							fill={props.palette.text}
							paddingLeft='0.15em'
							viewBox={Svg.projects.viewbox}>
							<path d={Svg.projects.path} />
						</Icon>
					</LinkRow>
				</A>

				<A href='https://travisk.info/resume?noheader'>
					<LinkRow to='Resume'>
						<Icon
							width={Svg.resume.width}
							fill={props.palette.text}
							viewBox={Svg.resume.viewbox}>
							<path d={Svg.resume.path} />
						</Icon>
					</LinkRow>
				</A>

				<A href='https://travisk.info/contact'>
					<LinkRow style={{ paddingLeft: '0.5em' }} to='Contact'>
						<Icon
							width={Svg.contact.width}
							fill={props.palette.text}
							paddingLeft='0.3em'
							viewBox={Svg.contact.viewbox}>
							<path d={Svg.contact.path} />
						</Icon>
					</LinkRow>
				</A>
			</Page>
		</PageMaxWidthConstraint>
	)
}

export default Home
