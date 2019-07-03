# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Checkbox(Component):
    """A Checkbox component.
Material UI Checkbox component

Keyword arguments:
- checked (boolean; optional): Checkbox is checked if true
- disabled (boolean; optional): Checkbox is disabled if true
- iconStyle (dict; optional): Overrides the inline-styles of the icon element
- id (string; required): The element's ID
- inputStyle (dict; optional): Overrides the inline styles of the input element
- label (string; optional): The text label for the checkbox
- labelPosition (optional): Where the label will be placed next to the checkbox
- labelStyle (dict; optional): Overrides the inline styles of the Checkbox element label
- style (dict; optional): Override the inline styles of the root element"""
    @_explicitize_args
    def __init__(self, checked=Component.UNDEFINED, disabled=Component.UNDEFINED, fireEvent=Component.UNDEFINED, iconStyle=Component.UNDEFINED, id=Component.REQUIRED, inputStyle=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, labelStyle=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['checked', 'disabled', 'iconStyle', 'id', 'inputStyle', 'label', 'labelPosition', 'labelStyle', 'style']
        self._type = 'Checkbox'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['checked', 'disabled', 'iconStyle', 'id', 'inputStyle', 'label', 'labelPosition', 'labelStyle', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Checkbox, self).__init__(**args)
