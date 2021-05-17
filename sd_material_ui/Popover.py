# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Popover(Component):
    """A Popover component.
Material UI Popover component

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the popover.

- anchorOrigin (dict; default {vertical: 'bottom', horizontal: 'left'}):
    This is the point on the anchor where the popover's targetOrigin
    will attach to. Options: vertical: [top, center, bottom]
    horizontal: [left, middle, right].

    `anchorOrigin` is a dict with keys:

    - vertical (optional)

    - horizontal (optional)

- animated (boolean; optional):
    If True, the popover will apply transitions when it is added to
    the DOM.

- autoCloseWhenOffScreen (boolean; optional):
    If True, the popover will hide when the anchor is scrolled off the
    screen.

- buttonIcon (string; default ''):
    For Dash use - specify what icon to use when using an icon button.

- buttonLabel (string; default ''):
    For Dash use - user can assign label to button.

- buttonStyle (dict; optional):
    For Dash use - specify the styles for the button.

- buttonType (default 'raised'):
    For Dash use - user can anchor the popover to flat, icon, or
    raised button.

- className (string; default ''):
    The CSS class name of the root element.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root   paper.

    `classes` is a dict with keys:

    - root (string; optional)

    - paper (string; optional)

- disableScrollLock (boolean; optional):
    Disable the scroll lock behavior.

- open (boolean; default False):
    If True, the popover is visible.

- style (dict; optional):
    Override the inline-styles of the root element.

- zDepth (number; default 1):
    The zDepth of the popover."""
    @_explicitize_args
    def __init__(self, children=None, anchorOrigin=Component.UNDEFINED, animated=Component.UNDEFINED, autoCloseWhenOffScreen=Component.UNDEFINED, buttonLabel=Component.UNDEFINED, buttonType=Component.UNDEFINED, buttonIcon=Component.UNDEFINED, buttonStyle=Component.UNDEFINED, classes=Component.UNDEFINED, className=Component.UNDEFINED, disableScrollLock=Component.UNDEFINED, open=Component.UNDEFINED, style=Component.UNDEFINED, zDepth=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'anchorOrigin', 'animated', 'autoCloseWhenOffScreen', 'buttonIcon', 'buttonLabel', 'buttonStyle', 'buttonType', 'className', 'classes', 'disableScrollLock', 'open', 'style', 'zDepth']
        self._type = 'Popover'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'anchorOrigin', 'animated', 'autoCloseWhenOffScreen', 'buttonIcon', 'buttonLabel', 'buttonStyle', 'buttonType', 'className', 'classes', 'disableScrollLock', 'open', 'style', 'zDepth']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Popover, self).__init__(children=children, **args)
