# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tooltip(Component):
    """A Tooltip component.
Material UI Tooltip component

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Tooltip reference element.

- arrow (boolean; default False):
    If True, adds an arrow to the tooltip.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   tooltip   tooltipArrow   arrow
    tooltipPlacementLeft   tooltipPlacementRight   tooltipPlacementTop
    tooltipPlacementBottom.

    `classes` is a dict with keys:

    - tooltip (string; optional)

    - tooltipArrow (string; optional)

    - arrow (string; optional)

    - tooltipPlacementLeft (string; optional)

    - tooltipPlacementRight (string; optional)

    - tooltipPlacementTop (string; optional)

    - tooltipPlacementBottom (string; optional)

- enterDelay (number; default 100):
    The number of milliseconds to wait before showing the tooltip.

- leaveDelay (number; default 0):
    The number of milliseconds to wait before hiding the tooltip.

- placement (default 'bottom'):
    Tooltip placement.

- title (a list of or a singular dash component, string or number; required):
    Tooltip title. Zero-length titles string are never displayed."""
    @_explicitize_args
    def __init__(self, children=None, arrow=Component.UNDEFINED, classes=Component.UNDEFINED, enterDelay=Component.UNDEFINED, leaveDelay=Component.UNDEFINED, placement=Component.UNDEFINED, title=Component.REQUIRED, **kwargs):
        self._prop_names = ['children', 'arrow', 'classes', 'enterDelay', 'leaveDelay', 'placement', 'title']
        self._type = 'Tooltip'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'arrow', 'classes', 'enterDelay', 'leaveDelay', 'placement', 'title']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['title']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Tooltip, self).__init__(children=children, **args)
