# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Card(Component):
    """A Card component.
Material UI Card component

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Can be used to render elements inside the Card.
- id (string; optional): ID for Card
- className (string; optional): The CSS class name of the root element
- containerStyle (dict; optional): Override the inline-styles of the container element.
- expandable (boolean; optional): If true, this card component is expandable.
- expanded (boolean; optional): Set to null to keep the component uncontrolled.
- initiallyExpanded (boolean; optional): Whether this card is initially expanded.
- style (dict; optional): Override the inline-styles of the root element.
- showExpandableButton (boolean; optional): If true, this card component will include a button to expand the card.
- headerActAsExpander (boolean; optional): If true, a click on this card component expands the card.
- headerAvatar (a list of or a singular dash component, string or number; optional): This is the Avatar element to be displayed on the Card Header. If avatar is an Avatar or
other element, it will be rendered. If avatar is a string, it will be used as the image src
for an Avatar.
- headerStyle (dict; optional): Override the inline-styles of the root element.
- headerSubtitle (a list of or a singular dash component, string or number; optional): Can be used to render a subtitle in Card Header.
- headerSubtitleColor (string; optional): Override the subtitle color.
- headerSubtitleStyle (dict; optional): Override the inline-styles of the subtitle.
- headerTextStyle (dict; optional): Override the inline-styles of the text.
- headerTitle (a list of or a singular dash component, string or number; optional): Can be used to render a title in Card Header.
- headerTitleColor (string; optional): Override the title color.
- headerTitleStyle (dict; optional): Override the inline-styles of the title.
- headerIconStyle (dict; optional)
- titleExpandable (boolean; optional): If true, this card component is expandable.
- titleStyle (dict; optional): Override the inline-styles of the root element.
- titleSubtitle (a list of or a singular dash component, string or number; optional): Can be used to render a subtitle in the Card Title.
- titleSubtitleColor (string; optional): Override the subtitle color.
- titleSubtitleStyle (dict; optional): Override the inline-styles of the subtitle.
- titleTitle (a list of or a singular dash component, string or number; optional): Can be used to render a title in the Card Title.
- titleColor (string; optional): Override the title color.
- titleTitleStyle (dict; optional): Override the inline-styles of the title.
- textExpandable (boolean; optional): If true, this card component is expandable.
- textColor (string; optional): Override the CardText color.
- textStyle (dict; optional): Override the inline-styles of the root element."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, containerStyle=Component.UNDEFINED, expandable=Component.UNDEFINED, expanded=Component.UNDEFINED, initiallyExpanded=Component.UNDEFINED, style=Component.UNDEFINED, showExpandableButton=Component.UNDEFINED, headerActAsExpander=Component.UNDEFINED, headerAvatar=Component.UNDEFINED, headerStyle=Component.UNDEFINED, headerSubtitle=Component.UNDEFINED, headerSubtitleColor=Component.UNDEFINED, headerSubtitleStyle=Component.UNDEFINED, headerTextStyle=Component.UNDEFINED, headerTitle=Component.UNDEFINED, headerTitleColor=Component.UNDEFINED, headerTitleStyle=Component.UNDEFINED, headerIconStyle=Component.UNDEFINED, titleExpandable=Component.UNDEFINED, titleStyle=Component.UNDEFINED, titleSubtitle=Component.UNDEFINED, titleSubtitleColor=Component.UNDEFINED, titleSubtitleStyle=Component.UNDEFINED, titleTitle=Component.UNDEFINED, titleColor=Component.UNDEFINED, titleTitleStyle=Component.UNDEFINED, textExpandable=Component.UNDEFINED, textColor=Component.UNDEFINED, textStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'containerStyle', 'expandable', 'expanded', 'initiallyExpanded', 'style', 'showExpandableButton', 'headerActAsExpander', 'headerAvatar', 'headerStyle', 'headerSubtitle', 'headerSubtitleColor', 'headerSubtitleStyle', 'headerTextStyle', 'headerTitle', 'headerTitleColor', 'headerTitleStyle', 'headerIconStyle', 'titleExpandable', 'titleStyle', 'titleSubtitle', 'titleSubtitleColor', 'titleSubtitleStyle', 'titleTitle', 'titleColor', 'titleTitleStyle', 'textExpandable', 'textColor', 'textStyle']
        self._type = 'Card'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'containerStyle', 'expandable', 'expanded', 'initiallyExpanded', 'style', 'showExpandableButton', 'headerActAsExpander', 'headerAvatar', 'headerStyle', 'headerSubtitle', 'headerSubtitleColor', 'headerSubtitleStyle', 'headerTextStyle', 'headerTitle', 'headerTitleColor', 'headerTitleStyle', 'headerIconStyle', 'titleExpandable', 'titleStyle', 'titleSubtitle', 'titleSubtitleColor', 'titleSubtitleStyle', 'titleTitle', 'titleColor', 'titleTitleStyle', 'textExpandable', 'textColor', 'textStyle']
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
