# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FlatButton(Component):
    """A FlatButton component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Children to render inside of the Button
- id (string; required): Button ID
- className (string; default ''): CSS class name of the root element
- disabled (boolean; default False): Is the Button disabled?"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.REQUIRED, className=Component.UNDEFINED, disabled=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'disabled']
        self._type = 'FlatButton'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'disabled']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(FlatButton, self).__init__(children=children, **args)
