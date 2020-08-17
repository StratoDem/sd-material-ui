# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FlatButton(Component):
    """A FlatButton component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): This is what will be displayed inside the button.
If a label is specified, the text within the label prop will
be displayed. Otherwise, the component will expect children
which will then be displayed. (In our example,
we are nesting an `<input type="file" />` and a `span`
that acts as our label to be displayed.) This only
applies to flat and raised buttons.
- backgroundColor (string; default ''): Button color when *no* hover event is triggered
- className (string; default ''): CSS class name of the root element
- disableTouchRipple (boolean; default False): If true, the element's ripple effect will be disabled
- disabled (boolean; default False): Disable the button?
- fullWidth (boolean; default False): If true, the button will take up the full width of its container
- hoverColor (string; default ''): Color of button when mouse hovers over
- href (string; default ''): The URL to link to when the button is clicked
- icon (a list of or a singular dash component, string or number; optional): Use this property to display an icon
- id (string; optional): Element ID
- label (string; default ''): Label for the button
- labelPosition (default 'after'): Place label before or after the passed children
- labelStyle (dict; optional): Override the inline styles of the button's label element
- n_clicks (number; default 0): An integer that represents the number fo times that this element has been clicked
- n_clicks_previous (number; default 0): An integer that represents the previous number of times this element has been clicked
- primary (boolean; default False): If true, colors button according to primaryTextColor from the MuiTheme
- raised (string; default False): Color for the ripple when the button is clicked
- rippleColor (string; default ''): Color for the ripple when the button is clicked
- secondary (boolean; default False): If true, colors button according to secondaryTextColor from the theme.
The primary prop has precendent if set to true.
- style (dict; optional): Override the inline styles of the root element
- useIcon (boolean; default False): If true, this object is rendered as an IconButton"""
    @_explicitize_args
    def __init__(self, children=None, backgroundColor=Component.UNDEFINED, className=Component.UNDEFINED, disableTouchRipple=Component.UNDEFINED, disabled=Component.UNDEFINED, fireEvent=Component.UNDEFINED, fullWidth=Component.UNDEFINED, hoverColor=Component.UNDEFINED, href=Component.UNDEFINED, icon=Component.UNDEFINED, id=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, labelStyle=Component.UNDEFINED, n_clicks=Component.UNDEFINED, n_clicks_previous=Component.UNDEFINED, primary=Component.UNDEFINED, raised=Component.UNDEFINED, rippleColor=Component.UNDEFINED, secondary=Component.UNDEFINED, style=Component.UNDEFINED, useIcon=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'backgroundColor', 'className', 'disableTouchRipple', 'disabled', 'fullWidth', 'hoverColor', 'href', 'icon', 'id', 'label', 'labelPosition', 'labelStyle', 'n_clicks', 'n_clicks_previous', 'primary', 'raised', 'rippleColor', 'secondary', 'style', 'useIcon']
        self._type = 'FlatButton'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'backgroundColor', 'className', 'disableTouchRipple', 'disabled', 'fullWidth', 'hoverColor', 'href', 'icon', 'id', 'label', 'labelPosition', 'labelStyle', 'n_clicks', 'n_clicks_previous', 'primary', 'raised', 'rippleColor', 'secondary', 'style', 'useIcon']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(FlatButton, self).__init__(children=children, **args)
