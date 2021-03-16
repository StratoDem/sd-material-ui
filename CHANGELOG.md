# Change Log for sd-material-ui
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 4.4.1 2021-03-16
### Fixes
- Fixes Stepper to allow activeStep to be changed by callbacks

## 4.4.0 2021-02-02
### Adds
- Adds tooltip component

### Related issues:
- [#585](https://github.com/StratoDem/sd-material-ui/issues/585)

## 4.3.2 2020-12-28
### Fixes
- Fixes file that was missing from git

## 4.3.1 2020-12-22
### Fixes
- Fixes version for deployment on pypi

## 4.3.0 2020-12-22
### Adds
- Adds date and time picker components to sd-material-ui

### Related issues:
- [#560](https://github.com/StratoDem/sd-material-ui/issues/560)

## 4.2.0 2020-10-30
### Adds
- Adds `Pagination` component (https://material-ui.com/components/pagination/)

### Related Issues
- [#528](https://github.com/StratoDem/sd-material-ui/issues/528)

## 4.1.0 2020-10-13
### Adds
- Adds support for variant to Drawer

## 4.0.3 2020-10-13
### Adds
- Adds support for children to Snackbar

## 4.0.2 2020-10-09
### Fixes
- `RadioButtonGroup` now correctly updates `valueSelected` internally in state, as well as from
externally changed props

## 4.0.1 2020-09-01
### Fixes
- Fixes how the following components handle receiving props:
  - DropDownMenu
  - RadioButtonGroup
  - Toggle
- Passes the defaultExpanded prop to the Accordion base component

### Related issues:
- [470](https://github.com/StratoDem/sd-material-ui/issues/470)

## 4.0.0 2020-08-11
### Changes
- Updates many dependencies to resolve various vulnerabilities
- Changes the following components to use the latest `material-ui`
    - Accordion
    - Autocomplete
    - BottomNavigation
    - Button
    - Card
    - Checkbox
    - CircularProgress
    - CollapseTransition
    - Dialog
    - Divider
    - Drawer
    - DropDownMenu
    - FontIcon
    - Paper
    - Popover
    - RadioButtonGroup
    - Snackbar
    - Stepper
    - Subheader
    - Tabs
    - Toggle

### Related issues:
- [397](https://github.com/StratoDem/sd-material-ui/issues/397)
- [398](https://github.com/StratoDem/sd-material-ui/issues/398)
- [399](https://github.com/StratoDem/sd-material-ui/issues/399)
- [400](https://github.com/StratoDem/sd-material-ui/issues/400)
- [401](https://github.com/StratoDem/sd-material-ui/issues/401)
- [402](https://github.com/StratoDem/sd-material-ui/issues/402)
- [403](https://github.com/StratoDem/sd-material-ui/issues/403)
- [404](https://github.com/StratoDem/sd-material-ui/issues/404)
- [405](https://github.com/StratoDem/sd-material-ui/issues/405)
- [406](https://github.com/StratoDem/sd-material-ui/issues/406)
- [407](https://github.com/StratoDem/sd-material-ui/issues/407)
- [408](https://github.com/StratoDem/sd-material-ui/issues/408)
- [409](https://github.com/StratoDem/sd-material-ui/issues/409)
- [410](https://github.com/StratoDem/sd-material-ui/issues/410)
- [411](https://github.com/StratoDem/sd-material-ui/issues/411)
- [412](https://github.com/StratoDem/sd-material-ui/issues/412)
- [414](https://github.com/StratoDem/sd-material-ui/issues/414)
- [415](https://github.com/StratoDem/sd-material-ui/issues/415)
- [416](https://github.com/StratoDem/sd-material-ui/issues/416)
- [417](https://github.com/StratoDem/sd-material-ui/issues/417)
- [418](https://github.com/StratoDem/sd-material-ui/issues/418)
- [444](https://github.com/StratoDem/sd-material-ui/issues/444)
- [446](https://github.com/StratoDem/sd-material-ui/issues/446)

## 3.2.0 2019-11-04
### Adds
- Adds `value` prop to `Tabs` component. Add a `value` to the component initialization and a `value` key and value pair for each tab to the `tabPropsArray` to make the component expose the `value` for use in callbacks. Existing behavior should not change.

### Related issues:
- [235](https://github.com/StratoDem/sd-material-ui/issues/235)

## 3.1.2 2019-07-10
### Adds
- Adds `*ClassName` props to `Dialog` component for more styling control

## 3.1.1 2019-07-09
### Changes
- Internal updates:
    - `@babel/preset-env` to `v7.5.2` [#134](https://github.com/StratoDem/sd-material-ui/pull/134)
    - `webpack` to `v4.35.3` [#133](https://github.com/StratoDem/sd-material-ui/pull/133)
    - `babel` to `v7.5.0` [#132](https://github.com/StratoDem/sd-material-ui/pull/132)
    - `webpack-serve` to `v3` [#131](https://github.com/StratoDem/sd-material-ui/pull/131)
    - `react-docgen` to `v4` [#130](https://github.com/StratoDem/sd-material-ui/pull/130)
    - `eslint` to `v6` [#128](https://github.com/StratoDem/sd-material-ui/pull/128)

## 3.1.0 2019-07-03
### Changes
- Internal: Upgrades package structure to newest [dash-component-boilerplate](https://github.com/plotly/dash-component-boilerplate)

## 3.0.2 2018-03-15
### Fixes
- Fixes a problem where the `open` prop was not always correctly set for the `Drawer` component

## 3.0.1 2018-11-14
### Adds
- Adds additional documentation to the Dialog component regarding potentially confusing behavior

## 3.0.0 2018-11-05
### Changes
- Changes the `Stepper` component to uncontrolled, so callbacks are not needed for each `Step`. This changes BREAKS existing uses of the `Stepper` component

## 2.17.0 2018-10-31
### Adds
- Adds a `Step` component
- Adds a `Stepper` component to control progress through `Step`s

## 2.16.4 2018-10-24
### Fixes
- Handles `Snackbar` opening more than once with no callback listening to the `Snackbar` (https://github.com/StratoDem/sd-material-ui/issues/85)

## 2.16.3 - 2018-09-07
### Fixes
- v2.16.2 did not have correct bundle published on npm

## 2.16.2 - 2018-09-07
### Changes
- Changes the `Popover` to allow an `icon` button option
- Changes the `Popover` to allow styles for the button to be passed in using `buttonStyle`
- Removes some unnecessary characters that were appearing after the button

### Fixes
- Fixes items similar to https://github.com/StratoDem/sd-material-ui/issues/79 in the following components:
  - `Dialog`
  - `Drawer`
  - `DropDownMenu`
  - `RadioButtonGroup`
  - `Snackbar`
  - `Toggle`

## 2.16.1 - 2018-09-05
### Fixes
- Fixes https://github.com/StratoDem/sd-material-ui/issues/79 where `Checkbox` callback was firing twice to the server on a click event

## 2.16.0 - 2018-08-30
### Added
- Adds `Popover` as an uncontrolled component which can render other components as children

## 2.15.0 - 2018-06-13
### Added
- Adds `searchEndpointAPI` prop to `AutoComplete` to allow for external searching https://github.com/StratoDem/sd-material-ui/issues/76

## 2.14.1 - 2018-06-10
### Added
- Adds `QuestionTabs` component for tabs version of `Questions` (internal)

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
