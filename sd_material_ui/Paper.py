# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Paper(Component):
    """A Paper component.
A Dash material-ui Paper component

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Children passed int othe paper element
- circle (boolean; optional): Set ot true to generate a circular paper container
- rounded (boolean; optional): By default, the paper container will have a border radius.
Set this to false to generate a container with sharp corners.
- style (dict; optional): Override the inline-styles of the root element
- transitionEnabled (boolean; optional): Set to false to disable CSS transitions for the paper element
- zDepth (optional): This number represents the zDepth of the paper shadow"""
    @_explicitize_args
    def __init__(self, children=None, circle=Component.UNDEFINED, rounded=Component.UNDEFINED, style=Component.UNDEFINED, transitionEnabled=Component.UNDEFINED, zDepth=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']
        self._type = 'Paper'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Paper, self).__init__(children=children, **args)
