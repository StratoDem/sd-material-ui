# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Snackbar(Component):
    """A Snackbar component.
Material UI Snackbar component

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Elements to render inside the snackbar. Note that this will
    override message and actions.

- id (string; required):
    The element's ID.

- action (string; default ''):
    The text of the action button inside the snackbar. If empty, no
    action button will be added Note that this does not work with
    children.

- actionStyles (dict; optional):
    Styles to be applied to the action button.

- autoHideDuration (number; default 3000):
    The number of milliseconds to wait before automatically
    dismissing. If no value is specified the snackbar will dismiss
    normally. If a value is provided the snackbar can still be
    dismissed normally. If a snackbar is dismissed before the timer
    expires, the timer will be cleared.

- className (string; default ''):
    CSS class name of the root element.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root   anchorOriginTopCenter
    anchorOriginBottomCenter   anchorOriginTopRight
    anchorOriginBottomRight   anchorOriginTopLeft
    anchorOriginBottomLeft.

    `classes` is a dict with keys:

    - root (string; optional)

    - anchorOriginTopCenter (string; optional)

    - anchorOriginBottomCenter (string; optional)

    - anchorOriginTopRight (string; optional)

    - anchorOriginBottomRight (string; optional)

    - anchorOriginTopLeft (string; optional)

    - anchorOriginBottomLeft (string; optional)

- message (a list of or a singular dash component, string or number; default ''):
    The message to be displayed. (Note: If the message is an element
    or array, and the Snackbar may re-render while it is still open,
    ensure that the same object remains as the message property if you
    want to avoid the Snackbar hiding and showing again). Note that
    this does not work with children.

- n_clicks (number; default 0):
    An integer that represents the number of times that action button
    has been clicked.

- open (boolean; default False):
    Controls whether the Snackbar is opened or not.

- style (dict; optional):
    Override the inline styles of the root element."""
    @_explicitize_args
    def __init__(self, children=None, action=Component.UNDEFINED, actionStyles=Component.UNDEFINED, autoHideDuration=Component.UNDEFINED, classes=Component.UNDEFINED, className=Component.UNDEFINED, fireEvent=Component.UNDEFINED, id=Component.REQUIRED, message=Component.UNDEFINED, n_clicks=Component.UNDEFINED, open=Component.UNDEFINED, style=Component.UNDEFINED, bodyStyle=Component.UNDEFINED, contentStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'action', 'actionStyles', 'autoHideDuration', 'className', 'classes', 'message', 'n_clicks', 'open', 'style']
        self._type = 'Snackbar'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'action', 'actionStyles', 'autoHideDuration', 'className', 'classes', 'message', 'n_clicks', 'open', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Snackbar, self).__init__(children=children, **args)
