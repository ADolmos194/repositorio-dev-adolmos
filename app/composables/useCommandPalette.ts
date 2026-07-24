/** Shared open/close state for the Cmd/Ctrl+K command palette. */
export function useCommandPalette() {
  const open = useState<boolean>('cmdk-open', () => false)
  return { open }
}
