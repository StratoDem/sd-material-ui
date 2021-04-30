# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Textfield(Component):
    """A Textfield component.
Material UI TextField component

Keyword arguments:
- autoFocus (boolean; default False): If true, the input element will be focused during the first mount
- classes (dict; optional): The classes to be applied to this component. This keys in this object must be valid CSS rule
names, and the values must be strings for the classnames to be assigned to each rule name
Valid rule names are:
    root
    formControl
    focused
    disabled
    colorSecondary
    underline
    error
    multiline
    fullWidth
    input
    inputMultiline. classes has the following type: dict containing keys 'root', 'formControl', 'focused', 'disabled', 'colorSecondary', 'underline', 'error', 'multiline', 'fullWidth', 'input', 'inputMultiline'.
  Those keys have the following types:
  - root (string; optional)
  - formControl (string; optional)
  - focused (string; optional)
  - disabled (string; optional)
  - colorSecondary (string; optional)
  - underline (string; optional)
  - error (string; optional)
  - multiline (string; optional)
  - fullWidth (string; optional)
  - input (string; optional)
  - inputMultiline (string; optional)
- className (string; default ''): CSS class name of the root element
- color (string; default 'primary'): 'primary' | 'secondary'
- dashCallbackDelay (number; default 500): Dash callback delay in ms - default is 500 ms
- disabled (boolean; default False): If true, the input element will be disabled.
- error (boolean; default False): If true, the label will be displayed in an error state
- fullWidth (boolean; default False): If true, the input will take up the full width of its container
- helperText (a list of or a singular dash component, string or number; default ''): The helper text content
- id (string; required): Element ID
- multiline (boolean; default False): If true, a textarea element will be rendered instead of an input
- required (boolean; default False): If true, the label is displayed as required and the input element` will be required
- size (string; default 'medium'): 'medium' | 'small'
- style (dict; optional): Override the inline-styles of the root element
- type (string; default 'text'): Type of the input element. It should be a valid HTML5 input type
- value (bool | number | str | dict | list; default ''): The value of the input element, required for a controlled component
- variant (string; default 'standard'): 'filled' | 'outlined' | 'standard'"""
    @_explicitize_args
    def __init__(self, autoFocus=Component.UNDEFINED, classes=Component.UNDEFINED, className=Component.UNDEFINED, color=Component.UNDEFINED, dashCallbackDelay=Component.UNDEFINED, disabled=Component.UNDEFINED, error=Component.UNDEFINED, fireEvent=Component.UNDEFINED, fullWidth=Component.UNDEFINED, helperText=Component.UNDEFINED, id=Component.REQUIRED, multiline=Component.UNDEFINED, required=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, type=Component.UNDEFINED, value=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['autoFocus', 'classes', 'className', 'color', 'dashCallbackDelay', 'disabled', 'error', 'fullWidth', 'helperText', 'id', 'multiline', 'required', 'size', 'style', 'type', 'value', 'variant']
        self._type = 'Textfield'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['autoFocus', 'classes', 'className', 'color', 'dashCallbackDelay', 'disabled', 'error', 'fullWidth', 'helperText', 'id', 'multiline', 'required', 'size', 'style', 'type', 'value', 'variant']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Textfield, self).__init__(**args)
