# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class RaisedButton(Component):
    """A RaisedButton component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The content of the button. If a label is provided via the label prop, the text within the
label will be displayed in addition to the content provided here.
- backgroundColor (string; default ''): Override the default background color for the button, but not the default disabled
background color (use disabledBackgroundColor for this).
- buttonStyle (dict; optional): Override the inline styles of the button element.
- className (string; default ''): CSS class name of the root element
- disableTouchRipple (boolean; default False): If true, the element's ripple effect will be disabled
- disabled (boolean; default False): Button is disabled?
- disabledBackgroundColor (string; default ''): Override the default background for the disabled button
- disabledLabelColor (string; default ''): Override the default label color for the disabled button
- fullWidth (boolean; default False): If true, the button will take up the full width of its container
- href (string; default ''): The URL to link to when the button is clicked
- icon (a list of or a singular dash component, string or number; optional): Use this property to display an icon
- id (string; optional): Element ID
- label (string; required): The label to be displayed within the button. If content is provided via the children prop,
that content will be displayed in addition to the label provided here.
- labelColor (string; default ''): Color of the button's label
- labelPosition (default 'after'): The position of the button's label relative to its children
- labelStyle (dict; optional): Override the inline styles of the label element
- n_clicks (number; default 0): An integer that represents the number of times this element has been clicked
- n_clicks_previous (number; default 0): An integer that represents the previous number of times this element has been clicked
- overlayStyle (dict; optional): Override the inline style of the button overlay
- primary (boolean; default False): If true, the button will use the theme's primary color
- rippleColor (string; optional): Color of the ripple on click
- rippleStyle (dict; optional): Override the inline style of the ripple element
- secondary (boolean; default False): If true, the button will use the theme's secondary color. If both secondary and primary are
true, the button will use the theme's primary color.
- style (dict; optional): Override the inline styles of the root element"""
    @_explicitize_args
    def __init__(self, children=None, backgroundColor=Component.UNDEFINED, buttonStyle=Component.UNDEFINED, className=Component.UNDEFINED, disableTouchRipple=Component.UNDEFINED, disabled=Component.UNDEFINED, disabledBackgroundColor=Component.UNDEFINED, disabledLabelColor=Component.UNDEFINED, fireEvent=Component.UNDEFINED, fullWidth=Component.UNDEFINED, href=Component.UNDEFINED, icon=Component.UNDEFINED, id=Component.UNDEFINED, label=Component.REQUIRED, labelColor=Component.UNDEFINED, labelPosition=Component.UNDEFINED, labelStyle=Component.UNDEFINED, n_clicks=Component.UNDEFINED, n_clicks_previous=Component.UNDEFINED, overlayStyle=Component.UNDEFINED, primary=Component.UNDEFINED, rippleColor=Component.UNDEFINED, rippleStyle=Component.UNDEFINED, secondary=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'backgroundColor', 'buttonStyle', 'className', 'disableTouchRipple', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'href', 'icon', 'id', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'n_clicks', 'n_clicks_previous', 'overlayStyle', 'primary', 'rippleColor', 'rippleStyle', 'secondary', 'style']
        self._type = 'RaisedButton'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'backgroundColor', 'buttonStyle', 'className', 'disableTouchRipple', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'href', 'icon', 'id', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'n_clicks', 'n_clicks_previous', 'overlayStyle', 'primary', 'rippleColor', 'rippleStyle', 'secondary', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['label']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(RaisedButton, self).__init__(children=children, **args)
