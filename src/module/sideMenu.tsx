const SIDEMENU_VALUE = 'sideMenu/SIDEMENU_VALUE' as const;

export const sideMenuValue = () => ({
  type: SIDEMENU_VALUE,
});

type SideMenuAction =
  | ReturnType<typeof sideMenuValue>;

type SideMenuState = {
  value: boolean;
};

const initialState: SideMenuState = {
  value: false
};

function sideMenu(
  state: SideMenuState = initialState,
  action: SideMenuAction
): SideMenuState {
  switch (action.type) {
    case SIDEMENU_VALUE:
      return { value: !state.value};
    default:
      return state;
  }
}

export default sideMenu;