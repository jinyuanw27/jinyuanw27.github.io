// 右上角 Contact 菜单：点菜单外面或按 Esc 时收起
document.querySelectorAll("details.contact").forEach(menu => {
  document.addEventListener("click", e => {
    if (menu.open && !menu.contains(e.target)) menu.open = false;
  });
  // 菜单收起时，把 Email 子菜单也收起
  menu.addEventListener("toggle", () => {
    if (!menu.open) menu.querySelectorAll("details.sub").forEach(d => d.open = false);
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menu.open) { menu.open = false; menu.querySelector("summary").focus(); }
  });
});
