import { cloneDeep } from 'lodash';
import { iconRender } from '/@/utils/render';

export function transformRouteToMenu(routes: any[]) {
  const cloneRoutes = cloneDeep(routes);
  const menuList: any[] = [];

  cloneRoutes.forEach((route) => {
    const { path, title, icon, hide, menuType } = route;

    if (!hide) {
      const menu: any = {
        key: path,
        label:title,
        icon: iconRender({ icon: `i-${icon}` }),
        type: menuType,
      };

      if (route.children) {
        menu.children = transformRouteToMenu(route.children);
      }

      menuList.push(menu);
    }
  });

  return menuList;
}

export function transformMenuToSiderMenu(menus: any[]) {
  const cloneMenus = cloneDeep(menus);
  const menuList: any[] = [];

  cloneMenus.forEach((menu) => {
    if (menu.type === 'menu') {
      menu.tabs = menu.children;
      delete menu.children;
    } else {
      menu.children = transformMenuToSiderMenu(menu.children);
    }
    menuList.push(menu);
  });

  return menuList;
}
