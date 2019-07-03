# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Snackbar(Component):
    """A Snackbar component.
Material UI Snackbar component

Keyword arguments:
- action (a list of or a singular dash component, string or number; optional): Label for the action on the snackbar
- autoHideDuration (number; optional): The number of milliseconds to wait before automatically dismissing. If no value is specified
the snackbar will dismiss normally. If a value is provided the snackbar can still be dismissed
normally. If a snackbar is dismissed before the timer expires, the timer will be cleared.
- bodyStyle (optional): Override the inline styles of the body element
- className (string; optional): CSS class name of the root element
- contentStyle (optional): Override the inline styles of the content element
- id (string; required): The element's ID
- message (a list of or a singular dash component, string or number; required): The message to be displayed.
(Note: If the message is an element or array, and the Snackbar may re-render while it is
still open, ensure that the same object remains as the message property if you want to avoid
the Snackbar hiding and showing again)
- n_clicks (number; optional): An integer that represents the number of times that action button has been clicked
- open (boolean; required): Controls whether the Snackbar is opened or not
- style (optional): Override the inline styles of the root element"""
    @_explicitize_args
    def __init__(self, action=Component.UNDEFINED, autoHideDuration=Component.UNDEFINED, bodyStyle=Component.UNDEFINED, className=Component.UNDEFINED, contentStyle=Component.UNDEFINED, fireEvent=Component.UNDEFINED, id=Component.REQUIRED, message=Component.REQUIRED, n_clicks=Component.UNDEFINED, open=Component.REQUIRED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['action', 'autoHideDuration', 'bodyStyle', 'className', 'contentStyle', 'id', 'message', 'n_clicks', 'open', 'style']
        self._type = 'Snackbar'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['action', 'autoHideDuration', 'bodyStyle', 'className', 'contentStyle', 'id', 'message', 'n_clicks', 'open', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id', 'message', 'open']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Snackbar, self).__init__(**args)
