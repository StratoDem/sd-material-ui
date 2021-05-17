# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CircularProgress(Component):
    """A CircularProgress component.
Material UI CircularProgress component

Keyword arguments:

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root   static   indeterminate   colorPrimary
    colorSecondary   circle   circleStatic   circleIndeterminate
    circleDisableShrink.

    `classes` is a dict with keys:

    - root (string; optional)

    - static (string; optional)

    - indeterminate (string; optional)

    - colorPrimary (string; optional)

    - colorSecondary (string; optional)

    - circle (string; optional)

    - circleStatic (string; optional)

    - circleIndeterminate (string; optional)

    - circleDisableShrink (string; optional)

- color (string; default 'inherit'):
    Override the progress's color.

- mode (default 'indeterminate'):
    The mode of show your progress, for now, will always be
    indeterminate.

- size (number; default 40):
    The diameter of the progress in pixels.

- style (dict; optional):
    Override the inline-style of the root element.

- thickness (number; default 3.5):
    Stroke width in pixels."""
    @_explicitize_args
    def __init__(self, classes=Component.UNDEFINED, color=Component.UNDEFINED, mode=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, thickness=Component.UNDEFINED, innerStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['classes', 'color', 'mode', 'size', 'style', 'thickness']
        self._type = 'CircularProgress'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['classes', 'color', 'mode', 'size', 'style', 'thickness']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CircularProgress, self).__init__(**args)
