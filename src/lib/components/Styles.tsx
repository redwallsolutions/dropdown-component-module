import styled, { createGlobalStyle } from 'styled-components'
import Color from 'color'
import { IDropdownStyled, IDropdownItem } from './interfaces'

export const Reset = createGlobalStyle`
    .dropdown-component-module {
        font-family: Arial, Helvetica, Tahoma, Geneva, sans-serif;
        padding:0;
		margin:0;
		position: relative;
		z-index: 999;
        &, * {
            transition .2s;
            box-sizing: border-box;
        }
    }
`

export const Container = styled.ul<IDropdownStyled>`
	margin: 0;
	position: absolute;
	right: 0;
	top: -15px;
	opacity: ${props => (props.visible ? 1 : 0)};
	transform: scale(${props => (props.visible ? 1 : 0)});
	transform-origin: ${props => props.origin};
	transition: transform 0.25s 0.06s
			${props => props.visible && 'cubic-bezier(0, 1.09, 0.5, 1.05)'},
		opacity 0.25s 0.08s
			${props => props.visible && 'cubic-bezier(0, 1.09, 0.5, 1.05)'};
	display: block;
	padding: 8px 0;
	width: auto;
	min-width: 112px;
	max-width: 280px;
	height: auto;
	border-radius: 4px;
	box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.05), 0 0 8px 0 rgba(0, 0, 0, 0.1);
	background-color: ${props =>
		props.theme.mode === 'light' ? 'white' : '#444'};
`

export const Text = styled.li<IDropdownStyled & IDropdownItem>`
	display: block;
	height: 48px;
	line-height: 36px;
	padding: 6px 16px;
	font-size: 14px;
	background-color: transparent;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: pointer;
	color: ${props => (props.theme.mode === 'light' ? '#444' : 'white')};
	opacity: ${props => (props.visible ? 1 : 0)};
	transition: opacity 0.5s ${props => props.order / 15}s;
	&:hover {
		background-color: ${props =>
			props.theme.mode === 'light'
				? Color('white')
						.darken(0.08)
						.toString()
				: Color('#444')
						.lighten(0.2)
						.toString()}};
	}
`
