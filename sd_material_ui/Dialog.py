# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Dialog(Component):
    """A Dialog component.
Material UI Dialog component

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Children to render inside of the Dialog
- id (string; required): Dialog ID
- actions (optional): Actions component or list of components for the Dialog
- className (string; optional): CSS class name of the root element
- modal (boolean; optional): Is the Dialog a modal (must click on an action to close)?

NOTE: If the Dialog is created with modal=False, the callback that controls opening and closing
the Dialog should include the component's open value as a state, and check whether it is either
already open or closed before attempting to open or close it. See comments for the open prop.
- open (boolean; optional): Is the dialog open?

IMPORTANT: When using this component in Dash, a listener must be set up (either as state or
an input) for this component's props.open value in order to achieve the desired behavior.
If such a listener is not in place, the non-modal version of this dialog will contaminate
other callbacks in the browser"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.REQUIRED, actions=Component.UNDEFINED, className=Component.UNDEFINED, modal=Component.UNDEFINED, open=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'actions', 'className', 'modal', 'open']
        self._type = 'Dialog'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'actions', 'className', 'modal', 'open']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Dialog, self).__init__(children=children, **args)
