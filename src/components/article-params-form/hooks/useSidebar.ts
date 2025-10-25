import { useState, useRef, useEffect } from 'react';

export const useSidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const sidebarRef = useRef<HTMLElement>(null);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	return {
		isOpen,
		sidebarRef,
		handleToggle,
		handleClose
	};
};
