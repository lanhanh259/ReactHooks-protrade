import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { getMapping } from '../apis/api'
import { mappingState } from '../recoil/atom/watchlistState'

export default function useMapping() {
	const [mapping, setMapping] = useRecoilState(mappingState)

	const {
		data: mappingData,
		status,
		isLoading,
		error,
	} = useQuery('mappingData', getMapping)

	useEffect(() => {
		const newMapping = mappingData?.data?.data?.hits
			? [...mappingData.data.data.hits]
			: []

		const _newMapping = mapping ? [...mapping, ...newMapping] : newMapping
		setMapping(_newMapping)
	}, [mappingData])

	return {
		data: mappingData,
		status,
		isLoading,
		error,
	}
}
