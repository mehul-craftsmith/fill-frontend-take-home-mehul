let draggedPage = null;
const menu = document.getElementById("page-menu");

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
});
