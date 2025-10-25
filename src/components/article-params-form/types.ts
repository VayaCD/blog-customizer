import { ArticleStateType } from 'src/constants/articleProps';

export interface ArticleParamsFormProps {
	initialState?: ArticleStateType;
	onStateChange?: (state: ArticleStateType) => void;
	onApply: (state: ArticleStateType) => void;
	onReset: () => void;
}
