# UIKit Custom Theme Generator

This template generates custom theme files for UIKit projects.

## Usage

```bash
npx uikit generate theme brand        # Creates theme-brand.js
npx uikit generate theme my-company   # Creates theme-my-company.js
```

## Generated Files

- `src/themes/presets/theme-{name}.js` - Complete theme with light/dark modes
- All 29 semantic colors included
- Ready for customization
- Works with existing bundle system

## Next Steps After Generation

1. **Customize Colors** - Edit the generated theme file with your brand colors
2. **Bundle CSS** - Run `npx uikit bundle` to generate CSS
3. **Use in App** - Apply theme: `<ThemeProvider theme="your-theme-name">`

## Template Features

✅ **Complete Color System** - All 29 UIKit semantic colors
✅ **Light & Dark Modes** - Automatically adapted colors
✅ **Design Tokens** - Optional custom fonts and styles
✅ **OKLCH Ready** - Comments for upgrading to OKLCH colors
✅ **Bundle Compatible** - Works with existing `npx uikit bundle`