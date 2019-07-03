# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FontIcon(Component):
    """A FontIcon component.
Material UI FontIcon component

Keyword arguments:
- id (string; optional): id for the component
- color (string; optional): font color of the font icon;
If not specified, this component will default
to muiTheme.palette.textColor
- className (string; optional): defines specific icon when using custom icon font
or defines font when using public icon font
- hoverColor (string; optional): icon color when the mouse hovers over the icon
- iconName (string; optional): defines specific icon when using public icon font
- style (dict; optional): override inline-styles of root element"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, color=Component.UNDEFINED, className=Component.UNDEFINED, hoverColor=Component.UNDEFINED, iconName=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'color', 'className', 'hoverColor', 'iconName', 'style']
        self._type = 'FontIcon'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'color', 'className', 'hoverColor', 'iconName', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(FontIcon, self).__init__(**args)
