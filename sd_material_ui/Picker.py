# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Picker(Component):
    """A Picker component.


Keyword arguments:

- id (string; required):
    Picker ID.

- format (string; default ""):
    Format to be used in displaying date. Some possibilities:
    yyyy-MM-dd MM/dd/yyyy MM-dd.

- label (string; default ""):
    Label for the date or time picker.

- type (string; default "date"):
    Type of date or time picker, \"time\", \"date\", or
    \"date-dialog\".

- value (string; default "01-01-2020"):
    Representation of datetime, like 2020-12-25T13:11:00.000Z."""
    @_explicitize_args
    def __init__(self, format=Component.UNDEFINED, id=Component.REQUIRED, label=Component.UNDEFINED, type=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'format', 'label', 'type', 'value']
        self._type = 'Picker'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'format', 'label', 'type', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Picker, self).__init__(**args)
