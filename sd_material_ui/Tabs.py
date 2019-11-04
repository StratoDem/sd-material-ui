# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tabs(Component):
    """A Tabs component.
Material UI Tabs component

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Pass Tab components as children
- id (string; optional): Element ID
- className (string; optional): CSS class name of the root element
- contentContainerClassName (string; optional): CSS class name of the content's container
- contentContainerStyle (dict; optional): Override the inline-styles of the content's container
- initialSelectedIndex (number; optional): Specify the initial visible tab index
- inkBarStyle (dict; optional): Override the inline-styles of the InkBar
- inkBarContainerStyle (dict; optional): Override the inline-styles of the InkBar container
- style (dict; optional): Override the inline-styles of the root element
- tabItemContainerStyle (dict; optional): Override the inline-styles of tab-labels container
- tabPropsArray (list; required): The values that will be passed to the individual Tab components inside Tabs. Allowed values:
   buttonStyle: Object
   className: string
   icon: Node
   label: Node
   style: Object
   value: any
- tabTemplateStyle (dict; optional): Override the inline-styles of the tab template
- value (bool | number | str | dict | list; optional): Makes Tabs controllable and selects the tab whose value prop matches this prop"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, contentContainerClassName=Component.UNDEFINED, contentContainerStyle=Component.UNDEFINED, fireEvent=Component.UNDEFINED, initialSelectedIndex=Component.UNDEFINED, inkBarStyle=Component.UNDEFINED, inkBarContainerStyle=Component.UNDEFINED, style=Component.UNDEFINED, tabItemContainerStyle=Component.UNDEFINED, tabPropsArray=Component.REQUIRED, tabTemplateStyle=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'contentContainerClassName', 'contentContainerStyle', 'initialSelectedIndex', 'inkBarStyle', 'inkBarContainerStyle', 'style', 'tabItemContainerStyle', 'tabPropsArray', 'tabTemplateStyle', 'value']
        self._type = 'Tabs'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'contentContainerClassName', 'contentContainerStyle', 'initialSelectedIndex', 'inkBarStyle', 'inkBarContainerStyle', 'style', 'tabItemContainerStyle', 'tabPropsArray', 'tabTemplateStyle', 'value']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['tabPropsArray']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Tabs, self).__init__(children=children, **args)
