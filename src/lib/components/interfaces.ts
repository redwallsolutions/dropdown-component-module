import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'
import { ReactNode } from 'react';

export interface IItems {
    text: string,
		handler?: (event:any) =>void,
		icon?: ReactNode
}

export interface IDropdownStyled extends ICommonProps{
    /**
     * The visible prop is a boolean value that defines if the dropdown will appear or not.
     */
	visible?: boolean

	/**
	 * The origin prop is a string value that defines the origin of transformation (see css transform origin)
	 */
	origin?:string
}

export interface IDropdownItem {
    order: number
}
export interface IDropdown {
	/**
	 * The items prop is an array of IItems with the following attributes:
	 *
	 * `text?:string` and `handler?:(event:any) =>void`
	 */
	items: IItems[]
}