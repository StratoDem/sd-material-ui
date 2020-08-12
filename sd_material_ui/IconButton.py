# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class IconButton(Component):
    """An IconButton component.
Material UI IconButton component

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Used to pass a FontIcon element as the icon for the button
See method 3 at http://www.material-ui.com/#/components/icon-button
Note: currently unable to pass in FontIcon component as child, you will need
to use method 3 at the above link
- className (string; default ''): The CSS class name of the root element
- disableTouchRipple (boolean; default False): If true, the element's ripple effect will be disabled
- disabled (boolean; default False): Disable the button?
- hoveredStyle (dict; optional): Override the inline-styles of the root element when the component is hovered
- href (string; default ''): The URL to link to when the button is clicked
- iconClassName (string; default 'material-icons'): The CSS class name of the icon. Used for setting the icon with a stylesheet
- iconStyle (dict; optional): Override the inline-styles of the icon element.
Note: you can specify iconHoverColor as a String inside this object.
- id (string; optional): Element ID
- n_clicks (number; default 0): An integer that represents the number fo times that this element has been clicked
- n_clicks_previous (number; default 0): An integer that represents the previous number of times this element has been clicked
- style (dict; optional): Override the inline-styles of the root element.
- tooltip (a list of or a singular dash component, string or number; default ''): The text to supply to the element's tooltip
- tooltipPosition (default 'bottom-center'): The vertical and horizontal positions, respectively, of the element's tooltip.
Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
"bottom-left", and "top-left".
- tooltipStyles (dict; optional): Override the inline-styles of the tooltip element
- touch (boolean; default False): If true, increase the tooltip element's size.
Useful for increasing tooltip readability on mobile devices."""
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, disableTouchRipple=Component.UNDEFINED, disabled=Component.UNDEFINED, fireEvent=Component.UNDEFINED, hoveredStyle=Component.UNDEFINED, href=Component.UNDEFINED, iconClassName=Component.UNDEFINED, iconStyle=Component.UNDEFINED, id=Component.UNDEFINED, n_clicks=Component.UNDEFINED, n_clicks_previous=Component.UNDEFINED, style=Component.UNDEFINED, tooltip=Component.UNDEFINED, tooltipPosition=Component.UNDEFINED, tooltipStyles=Component.UNDEFINED, touch=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'className', 'disableTouchRipple', 'disabled', 'hoveredStyle', 'href', 'iconClassName', 'iconStyle', 'id', 'n_clicks', 'n_clicks_previous', 'style', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch']
        self._type = 'IconButton'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'className', 'disableTouchRipple', 'disabled', 'hoveredStyle', 'href', 'iconClassName', 'iconStyle', 'id', 'n_clicks', 'n_clicks_previous', 'style', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(IconButton, self).__init__(children=children, **args)
