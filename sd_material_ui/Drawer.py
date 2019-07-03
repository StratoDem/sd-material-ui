# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Drawer(Component):
    """A Drawer component.
Material UI Drawer component

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The contents to render inside the Drawer
- className (string; optional): The CSS class name of the root element
- containerClassName (string; optional): The CSS class name of the container element
- containerClosedClassName (string; optional): The CSS class name to add to the container element when it is closed
- containerStyle (dict; optional): Override the inline styles of the container element
- disableSwipeToOpen (boolean; optional): If true, swiping sideways when the Drawer is closed will not open it
- docked (boolean; optional): If true, the Drawer will be docked. In this state, the overlay won't show and clicking on a
menu item will not close the Drawer.
- id (string; required): Component ID
- open (boolean; optional): If true, the Drawer is opened. Whether true or false,
this guarantees that the Drawer is a controlled component
- openSecondary (boolean; optional): If true, the Drawer is positioned to open from the opposite side
- overlayClassName (string; optional): The CSS class name to add to the Overlay component that is rendered behind the Drawer
- overlayStyle (dict; optional): Override the inline-styles of the Overlay component that is rendered behind the Drawer
- style (dict; optional): Override the inline styles of the root element
- swipeAreaWidth (number; optional): The width of the left most (or right most) area in pixels where the Drawer can be swiped
open from. Setting this to null spans that area to the entire page (CAUTION! Setting this
property to null might cause issues with sliders and swipeable Tabs: use at your own risk).
- width (string | number; optional): The width of the Drawer in pixels or percentage in string format ex. 50% to fill half of the
window or 100% and so on. Defaults to using the values from theme.
- zDepth (number; optional): The zDepth of the Drawer."""
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, containerClassName=Component.UNDEFINED, containerClosedClassName=Component.UNDEFINED, containerStyle=Component.UNDEFINED, disableSwipeToOpen=Component.UNDEFINED, docked=Component.UNDEFINED, id=Component.REQUIRED, open=Component.UNDEFINED, openSecondary=Component.UNDEFINED, overlayClassName=Component.UNDEFINED, overlayStyle=Component.UNDEFINED, style=Component.UNDEFINED, swipeAreaWidth=Component.UNDEFINED, width=Component.UNDEFINED, zDepth=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'className', 'containerClassName', 'containerClosedClassName', 'containerStyle', 'disableSwipeToOpen', 'docked', 'id', 'open', 'openSecondary', 'overlayClassName', 'overlayStyle', 'style', 'swipeAreaWidth', 'width', 'zDepth']
        self._type = 'Drawer'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'className', 'containerClassName', 'containerClosedClassName', 'containerStyle', 'disableSwipeToOpen', 'docked', 'id', 'open', 'openSecondary', 'overlayClassName', 'overlayStyle', 'style', 'swipeAreaWidth', 'width', 'zDepth']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Drawer, self).__init__(children=children, **args)
