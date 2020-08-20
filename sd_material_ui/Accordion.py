# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Accordion(Component):
    """An Accordion component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Elements to render inside the accordion
- classes (dict; optional): The classes to be applied to this component. The keys in this object must be valid CSS rule
names, and the values must be strings for the classnames to be assigned to each rule name
Valid rule names are:
  root
  rounded
  expanded
  disabled. classes has the following type: dict containing keys 'root', 'rounded', 'expanded', 'disabled'.
  Those keys have the following types:
  - root (string; optional)
  - rounded (string; optional)
  - expanded (string; optional)
  - disabled (string; optional)
- className (string; optional): The className of the root element
- defaultExpanded (boolean; default False): If true, expands the accordion by defaulgt
- detailClasses (dict; optional): The classes to be applied to the details component (the element containing the accordion's
children). The keys in this object must be valid CSS rule names, and the values must be strings
for the classnames to be assigned to each rule name
Valid rule names are:
  root. detailClasses has the following type: dict containing keys 'root'.
  Those keys have the following types:
  - root (string; optional)
- disabled (boolean; default False): If true, the accordion will be displayed in a disabled state
- expanded (boolean; default False): If true, expands the accordion, otherwise collapse it. Setting this prop enables control
over the accordion
- id (string; required): The ID of the root element
- label (string; default ''): The text displayed at the top of the accordion, regardless of expanded state
- square (boolean; default False): If true, rounded corners are disabled
- summaryClasses (dict; optional): The classes to be applied to the summary component (the element containing the accordion's
label). The keys in this object must be valid CSS rule names, and the values must be strings
for the classnames to be assigned to each rule name
Valid rule names are:
  root
  expanded
  focused
  disabled
  content
  expandIcon. summaryClasses has the following type: dict containing keys 'root', 'expanded', 'focused', 'disabled', 'content', 'expandIcon'.
  Those keys have the following types:
  - root (string; optional)
  - expanded (string; optional)
  - focused (string; optional)
  - disabled (string; optional)
  - content (string; optional)
  - expandIcon (string; optional)"""
    @_explicitize_args
    def __init__(self, children=None, classes=Component.UNDEFINED, className=Component.UNDEFINED, defaultExpanded=Component.UNDEFINED, detailClasses=Component.UNDEFINED, disabled=Component.UNDEFINED, expanded=Component.UNDEFINED, fireEvent=Component.UNDEFINED, id=Component.REQUIRED, label=Component.UNDEFINED, square=Component.UNDEFINED, summaryClasses=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'classes', 'className', 'defaultExpanded', 'detailClasses', 'disabled', 'expanded', 'id', 'label', 'square', 'summaryClasses']
        self._type = 'Accordion'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'classes', 'className', 'defaultExpanded', 'detailClasses', 'disabled', 'expanded', 'id', 'label', 'square', 'summaryClasses']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Accordion, self).__init__(children=children, **args)
