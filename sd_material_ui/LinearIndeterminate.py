# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LinearIndeterminate(Component):
    """A LinearIndeterminate component.


Keyword arguments:

- color (string; default 'inherit'):
    Override the progress's color."""
    @_explicitize_args
    def __init__(self, color=Component.UNDEFINED, **kwargs):
        self._prop_names = ['color']
        self._type = 'LinearIndeterminate'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['color']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LinearIndeterminate, self).__init__(**args)
