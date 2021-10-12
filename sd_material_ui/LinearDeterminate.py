# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LinearDeterminate(Component):
    """A LinearDeterminate component.


Keyword arguments:

- id (string; required):
    LinearDeterminate component ID.

- color (string; default 'inherit'):
    Override the progress's color.

- value (number; required):
    The value of the progress indicator for the determinate and buffer
    variants. Value between 0 and 100.

- variant (default 'no-label'):
    The variant to use. Options are \"label\" or \"no-label\"."""
    @_explicitize_args
    def __init__(self, color=Component.UNDEFINED, id=Component.REQUIRED, value=Component.REQUIRED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'color', 'value', 'variant']
        self._type = 'LinearDeterminate'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'color', 'value', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['id', 'value']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LinearDeterminate, self).__init__(**args)
