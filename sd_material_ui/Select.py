# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args

class Select(Component):
    """A Select component.

Keyword arguments:
- autoWidth (boolean; default False): If true, the width of the popover will automatically be set according to the items inside
the select, otherwise it will be at least the width of the select input.
- classes (dict; optional): The classes to be applied to this component. This keys in this object must be valid CSS rule
names, and the values must be strings for the classnames to be assigned to each rule name
Valid rule names are:
  root
  filled
  outlined
  disabled. classes has the following type: dict containing keys 'root', 'filled', 'outlined', 'disabled'.
  Those keys have the following types:
  - root (string; optional)
  - filled (string; optional)
  - outlined (string; optional)
  - disabled (string; optional)
- disabled (boolean; default False): If true, this select will not be interactive
- id (string; required): The ID used for this select
- multiple (boolean; default False): Allows multiple selections from the select if true, else only one selection
- options (list; optional): An array of objects, with each object representing an option in the menu. Each object must
must contain either a value and primaryText keys or, if useGrouping is set to true, then an
object may contain a grouping key. The order of the array is important when grouping, as each
item will be associated with the grouping most recently seen while iterating through the array
Example:
 [
   {"grouping": "group A"},
   {"primaryText": "option 1", "value": 1},
   {"primaryText": "option 2", "value": 2},
   {"grouping": "group B"},
   {"primaryText": "option 3", "value": 3},
 ]
 This will group options 1 and 2 with group A, and option 3 with group B.
- value (bool | number | str | dict | list; optional): The active selection for the component
- variant (string; default "standard"): Allows selection of one of three variant types of selects: filled, outlined, or standard. Set
to standard by default"""
    @_explicitize_args
    def __init__(self, autoWidth=Component.UNDEFINED, classes=Component.UNDEFINED, disabled=Component.UNDEFINED, helperText=Component.UNDEFINED, id=Component.REQUIRED, labelText=Component.UNDEFINED, labelId=Component.UNDEFINED, multiple=Component.UNDEFINED, options=Component.UNDEFINED, useGrouping=Component.UNDEFINED, value=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'autoFocus', 'autoWidt', 'classes', 'disabled', 'MenuProps', 'multiple', 'name', 'native', 'open', 'readOnly', 'renderValue', 'tabIndex', 'value', 'variant']
        self._type = 'Select'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'autoFocus', 'autoWidt', 'classes', 'disabled', 'MenuProps', 'multiple', 'name', 'native', 'open', 'readOnly', 'renderValue', 'tabIndex', 'value', 'variant']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Select, self).__init__(**args)
