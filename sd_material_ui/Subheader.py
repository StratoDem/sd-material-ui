# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Subheader(Component):
    """A Subheader component.
Material UI Subheader component

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Node that will be placed inside the Subheader
- inset (boolean; optional): If true, the Subheader will be indented
- style (dict; optional): Override the inline-styles of the root element"""
    @_explicitize_args
    def __init__(self, children=None, inset=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'inset', 'style']
        self._type = 'Subheader'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'inset', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Subheader, self).__init__(children=children, **args)
