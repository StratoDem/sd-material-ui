# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DropDownMenu(Component):
    """A DropDownMenu component.
A Dash material-ui DropDownMenu component

Keyword arguments:
- anchorOrigin (optional): This is the point on the anchor that the popover's targetOrigin will attach to.
Options: vertical: [top, center, bottom] horizontal: [left, middle, right].. anchorOrigin has the following type: dict containing keys 'vertical', 'horizontal'.
  Those keys have the following types:
  - vertical (optional)
  - horizontal (optional)
- animated (boolean; optional): If true, the popover will apply transitions when it gets added to the DOM.
- autoWidth (boolean; optional): The width will automatically be set according to the items inside the menu. To control
this width in css instead, set this prop to false.
- className (string; optional): The css class name of the root element.
- disabled (boolean; optional): Disables the menu.
- iconButton (a list of or a singular dash component, string or number; optional): Overrides default SvgIcon dropdown arrow component.
- iconStyle (dict; optional): Overrides the styles of icon element.
- id (string; optional): The element's ID.
- labelStyle (dict; optional): Overrides the styles of label when the DropDownMenu is inactive.
- listStyle (dict; optional): The style object to use to override underlying list style.
- maxHeight (number; optional): The maximum height of the Menu when it is displayed.
- menuItemStyle (dict; optional): Override the inline-styles of menu items.
- menuStyle (dict; optional): Overrides the styles of Menu when the DropDownMenu is displayed.
- openImmediately (boolean; optional): Set to true to have the DropDownMenu automatically open on mount.
- options (list; optional): Used to create the MenuItems to populate the Menu with. A Dash user passes in a list of dict
items, each one having at least a `value` and `primaryText`. If the 'label' is used,
that value will be used to render the representation of that item within the field.
- selectedMenuItemStyle (dict; optional): Override the inline-styles of selected menu items.
- style (dict; optional): Override the inline-styles of the root element.
- targetOrigin (optional): This is the point on the popover which will attach to the anchor's origin.
Options: vertical: [top, center, bottom] horizontal: [left, middle, right].. targetOrigin has the following type: dict containing keys 'vertical', 'horizontal'.
  Those keys have the following types:
  - vertical (optional)
  - horizontal (optional)
- underlineStyle (dict; optional): Overrides the inline-styles of the underline.
- value (bool | number | str | dict | list; required): The value of the selected menu item."""
    @_explicitize_args
    def __init__(self, anchorOrigin=Component.UNDEFINED, animated=Component.UNDEFINED, autoWidth=Component.UNDEFINED, className=Component.UNDEFINED, disabled=Component.UNDEFINED, fireEvent=Component.UNDEFINED, iconButton=Component.UNDEFINED, iconStyle=Component.UNDEFINED, id=Component.UNDEFINED, labelStyle=Component.UNDEFINED, listStyle=Component.UNDEFINED, maxHeight=Component.UNDEFINED, menuItemStyle=Component.UNDEFINED, menuStyle=Component.UNDEFINED, openImmediately=Component.UNDEFINED, options=Component.UNDEFINED, selectedMenuItemStyle=Component.UNDEFINED, style=Component.UNDEFINED, targetOrigin=Component.UNDEFINED, underlineStyle=Component.UNDEFINED, value=Component.REQUIRED, **kwargs):
        self._prop_names = ['anchorOrigin', 'animated', 'autoWidth', 'className', 'disabled', 'iconButton', 'iconStyle', 'id', 'labelStyle', 'listStyle', 'maxHeight', 'menuItemStyle', 'menuStyle', 'openImmediately', 'options', 'selectedMenuItemStyle', 'style', 'targetOrigin', 'underlineStyle', 'value']
        self._type = 'DropDownMenu'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['anchorOrigin', 'animated', 'autoWidth', 'className', 'disabled', 'iconButton', 'iconStyle', 'id', 'labelStyle', 'listStyle', 'maxHeight', 'menuItemStyle', 'menuStyle', 'openImmediately', 'options', 'selectedMenuItemStyle', 'style', 'targetOrigin', 'underlineStyle', 'value']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['value']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DropDownMenu, self).__init__(**args)
