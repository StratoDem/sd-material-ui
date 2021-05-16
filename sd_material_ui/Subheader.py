# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Subheader(Component):
    """A Subheader component.
Material UI Subheader component

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Node that will be placed inside the Subheader.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root   colorPrimary   colorInherit   gutters
    inset   sticky.

    `classes` is a dict with keys:

    - root (string; optional)

    - colorPrimary (string; optional)

    - colorInherit (string; optional)

    - gutters (string; optional)

    - inset (string; optional)

    - sticky (string; optional)

- inset (boolean; default False):
    If True, the Subheader will be indented.

- style (dict; optional):
    Override the inline-styles of the root element."""
    @_explicitize_args
    def __init__(self, children=None, classes=Component.UNDEFINED, inset=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'classes', 'inset', 'style']
        self._type = 'Subheader'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'classes', 'inset', 'style']
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
