# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Drawer(Component):
    """A Drawer component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Children to render inside of the Dialog
- anchor (string; default "left"): Controls where the drawer appears. Must be one of "top", "bottom", "left", or "right"
Defaults to "left"
- id (string; required): Dialog ID
- classes (dict; optional): The classes to be applied to this component. This keys in this object must be valid CSS rule
names, and the values must be strings for the classnames to be assigned to each rule name
Valid rule names are:
  root
  docked
  paper
  paperAnchorLeft
  paperAnchorRight
  paperAnchorTop
  paperAnchorBottom
  paperAnchorDockedLeft
  paperAnchorDockedTop
  paperAnchorDockedRight
  paperAnchorDockedBottom
  modal. classes has the following type: dict containing keys 'root', 'docked', 'paper', 'paperAnchorLeft', 'paperAnchorRight', 'paperAnchorTop', 'paperAnchorBottom', 'paperAnchorDockedLeft', 'paperAnchorDockedTop', 'paperAnchorDockedRight', 'paperAnchorDockedBottom', 'modal'.
  Those keys have the following types:
  - root (string; optional)
  - docked (string; optional)
  - paper (string; optional)
  - paperAnchorLeft (string; optional)
  - paperAnchorRight (string; optional)
  - paperAnchorTop (string; optional)
  - paperAnchorBottom (string; optional)
  - paperAnchorDockedLeft (string; optional)
  - paperAnchorDockedTop (string; optional)
  - paperAnchorDockedRight (string; optional)
  - paperAnchorDockedBottom (string; optional)
  - modal (string; optional)
- className (string; default ''): CSS class name of the root element
- open (boolean; default False): Is the drawer open?

IMPORTANT: When using this component in Dash, a listener must be set up (either as state or
an input) for this component's props.open value in order to achieve the desired behavior."""
    @_explicitize_args
    def __init__(self, children=None, anchor=Component.UNDEFINED, id=Component.REQUIRED, classes=Component.UNDEFINED, className=Component.UNDEFINED, open=Component.UNDEFINED, classNameRoot=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'anchor', 'id', 'classes', 'className', 'open']
        self._type = 'Drawer'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'anchor', 'id', 'classes', 'className', 'open']
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
