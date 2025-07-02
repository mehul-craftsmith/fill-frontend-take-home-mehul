
/*
	This module handles the drag and drop functionality
	for rearranging the pages
*/


let draggedPage = null;
const menu = document.getElementById("page-menu");

function normalizePageGaps(container) {
	// Remove all existing gaps
	document.querySelectorAll('.gap-between-pages').forEach(gap => gap.remove());

	// Get updated list of pages
	const pages = [...document.querySelectorAll('.page')];

	pages.forEach((page, index) => {
		if (index < pages.length - 1) {
			// Insert gap after every page except the last
			const gap = document.createElement('div');
			gap.className = 'gap-between-pages';
			const addButton = document.createElement('button');
			addButton.textContent = '+';
			gap.appendChild(addButton);
			container.insertBefore(gap, pages[index + 1]);
		}
	});
}

menu.querySelectorAll(".page").forEach(page => {
	page.addEventListener("dragstart", () => {
		draggedPage = page;
	});

	page.addEventListener("dragover", e => {
		e.preventDefault();
	});

	page.addEventListener("drop", e => {
		e.preventDefault();
		if (!draggedPage || draggedPage === page) return;

		const targetRect = page.getBoundingClientRect();
		const dropX = e.clientX;

		if (dropX < targetRect.left + targetRect.width / 2) {
			// Drop before
			menu.insertBefore(draggedPage, page);
		} else {
			// Drop after
			menu.insertBefore(draggedPage, page.nextSibling);
		}

		normalizePageGaps(menu);
	});
});

// Drop in empty space = move to start or end
menu.addEventListener("dragover", e => {
	e.preventDefault();
});

menu.addEventListener("drop", e => {
	e.preventDefault();
	if (!draggedPage) return;

	const pages = [...menu.querySelectorAll(".page")];
	const dropX = e.clientX;

	const firstRect = pages[0].getBoundingClientRect();
	const lastRect = pages[pages.length - 1].getBoundingClientRect();

	if (dropX < firstRect.left) {
		menu.insertBefore(draggedPage, pages[0]);
	} else if (dropX > lastRect.right) {
		menu.appendChild(draggedPage);
	}

	normalizePageGaps(menu);
});
