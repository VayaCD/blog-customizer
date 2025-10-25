import { useState, useEffect } from 'react';
import { defaultArticleState, type ArticleStateType } from 'src/constants/articleProps';

export const usePageState = () => {
	const [pageState, setPageState] = useState<ArticleStateType>(defaultArticleState);

	const applyStyles = (state: ArticleStateType) => {
		const root = document.documentElement;
		root.style.setProperty('--font-family', state.fontFamilyOption.value);
		root.style.setProperty('--font-size', state.fontSizeOption.value);
		root.style.setProperty('--font-color', state.fontColor.value);
		root.style.setProperty('--container-width', state.contentWidth.value);
		root.style.setProperty('--bg-color', state.backgroundColor.value);

		document.body.style.backgroundColor = state.backgroundColor.value;
	};

	useEffect(() => {
		applyStyles(pageState);
	}, []);

	useEffect(() => {
		applyStyles(pageState);
	}, [pageState]);

	const updatePageState = (newState: ArticleStateType) => {
		setPageState(newState);
	};

	const resetPageState = () => {
		setPageState(defaultArticleState);
	};

	return {
		pageState,
		updatePageState,
		resetPageState
	};
};
