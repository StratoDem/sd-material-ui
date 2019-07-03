# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Toggle(Component):
    """A Toggle component.
Material UI Toggle component

Keyword arguments:
- disabled (boolean; optional): Toggle disabled?
- elementStyle (dict; optional): Override the inline style of the Toggle element
- iconStyle (dict; optional): Override the inline style of the Icon element
- id (string; required): Element ID
- inputStyle (dict; optional): Override the inline styles of the input element
- label (a list of or a singular dash component, string or number; optional): Label for toggle
- labelPosition (optional): Where the label will be placed next to the toggle
- labelStyle (dict; optional): Override the inline styles of the Toggle element label
- rippleStyle (dict; optional): Override ripple style on click
- style (dict; optional): Override the inline styles of the root element
- thumbStyle (dict; optional): Override style for thumb
- thumbSwitchedStyle (dict; optional): Override the inline styles for thumb when the toggle switches
- toggled (boolean; optional): Toggled on if true
- trackStyle (dict; optional): Override the inline style for track
- trackSwitchedStyle (dict; optional): Override the inline styles for track when the toggle switches"""
    @_explicitize_args
    def __init__(self, disabled=Component.UNDEFINED, elementStyle=Component.UNDEFINED, fireEvent=Component.UNDEFINED, iconStyle=Component.UNDEFINED, id=Component.REQUIRED, inputStyle=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, labelStyle=Component.UNDEFINED, rippleStyle=Component.UNDEFINED, style=Component.UNDEFINED, thumbStyle=Component.UNDEFINED, thumbSwitchedStyle=Component.UNDEFINED, toggled=Component.UNDEFINED, trackStyle=Component.UNDEFINED, trackSwitchedStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['disabled', 'elementStyle', 'iconStyle', 'id', 'inputStyle', 'label', 'labelPosition', 'labelStyle', 'rippleStyle', 'style', 'thumbStyle', 'thumbSwitchedStyle', 'toggled', 'trackStyle', 'trackSwitchedStyle']
        self._type = 'Toggle'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['disabled', 'elementStyle', 'iconStyle', 'id', 'inputStyle', 'label', 'labelPosition', 'labelStyle', 'rippleStyle', 'style', 'thumbStyle', 'thumbSwitchedStyle', 'toggled', 'trackStyle', 'trackSwitchedStyle']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Toggle, self).__init__(**args)
