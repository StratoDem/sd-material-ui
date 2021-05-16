# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FontIcon(Component):
    """A FontIcon component.
Material UI FontIcon component

Keyword arguments:

- id (string; default ''):
    id for the component.

- className (string; default ''):
    CSS class name of the root element.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root   colorPrimary   colorSecondary
    colorAction   colorError   colorDisabled   fontSizeSmall
    fontSizeLarge   fontSizeInherit.

    `classes` is a dict with keys:

    - root (string; optional)

    - colorPrimary (string; optional)

    - colorSecondary (string; optional)

    - colorAction (string; optional)

    - colorError (string; optional)

    - colorDisabled (string; optional)

    - fontSizeSmall (string; optional)

    - fontSizeLarge (string; optional)

    - fontSizeInherit (string; optional)

- iconName (string; default ''):
    defines specific icon when using public icon font.

- style (dict; optional):
    override inline-styles of root element."""
    @_explicitize_args
    def __init__(self, classes=Component.UNDEFINED, className=Component.UNDEFINED, id=Component.UNDEFINED, iconName=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'classes', 'iconName', 'style']
        self._type = 'FontIcon'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'classes', 'iconName', 'style']
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
