# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class BottomNavigation(Component):
    """A BottomNavigation component.
BottomNavigationItem is an item in a BottomNavigation component

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    CSS class name of the root element.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root.

    `classes` is a dict with keys:

    - root (string; optional)

- displayLabels (boolean; optional):
    If True, show the labels of unselected Items.

- navItems (list; required):
    Array of navigation item props to pass to BottomNavigationItem.

- selectedValue (number; optional):
    Initial selected value for the BottomNavigation."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, classes=Component.UNDEFINED, className=Component.UNDEFINED, displayLabels=Component.UNDEFINED, navItems=Component.REQUIRED, selectedValue=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'classes', 'displayLabels', 'navItems', 'selectedValue']
        self._type = 'BottomNavigation'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'classes', 'displayLabels', 'navItems', 'selectedValue']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['navItems']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(BottomNavigation, self).__init__(**args)
