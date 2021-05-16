# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Card(Component):
    """A Card component.
Material UI Card component

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Can be used to render elements inside the Card.

- className (string; default ''):
    The CSS class name of the root element.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root.

    `classes` is a dict with keys:

    - root (string; optional)

- contentClassName (string; default ''):
    The CSS class name of the content element.

- contentClasses (dict; optional):
    The classes to be applied to the content component. This keys in
    this object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name.

    `contentClasses` is a dict with keys:

    - root (string; optional)

- raised (boolean; default True):
    If True, the Card component will appear raised.

- style (dict; optional):
    Styles to be implemented as inline css."""
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, classes=Component.UNDEFINED, contentClassName=Component.UNDEFINED, contentClasses=Component.UNDEFINED, style=Component.UNDEFINED, raised=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'className', 'classes', 'contentClassName', 'contentClasses', 'raised', 'style']
        self._type = 'Card'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'className', 'classes', 'contentClassName', 'contentClasses', 'raised', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Card, self).__init__(children=children, **args)
