<script setup lang="ts">
const { c, locale, set: setLocale } = useLocale()
const { theme, toggle: toggleTheme } = useTheme()
const { open } = useCommandPalette()
const router = useRouter()

interface Command {
  id: string
  group: 'nav' | 'actions'
  label: string
  icon: string
  run: () => void
}

const query = ref('')
const activeIndex = ref(0)
const inputRef = ref<HTMLInputElement | null>(null)

function close() {
  open.value = false
  query.value = ''
  activeIndex.value = 0
}

function go(path: string) {
  router.push(path)
  close()
}

const commands = computed<Command[]>(() => [
  { id: 'home', group: 'nav', label: 'home', icon: 'lucide:terminal-square', run: () => go('/') },
  { id: 'about', group: 'nav', label: c.value.nav.about, icon: 'lucide:user', run: () => go('/about') },
  { id: 'stack', group: 'nav', label: c.value.nav.stack, icon: 'lucide:layers', run: () => go('/stack') },
  { id: 'experience', group: 'nav', label: c.value.nav.experience, icon: 'lucide:briefcase', run: () => go('/experience') },
  { id: 'projects', group: 'nav', label: c.value.nav.projects, icon: 'lucide:folder-git-2', run: () => go('/projects') },
  { id: 'contact', group: 'nav', label: c.value.nav.contact, icon: 'lucide:mail', run: () => go('/contact') },
  {
    id: 'theme',
    group: 'actions',
    label: theme.value === 'dark' ? c.value.palette.themeToLight : c.value.palette.themeToDark,
    icon: theme.value === 'dark' ? 'lucide:sun' : 'lucide:moon',
    run: () => { toggleTheme(); close() },
  },
  {
    id: 'lang',
    group: 'actions',
    label: locale.value === 'es' ? c.value.palette.langToEn : c.value.palette.langToEs,
    icon: 'lucide:languages',
    run: () => { setLocale(locale.value === 'es' ? 'en' : 'es'); close() },
  },
])

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return commands.value
  return commands.value.filter((cmd) => cmd.label.toLowerCase().includes(q))
})

watch(filtered, () => { activeIndex.value = 0 })

function move(delta: number) {
  if (!filtered.value.length) return
  activeIndex.value = (activeIndex.value + delta + filtered.value.length) % filtered.value.length
}

function runActive() {
  filtered.value[activeIndex.value]?.run()
}

function onKeydown(e: KeyboardEvent) {
  const isK = e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)
  if (isK) {
    e.preventDefault()
    open.value = !open.value
    return
  }
  if (!open.value) return
  if (e.key === 'Escape') { close(); return }
  if (e.key === 'ArrowDown') { e.preventDefault(); move(1); return }
  if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); return }
  if (e.key === 'Enter') { e.preventDefault(); runActive() }
}

watch(open, async (v) => {
  if (v) {
    await nextTick()
    inputRef.value?.focus()
  }
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="cmdk-overlay" @click.self="close">
      <div class="cmdk" role="dialog" aria-modal="true" :aria-label="c.palette.placeholder">
        <div class="cmdk__input-row">
          <Icon name="lucide:search" class="cmdk__icon" />
          <input
            ref="inputRef"
            v-model="query"
            class="cmdk__input"
            type="text"
            :placeholder="c.palette.placeholder"
            autocomplete="off"
            spellcheck="false"
          >
          <kbd class="cmdk__esc">esc</kbd>
        </div>

        <div class="cmdk__list" role="listbox">
          <template v-for="(cmd, i) in filtered" :key="cmd.id">
            <div v-if="i === 0 || filtered[i - 1]?.group !== cmd.group" class="cmdk__group-label">
              {{ cmd.group === 'nav' ? c.palette.navGroup : c.palette.actionsGroup }}
            </div>
            <button
              type="button"
              class="cmdk__item"
              :class="{ active: i === activeIndex }"
              role="option"
              :aria-selected="i === activeIndex"
              @click="cmd.run()"
              @mouseenter="activeIndex = i"
            >
              <Icon :name="cmd.icon" class="cmdk__item-ico" />
              <span>{{ cmd.label }}</span>
            </button>
          </template>

          <div v-if="!filtered.length" class="cmdk__empty">{{ c.palette.empty }}</div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
