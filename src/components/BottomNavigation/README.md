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
      ![](/../../../static/bottomnavigation-iconClassName.png)
- `selectedIndex`: The initial selected index for the BottomNavigation
- `selectedStyle`: Style to apply to the selected icon
    [Example](/../../static/bottomnavigation-selectedStyle.png)
