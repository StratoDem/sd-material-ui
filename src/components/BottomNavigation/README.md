## BottomNavigation
A component designed to hold text or icons which help guide the user to navigate around a page
or app by linking to those sections, and automatically scrolling the user there.

## How to use
After importing `sd_material_ui`, add `sd_material_ui.BottomNavigation` to the page. Populate it
by adding a list of dictionaries to the `navItems` prop. See the `usage.py` file for an example.

## Examples of props and their uses
- `id` (**Required**): The ID used for this component by Dash
- `navItems` (**Required**): The contents of the component which can provide links to other parts of
the app or page. It can take the following props:
  - `label`: A text description underneath the icon for this item
  - `icon`: An image or text icon representing this item.
  - `value`: unused at this time
  - `targetId`: The ID of a component elsewhere in the app or page to jump to when this item is
  selected
  - `iconClassName`: A class that can be applied to the item `span`
      [Example](/../../static/bottomnavigation-iconClassName.png)
- `selectedIndex`: The initial selected index for the BottomNavigation
- `selectedStyle`: Style to apply to the selected icon
    [Example](/../../static/bottomnavigation-selectedStyle.png)


# TODO find a way to convert this JSON into markdown
{"description":"BottomNavigationItem is an item in a BottomNavigation component","displayName":"BottomNavigation","methods":[{"name":"buildBottomNavigationItem","docblock":null,"modifiers":[],"params":[{"name":"navItem","type":{"name":"signature","type":"object","raw":"{\n  label: string,\n  icon: Element | string,\n  value: string | number,\n  targetId?: string,\n  iconClassName?: string,\n}","signature":{"properties":[{"key":"label","value":{"name":"string","required":true}},{"key":"icon","value":{"name":"union","raw":"Element | string","elements":[{"name":"Element"},{"name":"string"}],"required":true}},{"key":"value","value":{"name":"union","raw":"string | number","elements":[{"name":"string"},{"name":"number"}],"required":true}},{"key":"targetId","value":{"name":"string","required":false}},{"key":"iconClassName","value":{"name":"string","required":false}}]},"alias":"T_NAV_ITEM"}},{"name":"selectedIndex","type":{"name":"number"}}],"returns":null}],"props":{"id":{"type":{"name":"string"},"required":true,"description":"The ID used to identify this compnent in Dash callbacks"},"navItems":{"type":{"name":"arrayOf","value":{"name":"shape","value":{"label":{"name":"string","required":false},"icon":{"name":"union","value":[{"name":"element"},{"name":"string"}],"required":false},"value":{"name":"union","value":[{"name":"string"},{"name":"number"}],"required":false},"targetId":{"name":"string","description":"ID of component to jump to when this option is selected","required":false},"iconClassName":{"name":"string","description":"Class to apply to the icon span","required":false}}}},"required":true,"description":"Array of navigation item props to pass to BottomNavigationItem","flowType":{"name":"Array","elements":[{"name":"signature","type":"object","raw":"{\n  label: string,\n  icon: Element | string,\n  value: string | number,\n  targetId?: string,\n  iconClassName?: string,\n}","signature":{"properties":[{"key":"label","value":{"name":"string","required":true}},{"key":"icon","value":{"name":"union","raw":"Element | string","elements":[{"name":"Element"},{"name":"string"}],"required":true}},{"key":"value","value":{"name":"union","raw":"string | number","elements":[{"name":"string"},{"name":"number"}],"required":true}},{"key":"targetId","value":{"name":"string","required":false}},{"key":"iconClassName","value":{"name":"string","required":false}}]}}],"raw":"Array<T_NAV_ITEM>"}},"selectedIndex":{"type":{"name":"number"},"required":false,"description":"Initial selected index for the BottomNavigation","flowType":{"name":"number"},"defaultValue":{"value":"0","computed":false}},"selectedStyle":{"type":{"name":"objectOf","value":{"name":"any"}},"required":false,"description":"Style to apply to the selected icon","flowType":{"name":"Object"},"defaultValue":{"value":"{}","computed":false}},"setProps":{"type":{"name":"func"},"required":false,"description":"Dash-assigned callback that should be called whenever any of the\nproperties change","flowType":{"name":"signature","type":"function","raw":"(props: { selectedIndex: number }) => void","signature":{"arguments":[{"name":"props","type":{"name":"signature","type":"object","raw":"{ selectedIndex: number }","signature":{"properties":[{"key":"selectedIndex","value":{"name":"number","required":true}}]}}}],"return":{"name":"void"}}},"defaultValue":{"value":"() => {\n}","computed":false}}}}
