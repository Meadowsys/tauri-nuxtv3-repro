A minimal project to attempt to reproduce [this issue](https://github.com/tauri-apps/tauri/issues/4098).

## Steps

- `pnpm i` to install node dependencies
- `pnpm tauri dev` to run the development server build, observe that it works and you can see the text
- `pnpm tauri build` or `pnpm tauri build --debug` to build the app (artifacts should be in `src-tauri/target/{release,debug}/bundle), and observe the bundled app does not work as intended (blank white screen)
