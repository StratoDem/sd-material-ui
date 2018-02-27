# Change Log for sd-material-ui
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

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
