# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ZoomTransition(Component):
    """A ZoomTransition component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The contents of the transition element.

- id (string; required):
    Dash ID of the transition element.

- className (string; optional):
    CSS class name of the root element.

- style (dict; optional):
    The styles passed to the transition element An style object (even
    if empty) must be given to the transition element or it will fail
    silently. See:
    https://github.com/mui-org/material-ui/issues/15472.

- visible (boolean; default True):
    If True, the transition element is displayed, else it will be
    hidden."""
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, id=Component.REQUIRED, style=Component.UNDEFINED, visible=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'style', 'visible']
        self._type = 'ZoomTransition'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'style', 'visible']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ZoomTransition, self).__init__(children=children, **args)
