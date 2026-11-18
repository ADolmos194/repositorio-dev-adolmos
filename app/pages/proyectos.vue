<script setup lang="ts">
import code from '~/stitch-scripts/proyectos.js?raw'
useStitchScript(code)
</script>

<template>
<div class="page-proyectos relative z-10 min-h-screen font-mono text-[13px] text-[#f3f4f6] antialiased selection:bg-[#d4a64a] selection:text-black arcade-skin">
<SiteHeader />
<main class="w-full pt-16 bg-transparent min-h-screen">
<div class="flex flex-col w-full">
<!-- Arcade Score HUD & Telemetry -->

<!-- Dossier Header Arcade Intro Section -->
<PageHero :eyebrow="$t(96)" :title="$t(97)" :lead="$t(98)"><div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-arcade-dark p-3 border-2 border-arcade-border">
<div class="flex flex-wrap items-center gap-2" id="filter-group">
<button class="filter-btn px-3 py-2 bg-arcade-black text-crimson-bright font-arcade text-[10px] uppercase border-2 border-crimson-bright flex items-center gap-2 transition-colors" data-filter="all">
<span class="w-2 h-2 bg-crimson-bright"></span>
<span>{{ $t(99) }}</span>
</button>
<button class="filter-btn px-3 py-2 bg-arcade-panel text-secondary hover:text-white hover:border-crimson-bright border-2 border-arcade-border font-arcade text-[10px] uppercase transition-colors" data-filter="fullstack">
            {{ $t(100) }}
          </button>
<button class="filter-btn px-3 py-2 bg-arcade-panel text-secondary hover:text-white hover:border-crimson-bright border-2 border-arcade-border font-arcade text-[10px] uppercase transition-colors" data-filter="frontend">
            {{ $t(101) }}
          </button>
</div>
<div class="hidden lg:flex items-center gap-2 font-arcade text-[10px] text-tactical-zinc">

<span class="w-2 h-2 bg-crimson-bright"></span>
</div>
</div></PageHero>
<!-- Mission Stages / Dossier Cards -->
<section class="w-full px-4 sm:px-6 lg:px-8 py-2">
<div class="max-w-7xl mx-auto flex flex-col gap-10">
<!-- MISSION 01: STAGE 01 - THE TRANSACTIONAL VAULT -->
<article class="project-card flex flex-col bg-arcade-dark border-2 border-arcade-border hover:border-crimson-pulse hover:rotate-0 transition-all duration-300 -rotate-1" data-category="fullstack">
<!-- Mission Header Banner -->
<div class="flex flex-wrap items-center justify-between gap-2 p-3 bg-arcade-panel border-b-2 border-arcade-border">
<div class="flex items-center gap-3">
<span class="px-2 py-0.5 bg-arcade-black border border-crimson-pulse text-crimson-bright font-arcade text-[10px]">{{ $t(102) }}</span>
<span class="font-arcade text-xs text-white tracking-wide">{{ $t(103) }}</span>
</div>
<div class="flex items-center gap-2 font-arcade text-[10px]">
<span class="w-2 h-2 bg-crimson-bright inline-block"></span>
<span class="text-crimson-bright">{{ $t(104) }}</span>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6">
<!-- Left Column: Mission Briefing & Defenses -->
<div class="lg:col-span-7 flex flex-col gap-4">
<div>

<h2 class="font-arcade text-lg sm:text-xl text-white tracking-tight uppercase flex items-center gap-2">
<span class="text-crimson-bright">{{ $t(105) }}</span> {{ $t(106) }}
</h2>
<p class="font-mono text-sm text-secondary mt-2 leading-relaxed">
                  {{ $t(107) }}
                </p>
</div>
<!-- 8-Bit Pixel Stack Badges -->
<div class="flex flex-wrap gap-2 pt-1 font-arcade text-[10px] rotate-1">
<span class="px-2 py-1 bg-arcade-black border-2 border-arcade-border text-white hover:border-crimson-bright transition-colors">{{ $t(108) }}</span>
<span class="px-2 py-1 bg-crimson-dark border-2 border-crimson-pulse text-crimson-bright font-semibold">{{ $t(109) }}</span>
<span class="px-2 py-1 bg-arcade-black border-2 border-arcade-border text-white">{{ $t(110) }}</span>
<span class="px-2 py-1 bg-arcade-black border-2 border-arcade-border text-white">{{ $t(111) }}</span>
<span class="px-2 py-1 bg-arcade-black border-2 border-tactical-zinc text-secondary">{{ $t(112) }}</span>
</div>
<!-- Boss Defenses Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
<div class="bg-arcade-card p-3 border-2 border-arcade-border flex flex-col -rotate-1">
<span class="font-arcade text-[10px] text-crimson-bright flex items-center gap-2">
<span class="w-1.5 h-1.5 bg-crimson-bright"></span>{{ $t(113) }}
                  </span>
<span class="font-mono font-semibold text-white text-sm mt-1">{{ $t(114) }}</span>
<span class="font-mono text-xs text-tactical-zinc mt-0.5">{{ $t(115) }}</span>
</div>
<div class="bg-arcade-card p-3 border-2 border-arcade-border flex flex-col rotate-1">
<span class="font-arcade text-[10px] text-crimson-bright flex items-center gap-2">
<span class="w-1.5 h-1.5 bg-crimson-bright"></span>{{ $t(116) }}
                  </span>
<span class="font-mono font-semibold text-white text-sm mt-1">{{ $t(117) }}</span>
<span class="font-mono text-xs text-tactical-zinc mt-0.5">{{ $t(118) }}</span>
</div>
<div class="bg-arcade-card p-3 border-2 border-arcade-border flex flex-col rotate-2">
<span class="font-arcade text-[10px] text-crimson-bright flex items-center gap-2">
<span class="w-1.5 h-1.5 bg-crimson-bright"></span>{{ $t(119) }}
                  </span>
<span class="font-mono font-semibold text-white text-sm mt-1">{{ $t(120) }}</span>
<span class="font-mono text-xs text-tactical-zinc mt-0.5">{{ $t(121) }}</span>
</div>
<div class="bg-arcade-card p-3 border-2 border-arcade-border flex flex-col -rotate-2">
<span class="font-arcade text-[10px] text-crimson-bright flex items-center gap-2">
<span class="w-1.5 h-1.5 bg-crimson-bright"></span>{{ $t(122) }}
                  </span>
<span class="font-mono font-semibold text-white text-sm mt-1">{{ $t(123) }}</span>
<span class="font-mono text-xs text-tactical-zinc mt-0.5">{{ $t(124) }}</span>
</div>
</div>
<!-- 8-Bit Retro Architecture Flow Schematic -->
<div class="bg-arcade-black p-4 border-2 border-arcade-border flex flex-col gap-3">
<div class="flex flex-wrap items-center justify-between gap-2 border-b border-arcade-border pb-2 font-arcade text-[10px]">
<span class="text-white tracking-wider flex items-center gap-2">
<span class="w-2 h-2 bg-crimson-bright"></span>
                    {{ $t(125) }}
                  </span>
<span class="text-crimson-bright">{{ $t(110) }}</span>
</div>
<!-- Pixelated Retro Architecture SVG Flow -->
<div class="w-full bg-[#030304] p-3 border-2 border-arcade-border flex items-center justify-center overflow-x-auto">
<svg class="w-full min-w-[560px] h-28" fill="none" viewbox="0 0 600 100" xmlns="http://www.w3.org/2000/svg">
<!-- Pixel Grid dots -->
<defs>
<pattern height="10" id="arcade-dots-1" patternunits="userSpaceOnUse" width="10">
<rect fill="rgba(184, 137, 43,0.08)" height="2" width="2" x="0" y="0"></rect>
</pattern>
</defs>
<rect fill="url(#arcade-dots-1)" height="100" width="600"></rect>
<!-- Step 1: Pixel Client HUD -->
<rect fill="#111115" height="66" stroke="#52525b" stroke-width="2" width="120" x="10" y="17"></rect>
<rect fill="#b8892b" height="4" width="4" x="14" y="22"></rect>
<rect fill="#ffffff" height="4" width="4" x="20" y="22"></rect>
<text fill="#ffffff" font-family="'Press Start 2P', monospace" font-size="7" text-anchor="middle" x="70" y="44">{{ $t(126) }}</text>
<text fill="#a1a1aa" font-family="'VT323', monospace" font-size="13" text-anchor="middle" x="70" y="60">{{ $t(127) }}</text>
<text fill="#d4a64a" font-family="'VT323', monospace" font-size="11" text-anchor="middle" x="70" y="74">{{ $t(128) }}</text>
<!-- Stepped pixelated connector 1 -->
<path d="M 130 50 L 155 50 L 155 50 L 180 50" fill="none" stroke="#b8892b" stroke-dasharray="4 2" stroke-width="2"></path>
<rect fill="#d4a64a" height="6" width="6" x="175" y="47"></rect>
<!-- Step 2: Django Boss Gate (Crimson Arcade Core) -->
<rect fill="#0e0e0e" height="74" stroke="#d4a64a" stroke-width="2" width="150" x="185" y="13"></rect>
<rect fill="#d4a64a" height="4" width="4" x="190" y="18"></rect>
<rect fill="#d4a64a" height="4" width="4" x="196" y="18"></rect>
<text fill="#d4a64a" font-family="'Press Start 2P', monospace" font-size="8" font-weight="bold" text-anchor="middle" x="260" y="38">{{ $t(129) }}</text>
<text fill="#ffffff" font-family="'VT323', monospace" font-size="14" text-anchor="middle" x="260" y="56">{{ $t(130) }}</text>
<text fill="#f0d9a0" font-family="'VT323', monospace" font-size="12" text-anchor="middle" x="260" y="72">{{ $t(131) }}</text>
<!-- Stepped pixelated connector 2 -->
<path d="M 335 50 L 375 50" fill="none" stroke="#b8892b" stroke-width="2"></path>
<rect fill="#d4a64a" height="6" width="6" x="370" y="47"></rect>
<!-- Step 3: Postgres Immutable ACID Store -->
<rect fill="#111115" height="66" stroke="#52525b" stroke-width="2" width="120" x="380" y="17"></rect>
<rect fill="#4ade80" height="4" width="4" x="385" y="22"></rect>
<text fill="#ffffff" font-family="'Press Start 2P', monospace" font-size="7" text-anchor="middle" x="440" y="44">{{ $t(26) }}</text>
<text fill="#a1a1aa" font-family="'VT323', monospace" font-size="13" text-anchor="middle" x="440" y="60">{{ $t(132) }}</text>
<text fill="#d4a64a" font-family="'VT323', monospace" font-size="11" text-anchor="middle" x="440" y="74">{{ $t(133) }}</text>
<!-- Stepped pixelated connector 3 -->
<path d="M 500 50 L 525 50" fill="none" stroke="#71717a" stroke-dasharray="3 3" stroke-width="2"></path>
<rect fill="#71717a" height="4" width="4" x="522" y="48"></rect>
<!-- Step 4: Audit Vault Log -->
<rect fill="#050505" height="54" stroke="#5a4513" stroke-width="2" width="65" x="528" y="23"></rect>
<text fill="#d4a64a" font-family="'Press Start 2P', monospace" font-size="6" text-anchor="middle" x="560" y="46">{{ $t(134) }}</text>
<text fill="#a1a1aa" font-family="'VT323', monospace" font-size="12" text-anchor="middle" x="560" y="62">{{ $t(135) }}</text>
</svg>
</div>
<div class="flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-xs">
<span class="text-secondary text-[11px]">{{ $t(136) }}</span>
<a class="px-3 py-2 bg-crimson-pulse text-black font-arcade text-[10px] uppercase tracking-wider hover:bg-white hover:text-arcade-black transition-colors border-2 border-white flex items-center gap-2" href="https://github.com/ADolmos194/gestion-gastos-ingresos" rel="noopener noreferrer" target="_blank">
<span>{{ $t(137) }}</span>
<span class="material-symbols-outlined text-[13px] text-[#d4a64a]">open_in_new</span>
</a>
</div>
</div>
</div>
<!-- Right Column: Boss Challenge Breakdown / Privileges HUD -->
<div class="lg:col-span-5 flex flex-col gap-4">
<div class="bg-arcade-panel p-4 border-2 border-arcade-border flex flex-col gap-3 justify-between h-full">
<div class="flex items-center justify-between font-arcade text-[10px]">
<span class="text-tactical-zinc">{{ $t(138) }}</span>
<span class="px-2 py-0.5 bg-crimson-dark border border-crimson-pulse text-crimson-bright font-semibold">{{ $t(139) }}</span>
</div>
<!-- Matrix Rows Arcade Style -->
<div class="flex flex-col gap-2 bg-arcade-black p-3 border-2 border-arcade-border font-mono text-xs">
<div class="flex items-center justify-between p-2 bg-arcade-dark border-l-4 border-crimson-bright">
<span class="text-white font-semibold">{{ $t(140) }}</span>
<span class="px-2 py-0.5 bg-crimson-pulse/30 text-crimson-bright font-arcade text-[10px]">{{ $t(141) }}</span>
</div>
<div class="flex items-center justify-between p-2 bg-arcade-dark border-l-4 border-tactical-zinc">
<span class="text-secondary">{{ $t(142) }}</span>
<span class="px-2 py-0.5 bg-arcade-panel text-tactical-zinc font-arcade text-[10px]">{{ $t(143) }}</span>
</div>
<div class="flex items-center justify-between p-2 bg-arcade-dark border-l-4 border-crimson-bright">
<span class="text-secondary">{{ $t(144) }}</span>
<span class="px-2 py-0.5 bg-crimson-dark text-crimson-bright font-arcade text-[10px]">{{ $t(145) }}</span>
</div>
<div class="flex items-center justify-between p-2 bg-arcade-dark border-l-4 border-tactical-zinc">
<span class="text-secondary">{{ $t(146) }}</span>
<span class="px-2 py-0.5 bg-arcade-panel text-white font-arcade text-[10px]">{{ $t(147) }}</span>
</div>
</div>
<!-- Contextual Cold Datacenter Imagery -->
<div class="relative w-full h-36 bg-arcade-black border-2 border-arcade-border overflow-hidden">
<img alt="Monochromatic server infrastructure rack interior illuminated by faint status LED bars in dark atmosphere" class="w-full h-full object-cover opacity-45 filter contrast-150 grayscale" src="/stitch/qullqi-node.jpg"/>
<div class="absolute inset-0 from-arcade-black via-arcade-black/30"></div>
<div class="absolute bottom-2 left-2 font-arcade text-[10px] bg-arcade-black/90 border border-crimson-pulse/60 px-2 py-1 text-crimson-bright">
                    {{ $t(148) }}
                  </div>
</div>

</div>
</div>
</div>
</article>
<!-- MISSION 02: STAGE 02 - ZERO-TRUST EDGE BARRICADE -->
<article class="project-card flex flex-col bg-arcade-dark border-2 border-arcade-border hover:border-crimson-pulse hover:rotate-0 transition-all duration-300 rotate-1" data-category="frontend">
<!-- Header -->
<div class="flex flex-wrap items-center justify-between gap-2 p-3 bg-arcade-panel border-b-2 border-arcade-border">
<div class="flex items-center gap-3">
<span class="px-2 py-0.5 bg-arcade-black border border-crimson-pulse text-crimson-bright font-arcade text-[10px]">{{ $t(149) }}</span>
<span class="font-arcade text-xs text-white tracking-wide">{{ $t(150) }}</span>
</div>
<div class="flex items-center gap-2 font-arcade text-[10px]">
<span class="w-2 h-2 bg-crimson-bright inline-block"></span>
<span class="text-crimson-bright">{{ $t(151) }}</span>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6">
<!-- Left Column: Edge Architecture & Hardening Briefing -->
<div class="lg:col-span-7 flex flex-col gap-4">
<div>

<h2 class="font-arcade text-lg sm:text-xl text-white tracking-tight uppercase flex items-center gap-2">
<span class="text-crimson-bright">{{ $t(105) }}</span> {{ $t(152) }}
</h2>
<p class="font-mono text-sm text-secondary mt-2 leading-relaxed">
                  {{ $t(153) }}
                </p>
</div>
<!-- 8-Bit Pixel Stack Badges -->
<div class="flex flex-wrap gap-2 pt-1 font-arcade text-[10px] -rotate-1">
<span class="px-2 py-1 bg-crimson-dark border-2 border-crimson-pulse text-crimson-bright font-semibold">{{ $t(154) }}</span>
<span class="px-2 py-1 bg-arcade-black border-2 border-arcade-border text-white">{{ $t(155) }}</span>
<span class="px-2 py-1 bg-arcade-black border-2 border-arcade-border text-white">{{ $t(156) }}</span>
<span class="px-2 py-1 bg-crimson-dark border-2 border-crimson-pulse text-crimson-bright font-semibold">{{ $t(157) }}</span>
<span class="px-2 py-1 bg-arcade-black border-2 border-tactical-zinc text-secondary">{{ $t(112) }}</span>
</div>
<!-- Boss Defenses Grid -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
<div class="bg-arcade-card p-3 border-2 border-arcade-border flex flex-col rotate-1">
<span class="font-arcade text-[10px] text-crimson-bright flex items-center gap-1">
<span class="w-1.5 h-1.5 bg-crimson-bright"></span>{{ $t(158) }}
                  </span>
<span class="font-mono font-semibold text-white text-xs mt-1">{{ $t(159) }}</span>
<span class="font-mono text-[11px] text-tactical-zinc mt-0.5">{{ $t(160) }}</span>
</div>
<div class="bg-arcade-card p-3 border-2 border-arcade-border flex flex-col -rotate-1">
<span class="font-arcade text-[10px] text-crimson-bright flex items-center gap-1">
<span class="w-1.5 h-1.5 bg-crimson-bright"></span>{{ $t(161) }}
                  </span>
<span class="font-mono font-semibold text-white text-xs mt-1">{{ $t(162) }}</span>
<span class="font-mono text-[11px] text-tactical-zinc mt-0.5">{{ $t(163) }}</span>
</div>
<div class="bg-arcade-card p-3 border-2 border-arcade-border flex flex-col rotate-2">
<span class="font-arcade text-[10px] text-crimson-bright flex items-center gap-1">
<span class="w-1.5 h-1.5 bg-crimson-bright"></span>{{ $t(164) }}
                  </span>
<span class="font-mono font-semibold text-white text-xs mt-1">{{ $t(165) }}</span>
<span class="font-mono text-[11px] text-tactical-zinc mt-0.5">{{ $t(166) }}</span>
</div>
</div>
<!-- 8-Bit Retro Edge Deployment Dataflow Schematic -->
<div class="bg-arcade-black p-4 border-2 border-arcade-border flex flex-col gap-3">
<div class="flex flex-wrap items-center justify-between gap-2 border-b border-arcade-border pb-2 font-arcade text-[10px]">
<span class="text-white tracking-wider flex items-center gap-2">
<span class="w-2 h-2 bg-crimson-bright"></span>
                    {{ $t(167) }}
                  </span>
<span class="text-crimson-bright">{{ $t(168) }}</span>
</div>
<!-- Pixelated Edge SVG Flow -->
<div class="w-full bg-[#030304] p-3 border-2 border-arcade-border flex items-center justify-center overflow-x-auto">
<svg class="w-full min-w-[560px] h-28" fill="none" viewbox="0 0 600 100" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="10" id="arcade-dots-2" patternunits="userSpaceOnUse" width="10">
<rect fill="rgba(184, 137, 43,0.08)" height="2" width="2" x="0" y="0"></rect>
</pattern>
</defs>
<rect fill="url(#arcade-dots-2)" height="100" width="600"></rect>
<!-- Node 1: GitHub Signed Source -->
<rect fill="#111115" height="66" stroke="#52525b" stroke-width="2" width="120" x="10" y="17"></rect>
<rect fill="#71717a" height="4" width="4" x="14" y="22"></rect>
<text fill="#ffffff" font-family="'Press Start 2P', monospace" font-size="7" text-anchor="middle" x="70" y="44">{{ $t(169) }}</text>
<text fill="#a1a1aa" font-family="'VT323', monospace" font-size="13" text-anchor="middle" x="70" y="60">{{ $t(41) }}</text>
<text fill="#71717a" font-family="'VT323', monospace" font-size="11" text-anchor="middle" x="70" y="74">{{ $t(170) }}</text>
<!-- Connector 1 -->
<path d="M 130 50 L 175 50" fill="none" stroke="#b8892b" stroke-width="2"></path>
<rect fill="#b8892b" height="6" width="6" x="170" y="47"></rect>
<!-- Node 2: Hardened Compiler -->
<rect fill="#111115" height="66" stroke="#52525b" stroke-width="2" width="130" x="180" y="17"></rect>
<rect fill="#d4a64a" height="4" width="4" x="185" y="22"></rect>
<text fill="#ffffff" font-family="'Press Start 2P', monospace" font-size="7" text-anchor="middle" x="245" y="44">{{ $t(74) }}</text>
<text fill="#a1a1aa" font-family="'VT323', monospace" font-size="13" text-anchor="middle" x="245" y="60">{{ $t(171) }}</text>
<text fill="#71717a" font-family="'VT323', monospace" font-size="11" text-anchor="middle" x="245" y="74">{{ $t(172) }}</text>
<!-- Connector 2 -->
<path d="M 310 50 L 355 50" fill="none" stroke="#b8892b" stroke-dasharray="4 2" stroke-width="2"></path>
<rect fill="#d4a64a" height="6" width="6" x="350" y="47"></rect>
<!-- Node 3: Zero-Trust Security Gateway (Crimson Core) -->
<rect fill="#0e0e0e" height="74" stroke="#d4a64a" stroke-width="2" width="145" x="360" y="13"></rect>
<rect fill="#d4a64a" height="4" width="4" x="365" y="18"></rect>
<text fill="#d4a64a" font-family="'Press Start 2P', monospace" font-size="7" font-weight="bold" text-anchor="middle" x="432" y="38">{{ $t(158) }}</text>
<text fill="#ffffff" font-family="'VT323', monospace" font-size="14" text-anchor="middle" x="432" y="56">{{ $t(173) }}</text>
<text fill="#f0d9a0" font-family="'VT323', monospace" font-size="12" text-anchor="middle" x="432" y="72">{{ $t(174) }}</text>
<!-- Connector 3 -->
<path d="M 505 50 L 530 50" fill="none" stroke="#b8892b" stroke-width="2"></path>
<rect fill="#d4a64a" height="6" width="6" x="526" y="47"></rect>
<!-- Node 4: Global CDN Edge -->
<rect fill="#050505" height="54" stroke="#71717a" stroke-width="2" width="60" x="532" y="23"></rect>
<text fill="#ffffff" font-family="'Press Start 2P', monospace" font-size="6" text-anchor="middle" x="562" y="46">{{ $t(175) }}</text>
<text fill="#d4a64a" font-family="'VT323', monospace" font-size="12" text-anchor="middle" x="562" y="62">{{ $t(176) }}</text>
</svg>
</div>
<div class="flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-xs">
<span class="text-secondary text-[11px]">{{ $t(177) }}</span>
<div class="flex items-center gap-2">
<a class="px-3 py-2 bg-arcade-panel border border-arcade-border hover:border-crimson-bright text-secondary hover:text-white font-arcade text-[10px] uppercase tracking-wider transition-colors inline-flex items-center gap-1" href="https://github.com/ADolmos194/repositorio-dev-adolmos" rel="noopener noreferrer" target="_blank">
<span>{{ $t(178) }}</span>
<span class="material-symbols-outlined text-[13px] text-[#4ade80]">open_in_new</span>
</a>
<a class="px-3 py-2 bg-crimson-pulse text-black font-arcade text-[10px] uppercase tracking-wider hover:bg-white hover:text-arcade-black transition-colors border-2 border-white flex items-center gap-2" href="https://aylton-martinez.vercel.app/" rel="noopener noreferrer" target="_blank">
<span>{{ $t(179) }}</span>
<span class="material-symbols-outlined text-[13px] text-[#a1a1aa]">launch</span>
</a>
</div>
</div>
</div>
</div>
<!-- Right Column: Boss Challenge Report & Headers -->
<div class="lg:col-span-5 flex flex-col gap-4 justify-between">
<div class="bg-arcade-panel p-4 border-2 border-arcade-border flex flex-col gap-3 justify-between h-full">
<div class="flex items-center justify-between font-arcade text-[10px]">
<span class="text-tactical-zinc">{{ $t(180) }}</span>

</div>
<div class="flex flex-col gap-2 bg-arcade-black p-3 border-2 border-arcade-border font-mono text-xs">
<div class="flex justify-between items-center pb-2 border-b border-arcade-border">
<span class="text-secondary font-mono">{{ $t(181) }}</span>
<span class="text-crimson-bright font-arcade text-[10px]">{{ $t(182) }}</span>
</div>
<div class="flex justify-between items-center py-2 border-b border-arcade-border">
<span class="text-secondary font-mono">{{ $t(183) }}</span>
<span class="text-white font-semibold font-mono">{{ $t(184) }}</span>
</div>
<div class="flex justify-between items-center py-2 border-b border-arcade-border">
<span class="text-secondary font-mono">{{ $t(185) }}</span>
<span class="text-crimson-bright font-arcade text-[10px]">{{ $t(186) }}</span>
</div>
<div class="flex justify-between items-center pt-2">
<span class="text-secondary font-mono">{{ $t(187) }}</span>
<span class="text-tactical-zinc font-mono">{{ $t(188) }}</span>
</div>
</div>
<!-- Contextual Logic Gate Diagram -->
<div class="relative w-full h-36 bg-arcade-black border-2 border-arcade-border overflow-hidden">
<img alt="Technical schematic diagram of a low-level microchip logic layout, monochrome deep graphite lines over pitch-black background, ultra-sharp vector circuit nodes, no glow" class="w-full h-full object-cover opacity-45 filter contrast-150 grayscale" src="/projects/portfolio-preview.jpg"/>
<div class="absolute inset-0 from-arcade-black via-arcade-black/30"></div>
<div class="absolute bottom-2 left-2 font-arcade text-[10px] bg-arcade-black/90 border border-crimson-pulse/60 px-2 py-1 text-crimson-bright">
                    {{ $t(189) }}
                  </div>
</div>

</div>
</div>
</div>
</article>
</div>
</section>
<!-- Boss / Loot Matrix: Arcade Leaderboard Section -->

<!-- Terminal Boss CTA Banner -->
<section class="w-full px-4 sm:px-6 lg:px-8 py-10 bg-arcade-black">
<div class="max-w-7xl mx-auto bg-arcade-dark p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-2 border-arcade-border hover:border-crimson-pulse transition-colors">
<div class="flex flex-col gap-2 max-w-2xl">
<div class="flex items-center gap-2 font-arcade text-[10px] text-crimson-bright uppercase">
<span class="w-2 h-2 bg-crimson-bright inline-block"></span>
<span>{{ $t(190) }}</span>
</div>
<h2 class="font-arcade text-lg sm:text-2xl text-white tracking-tight uppercase leading-snug">
              {{ $t(191) }}
            </h2>
<p class="font-mono text-sm text-secondary">
              {{ $t(192) }}
            </p>
</div>
<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0 font-arcade text-[10px]">
<NuxtLink to="/contacto" class="px-5 py-3 bg-crimson-pulse text-black font-semibold uppercase text-center hover:bg-white hover:text-arcade-black transition-colors border-2 border-white">
              {{ $t(193) }}
            </NuxtLink>
<NuxtLink to="/stack" class="px-4 py-3 bg-arcade-panel text-on-surface hover:text-crimson-bright border-2 border-arcade-border uppercase text-center transition-colors">
              {{ $t(194) }}
            </NuxtLink>
</div>
</div>
</section>
</div>

</main>
<SiteFooter />
</div>
</template>
