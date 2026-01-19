 
import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { GetQuoteDocument } from '@/__generated__/graphql';

function useQuoteById(id: string) {
	const navigate = useNavigate();
		const [getQuote, { loading: isLoading, error, data }] = useLazyQuery(
		GetQuoteDocument,
	);

	useEffect(() => {
		if (!id) return;
		getQuote({ variables: { quoteId: id }});  
	}, [id, getQuote]);
	useEffect(() => {
		if (error) {
			toast.error(error.message || 'An error occurred while fetching the quote.');
			navigate('/ems/manage-quote')}
	}, [error]);

	return {
		quote: data?.quote,
		isLoading,
		isError: !!error,
	};
}

export default useQuoteById;
