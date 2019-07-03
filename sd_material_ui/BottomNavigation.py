# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class BottomNavigation(Component):
    """A BottomNavigation component.
BottomNavigationItem is an item in a BottomNavigation component

Keyword arguments:
- id (string; required): The ID used to identify this component in Dash callbacks
- navItems (list; required): Array of navigation item props to pass to BottomNavigationItem
- selectedIndex (number; optional): Initial selected index for the BottomNavigation
- selectedStyle (dict; optional): Style to apply to the selected icon"""
    @_explicitize_args
    def __init__(self, id=Component.REQUIRED, navItems=Component.REQUIRED, selectedIndex=Component.UNDEFINED, selectedStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'navItems', 'selectedIndex', 'selectedStyle']
        self._type = 'BottomNavigation'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'navItems', 'selectedIndex', 'selectedStyle']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id', 'navItems']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(BottomNavigation, self).__init__(**args)
