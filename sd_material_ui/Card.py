# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Card(Component):
    """A Card component.
Material UI Card component

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Can be used to render elements inside the Card.
- id (string; default ''): ID for Card
- className (string; default ''): The CSS class name of the root element
- classes (dict; optional): The classes to be applied to this component. This keys in this object must be valid CSS rule
names, and the values must be strings for the classnames to be assigned to each rule name
- actionAreaClassName (string; default ''): The CSS class name of the actionArea element
- actionAreaClasses (dict; optional): The classes to be applied to the actionArea component. This keys in this object must be valid CSS rule
names, and the values must be strings for the classnames to be assigned to each rule name
- actionsClassName (string; default ''): The CSS class name of the actions element
- actionsClasses (dict; optional): The classes to be applied to the actions component. This keys in this object must be valid CSS rule
names, and the values must be strings for the classnames to be assigned to each rule name
- contentClassName (string; default ''): The CSS class name of the content element
- contentClasses (dict; optional): The classes to be applied to the content component. This keys in this object must be valid CSS rule
names, and the values must be strings for the classnames to be assigned to each rule name
- headerClassName (string; default ''): The CSS class name of the header element
- headerClasses (dict; optional): The classes to be applied to the header component. This keys in this object must be valid CSS rule
names, and the values must be strings for the classnames to be assigned to each rule name
- headerAvatar (a list of or a singular dash component, string or number; optional): This is the Avatar element to be displayed on the Card Header. If avatar is an Avatar or
other element, it will be rendered. If avatar is a string, it will be used as the image src
for an Avatar.
- headerIconClassName (string; optional): The CSS class name of the header Icon element
- style (dict; optional): Styles to be implemented as inline css"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, classes=Component.UNDEFINED, actionAreaClassName=Component.UNDEFINED, actionAreaClasses=Component.UNDEFINED, actionsClassName=Component.UNDEFINED, actionsClasses=Component.UNDEFINED, contentClassName=Component.UNDEFINED, contentClasses=Component.UNDEFINED, headerClassName=Component.UNDEFINED, headerClasses=Component.UNDEFINED, headerAvatar=Component.UNDEFINED, headerIconClassName=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'classes', 'actionAreaClassName', 'actionAreaClasses', 'actionsClassName', 'actionsClasses', 'contentClassName', 'contentClasses', 'headerClassName', 'headerClasses', 'headerAvatar', 'headerIconClassName', 'style']
        self._type = 'Card'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'classes', 'actionAreaClassName', 'actionAreaClasses', 'actionsClassName', 'actionsClasses', 'contentClassName', 'contentClasses', 'headerClassName', 'headerClasses', 'headerAvatar', 'headerIconClassName', 'style']
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
