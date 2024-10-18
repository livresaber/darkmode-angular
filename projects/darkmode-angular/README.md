# Darkmode Angular Component

The `darkmode-angular` component allows you to easily toggle between light and dark mode in your Angular application. It saves the user's mode preference in `localStorage` and applies the corresponding theme (`lightmode` or `darkmode`) to the `body` tag.

## Installation

To install the component, use npm:

```bash
npm install darkmode-angular
```

## Usage

1. Import the `DarkmodeComponent` into your Angular module or component where you want to use it.

   ```typescript
   import { DarkmodeComponent } from 'darkmode-angular';
   ```

2. Add the `DarkmodeComponent` to your template.

   ```html
   <darkmode-angular [hiddenLabel]="true"></darkmode-angular>
   ```

   **Inputs:**
   - `hiddenLabel`: (optional) A `boolean` input that determines if the mode label (e.g., "DarkMode" or "LightMode") should be hidden. Set to `true` to hide the label.

## Example

Here’s an example of how you can integrate the `darkmode-angular` component into your Angular app:

1. Import the `DarkmodeComponent` into your module or component.

   ```typescript
   import { DarkmodeComponent } from 'darkmode-angular';

   @NgModule({
     declarations: [...],
     imports: [DarkmodeComponent],
   })
   export class AppModule {}
   ```

2. Use the component in your HTML file.

   ```html
   <darkmode-angular [hiddenLabel]="false"></darkmode-angular>
   ```

3. Customize the button by toggling between dark mode and light mode when clicked. The mode is saved in `localStorage` and persists across sessions.

## Styling

The component applies the following classes to the `body` based on the selected mode:

- `darkmode`: Applied when dark mode is active.
- `lightmode`: Applied when light mode is active.

You can customize the styles for dark and light mode by adding the necessary CSS rules in your global styles file:

```scss
body.darkmode {
  background-color: #000;
  color: #fff;
}

body.lightmode {
  background-color: #fff;
  color: #000;
}
```

## API

- `toggleMode()`: Method to toggle between dark and light mode.
- `setMode(value: boolean)`: Method to set the mode manually. Pass `true` for dark mode and `false` for light mode.
