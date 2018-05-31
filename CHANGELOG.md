# Change Log for sd-material-ui
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 2.14.0 - 2018-05-31
### Added
- `Tabs`, which takes mainly `children` and `tabPropsArray`. `children` and `tabPropsArray` must be `Array`s of the same length, which are rendered as `Tab` components.
This structure is necessary since Dash currently only passes along React components through the `children` prop, and using `Tab` directly was not rendering correctly.
Any of the standard props from `Tab` can be passed along through `tabPropsArray`.

```python
# Renders two tabs with the children lined up with the tabs props
import sd_material_ui

sd_material_ui.Tabs(
    children=[
        html.Div('Tab 1'),
        html.Div('Tab 2'),
    ],
    tabPropsArray=[
        {'label': 'Tab 1 label'},
        {'label': 'Tab 2 label'},
    ]
)
```

## 2.13.3 - 2018-05-22
### Added
- Adds `Questions` component for special use case

##2.13.2 - 2018-05-18
### Fixes
- Updates prop names internally in `Card` from `initialyExpanded` to `initiallyExpanded` to fix syntax (spelling) error

## 2.13.1 - 2018-05-18
### Fixes
- Updates prop names internally in `CardText` for `style` and `color` to allow `textColor` and `textStyle` props to actually change `CardText` subcomponent

### Added
- Adds `id` and `headerIconStyle` props to `CardComponent`:
  - `id` as a `string` to allow for callbacks assigned to the card
  - `headerIconStyle` to allow for styling the icon in the `CardHeader` subcomponent

## 2.13.0 - 2018-05-17
### Added
- Adds uncontrolled Card component

## 2.12.0 - 2018-04-19
### Changed
- Adds functionality to `AutoComplete` component to allow for sending back `value` instead of `searchText`

Example
```python
# SDAutoComplete with exactMatch
# This ships back 1 when the user types in 'magenta' exactly
# This ships back {'testKey': 'testVal'} when the user types in 'aqua' exactly
sd_material_ui.AutoComplete(
    id='input-autocomplete-exactmatch',
    anchorOrigin={'vertical': 'center', 'horizontal': 'middle'},
    animated=True,
    exactMatch=True,
    dashCallbackDelay=3000,
    dataSource=[
        dict(label='pink', value=0),
        dict(label='magenta', value=1),
        dict(label='aqua', value={'testKey': 'testVal'}),
        dict(label='aquamarine', value=3),
    ],
    fullWidth=True,
    floatingLabelText="Type here",
    filter='caseSensitiveFilter')
```

## 2.11.1 - 2018-04-19
### Fixes
- Updates `metadata.json` for new props in `v2.11.0`

## 2.11.0 - 2018-04-19
### Added
- Adds `containerClosedClassName` prop to `Drawer` which applies additional
classes to the drawer when it is closed to allow for custom styling (like offsets or transitions)

### Changed
- :mega: **BREAKING** Changes `containerclassName` prop to `containerClassName` in `Drawer` to match `material-ui` prop naming format.

Example
```python
# This has 'my-test-class my-closed-class' as the class name when closed
# and 'my-test-class' as the class name when open
sd_material_ui.Drawer(
    open=False,
    containerClassName='my-test-class',
    containerClosedClassName='my-closed-class')
```

### Fixes
- Adds `id` prop to `FontIcon`

## 2.10.1 - 2018-04-09
### Fixes
- Fixes `package.json` and `version.py` mismatch

## 2.10.0 - 2018-04-09
### Added
- Add Subheader Component

## 2.9.0 - 2018-04-09
### Added
- Add Paper Component

## 2.8.0 - 2018-04-09
### Added
- Add RadioButtonGroup Component

## 2.7.1 - 2018-03-26
### Fixes
- Fixes `package.json` and `version.py` mismatch

## 2.7.0 - 2018-03-26
### Added
- Add AutoComplete Component

## 2.6.1 - 2018-03-19
### Fixes
- Fixes versioning in package.json

## 2.6.0 - 2018-03-19
### Added
- Add FontIcon Component

### Changed
- change `IconButton.react.js` documentation to notify user that FontIcon cannot be passed as param

## 2.5.0 - 2018-03-15
### Added
- Add IconButton Component

### Changed
- Change `usage.py` test-buttons-together tests to include IconButton

## 2.4.0 - 2018-03-14
### Added
- Add CircularProgress Component

### Changed
- Change `usage.py` button test to avoid NoneType Error

## 2.3.1 - 2018-03-13
### Fixes
- Fixes versioning issue with `version.py`

## 2.3.0 - 2018-03-12
### Added
- Add Divider component

## 2.2.0 - 2018-02-27
### Added
- Add `n_clicks_previous` prop to Flat and Raised buttons
- Add new tests in `usage.py` to demonstrate behavior of new prop

## 2.1.2 - 2018-02-22
### Changed
- Add `id` as a prop to `DropDownMenu`

## 2.1.1 - 2018-02-22
### Changed
- Updated README and added example

## 2.1.0 - 2018-02-22
### Changed
- Replaced all references to `PropTypes` in favor of Flow type hinting.

## 2.0.0 - 2018-01-26
### Changed
- Renamed components
- Moved all components into their own directories in preparation for adding individual READMEs

## 1.7.5 - 2018-01-23
### Changed
- Removed `null` default for SDDropDownMenu's `iconButton`, allowing the arrow to appear by default

## 1.7.4 - 2018-01-19
### Added
- `customData` prop now available to menu items in SDDropDownMenu

## 1.7.3 - 2018-01-18
### Changed
- Allow a menu item's value to be any type of data, not just `number`

## 1.7.2 - 2018-01-17
### Added
- SDDropDownMenu

### Changed
- Versioning fix for 1.7.2 in deployment

## 1.6.1 - 2018-01-16
### Changed
Make label a default prop on both flat and raised buttons

## 1.6.0 - 2018-01-12
### Added
- SDSnackbar

## 1.5.1 - 2018-01-11
### Changed
- Allow className on SDDialog component

## 1.5.0 - 2018-01-10
### Added
- SDToggle

### Changed
- SDCheckbox now sets state even without setProps or fireEvent defined

## 1.4.0 - 2018-01-09
### Added
- SDCheckbox

## 1.3.0 - 2018-01-02
### Added
- SDDrawer

### Fixed
- Dialog, now a pure component that can be controlled in Dash

## 1.2.1 - 2018-01-02
### Added
- SDRaisedButton

## 1.2.0 - 2017-12-29
### Added
- SDDialog
- SDFlatButton

### Fixed
- Webpack config, no longer creating issues with 2 instances of React

## 1.0.0 - 2017-12-02
### Added
- BottomNavigation

## 0.0.1 - 2017-12-02
- Initial release

[Unreleased]: https://github.com/StratoDem/sd-material-ui/v0.0.1...HEAD
