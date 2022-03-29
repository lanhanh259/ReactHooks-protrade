import axios from 'axios'

export const getMapping = async () => {
	const api = 'https://finfo-api.vndirect.com.vn/v3/derivatives/mapping'
	const res = await axios.get(api)
	return res
}
