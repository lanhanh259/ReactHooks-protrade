import { atom } from 'recoil'

export const isDisplayState = atom({
	key: 'isDisplayState',
	default: true,
})

export const isPopupState = atom({
	key: 'isPopupState',
	default: false,
})
