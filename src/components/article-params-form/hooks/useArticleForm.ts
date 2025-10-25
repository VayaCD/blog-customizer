import { useState, useEffect } from 'react';
import { defaultArticleState, type ArticleStateType } from 'src/constants/articleProps';

export const useArticleForm = (initialState?: ArticleStateType) => {
	const [formState, setFormState] = useState<ArticleStateType>(initialState || defaultArticleState);

	useEffect(() => {
		if (initialState) {
			setFormState(initialState);
		}
	}, [initialState]);

	const handleFormChange = (field: keyof ArticleStateType, value: any) => {
		setFormState(prev => ({
			...prev,
			[field]: value
		}));
	};

	const handleReset = () => {
		setFormState(defaultArticleState);
	};

	return {
		formState,
		handleFormChange,
		handleReset
	};
};
