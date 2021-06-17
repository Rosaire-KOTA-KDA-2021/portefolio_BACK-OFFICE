import { useQuery } from "react-query";

export const CreateProjectQuery = (keyName, apiMethod) => {
	return useQuery(keyName, () => apiMethod, {
		keepPreviousData: true,
		enabled: true,
	});
};
