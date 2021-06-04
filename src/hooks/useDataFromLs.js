import { useState, useEffect, useCallback } from 'react';

function useDataFromLs(key, cb) {
	const [value, setValue] = useState();

	useEffect(() => {
		const data = window.localStorage.getItem(key);
		if (data) {
			setValue(JSON.parse(data));
		} else {
			cb();
		}
	}, [key]);

	return value;
}

export default useDataFromLs;
