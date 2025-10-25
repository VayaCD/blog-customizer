import React from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr
} from 'src/constants/articleProps';
import { useArticleForm, useSidebar } from './hooks';
import { ArticleParamsFormProps } from './types';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm: React.FC<ArticleParamsFormProps> = ({
	initialState,
	onStateChange,
	onApply,
	onReset
}) => {
	const { formState, handleFormChange, handleReset: resetForm } = useArticleForm(initialState);
	const { isOpen, sidebarRef, handleToggle, handleClose } = useSidebar();

	const handleFormChangeWrapper = (field: keyof typeof formState, value: any) => {
		const newFormState = { ...formState, [field]: value };
		handleFormChange(field, value);
		onStateChange?.(newFormState);
	};

	const handleApply = () => {
		onApply(formState);
		handleClose();
	};

	const handleReset = () => {
		resetForm();
		onReset();
		handleClose();
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleToggle} />
			<aside
				ref={sidebarRef}
				className={`${styles.container} ${isOpen ? styles.container_open : ''}`}
			>
				<form className={styles.form}>
					<div className={styles.title}>
						<Text size={31} weight={800} uppercase>
							Задайте параметры
						</Text>
					</div>

					<div style={{ height: '50px' }} />

					<Select
						title="Шрифт"
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(option) => handleFormChangeWrapper('fontFamilyOption', option)}
					/>

					<div style={{ height: '50px' }} />

					<RadioGroup
						title="Размер шрифта"
						name="fontSize"
						selected={formState.fontSizeOption}
						options={fontSizeOptions}
						onChange={(option) => handleFormChangeWrapper('fontSizeOption', option)}
					/>

					<div style={{ height: '50px' }} />

					<Select
						title="Цвет шрифта"
						selected={formState.fontColor}
						options={fontColors}
						onChange={(option) => handleFormChangeWrapper('fontColor', option)}
					/>

					<div style={{ height: '50px' }} />
					<Separator />
					<div style={{ height: '50px' }} />

					<Select
						title="Цвет фона"
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={(option) => handleFormChangeWrapper('backgroundColor', option)}
					/>

					<div style={{ height: '50px' }} />

					<Select
						title="Ширина контента"
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={(option) => handleFormChangeWrapper('contentWidth', option)}
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='button'
							type='clear'
							onClick={handleReset}
						/>
						<Button
							title='Применить'
							htmlType='button'
							type='apply'
							onClick={handleApply}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
