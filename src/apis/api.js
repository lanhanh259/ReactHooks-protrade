import axios from 'axios'

export const getMapping = async () => {
	const api = 'https://finfo-api.vndirect.com.vn/v3/derivatives/mapping'
	const res = await axios.get(api)
	return res
}

// export const getChart = async (symbol) => {
// 	const api = 'https://dchart.vndirect.com.vn'
// 	const res = await axios.get(api, {
// 		url: `${api}/`,
// 		params: {
// 			theme: 'dark',
// 			timeframe: 1,
// 			disableSyncSymbol: true,
// 			symbol:symbol,
// 			domain: 'https://protrade-trial.vndirect.com.vnl',
// 			t: 'function%20now()%20{%20[native%20code]%20',
// 		},
// 	})
// 	return res
// }
