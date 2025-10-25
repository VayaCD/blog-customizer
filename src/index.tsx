import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { usePageState } from './hooks/usePageState';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const { pageState, updatePageState, resetPageState } = usePageState();

	const handleApply = (newState: typeof pageState) => {
		updatePageState(newState);
	};

	const handleReset = () => {
		resetPageState();
	};

	return (
		<main className={clsx(styles.main)}>
			<ArticleParamsForm
				initialState={pageState}
				onApply={handleApply}
				onReset={handleReset}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
