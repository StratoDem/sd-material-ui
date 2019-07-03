# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CircularProgress(Component):
    """A CircularProgress component.
Material UI CircularProgress component

Keyword arguments:
- color (string; optional): Override the progress's color
- innerStyle (dict; optional): Style for inner wrapper div
- mode (required): The mode of show your progress, for now, will always be indeterminate
- size (number; optional): The diameter of the progress in pixels
- style (dict; optional): Override the inline-style of the root element
- thickness (number; optional): Stroke width in pixels"""
    @_explicitize_args
    def __init__(self, color=Component.UNDEFINED, innerStyle=Component.UNDEFINED, mode=Component.REQUIRED, size=Component.UNDEFINED, style=Component.UNDEFINED, thickness=Component.UNDEFINED, **kwargs):
        self._prop_names = ['color', 'innerStyle', 'mode', 'size', 'style', 'thickness']
        self._type = 'CircularProgress'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['color', 'innerStyle', 'mode', 'size', 'style', 'thickness']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['mode']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CircularProgress, self).__init__(**args)
