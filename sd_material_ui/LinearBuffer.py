# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LinearBuffer(Component):
    """A LinearBuffer component.


Keyword arguments:

- id (string; required):
    LinearDeterminate component ID.

- buffer (number; required):
    The value of the progress buffer. Value between 0 and 100.

- color (string; default 'inherit'):
    Override the progress's color.

- value (number; required):
    The value of the progress indicator. Value between 0 and 100."""
    @_explicitize_args
    def __init__(self, color=Component.UNDEFINED, id=Component.REQUIRED, buffer=Component.REQUIRED, value=Component.REQUIRED, **kwargs):
        self._prop_names = ['id', 'buffer', 'color', 'value']
        self._type = 'LinearBuffer'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'buffer', 'color', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['id', 'buffer', 'value']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LinearBuffer, self).__init__(**args)
