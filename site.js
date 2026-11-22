// 右上角 Contact 菜单：点菜单外面或按 Esc 时收起
document.querySelectorAll("details.contact").forEach(menu => {
  document.addEventListener("click", e => {
    if (menu.open && !menu.contains(e.target)) menu.open = false;
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menu.open) { menu.open = false; menu.querySelector("summary").focus(); }
  });
});
