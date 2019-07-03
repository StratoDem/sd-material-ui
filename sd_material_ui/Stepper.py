# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Stepper(Component):
    """A Stepper component.
Material UI Stepper component

Keyword arguments:
- activeStep (number; optional): Set the active step (zero based index). This will enable Step control helpers
- backButtonStyle (dict; optional): The style for the back button
- className (string; optional): CSS class name of the root element
- finishedButtonStyle (dict; optional): The style for the button displayed after all steps have been finished
- finishedText (string; optional): The text to display on the final button when all steps have been completed
- id (string; required): Dash ID
- linear (boolean; optional): If set to true, the Stepper will assist in controlling steps for linear flow
- nextButtonStyle (dict; optional): The style for the next button
- orientation (optional): The stepper orientation (layout flow direction)
- stepCount (number; optional): The number of steps that this component will contain
- stepLabels (list of strings; optional): The text labels that will be shown next to each step number. The length of this array must
match the total number of steps
- style (dict; optional): Override the inline-style of the root element"""
    @_explicitize_args
    def __init__(self, activeStep=Component.UNDEFINED, backButtonStyle=Component.UNDEFINED, className=Component.UNDEFINED, finishedButtonStyle=Component.UNDEFINED, finishedText=Component.UNDEFINED, fireEvent=Component.UNDEFINED, id=Component.REQUIRED, linear=Component.UNDEFINED, nextButtonStyle=Component.UNDEFINED, orientation=Component.UNDEFINED, stepCount=Component.UNDEFINED, stepLabels=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['activeStep', 'backButtonStyle', 'className', 'finishedButtonStyle', 'finishedText', 'id', 'linear', 'nextButtonStyle', 'orientation', 'stepCount', 'stepLabels', 'style']
        self._type = 'Stepper'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['activeStep', 'backButtonStyle', 'className', 'finishedButtonStyle', 'finishedText', 'id', 'linear', 'nextButtonStyle', 'orientation', 'stepCount', 'stepLabels', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Stepper, self).__init__(**args)
