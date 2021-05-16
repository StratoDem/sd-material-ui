# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DropDownMenu(Component):
    """A DropDownMenu component.


Keyword arguments:

- id (string; required):
    The ID used for this dropdown menu.

- autoWidth (boolean; default False):
    If True, the width of the popover will automatically be set
    according to the items inside the menu, otherwise it will be at
    least the width of the select input.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root   select   filled   outlined   selectMenu
    disabled.

    `classes` is a dict with keys:

    - root (string; optional)

    - select (string; optional)

    - filled (string; optional)

    - outlined (string; optional)

    - selectMenu (string; optional)

    - disabled (string; optional)

- disabled (boolean; default False):
    If True, this dropdown will not be interactive.

- helperText (string; default ''):
    Text to display under the menu.

- labelId (string; default ''):
    The ID associated with the label.

- labelText (string; default ''):
    The text that will be displayed when no items are selected, and
    which will move to above the menu when there is at least one
    selection.

- multiple (boolean; default False):
    Allows multiple selections from the dropdown if True, else only
    one selection.

- options (list; optional):
    An array of objects, with each object representing an option in
    the menu. Each object must must contain either a value and
    primaryText keys or, if useGrouping is set to True, then an object
    may contain a grouping key. The order of the array is important
    when grouping, as each item will be associated with the grouping
    most recently seen while iterating through the array Example:  [
    {\"grouping\": \"group A\"},    {\"primaryText\": \"option 1\",
    \"value\": 1},    {\"primaryText\": \"option 2\", \"value\": 2},
    {\"grouping\": \"group B\"},    {\"primaryText\": \"option 3\",
    \"value\": 3},  ]  This will group options 1 and 2 with group A,
    and option 3 with group B.

- useGrouping (boolean; default False):
    If True, the expanded dropdown menu will include labels for the
    various groups of options. Those labels and groupings are set in
    the options prop.

- value (bool | number | str | dict | list; optional):
    The active selection for the menu.

- variant (string; default "standard"):
    Allows selection of one of three variant types of menus: filled,
    outlined, or standard. Set to standard by default."""
    @_explicitize_args
    def __init__(self, autoWidth=Component.UNDEFINED, classes=Component.UNDEFINED, disabled=Component.UNDEFINED, helperText=Component.UNDEFINED, id=Component.REQUIRED, labelText=Component.UNDEFINED, labelId=Component.UNDEFINED, multiple=Component.UNDEFINED, options=Component.UNDEFINED, useGrouping=Component.UNDEFINED, value=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'autoWidth', 'classes', 'disabled', 'helperText', 'labelId', 'labelText', 'multiple', 'options', 'useGrouping', 'value', 'variant']
        self._type = 'DropDownMenu'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'autoWidth', 'classes', 'disabled', 'helperText', 'labelId', 'labelText', 'multiple', 'options', 'useGrouping', 'value', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DropDownMenu, self).__init__(**args)
