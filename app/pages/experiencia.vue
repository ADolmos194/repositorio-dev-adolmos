<template>
<div class="page-experiencia relative z-10 min-h-screen font-mono text-[13px] text-[#f3f4f6] antialiased selection:bg-[#d4a64a] selection:text-black arcade-skin">
<SiteHeader />
<main class="w-full pt-14 bg-[#040404] min-h-screen"><div class="flex flex-col w-full">
<!-- Sinister Retro 8-Bit Top Ticker -->

<!-- Arcade HUD Hero Section -->
<PageHero :eyebrow="$t(195)" :title="$t(196)" :accent="$t(197)" :lead="$t(198)"><div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 bg-[#050505] border-2 border-[#27272a] p-3 pixel-border-dim -rotate-1">
<div class="bg-[#090909] border-t-2 border-[#27272a] p-3 flex flex-col">
<span class="font-mono text-[11px] text-zinc-400 uppercase">{{ $t(199) }}</span>
<span class="font-arcade text-base sm:text-lg text-white mt-1 drop-">{{ $t(11) }}</span>
<span class="font-mono text-[10px] text-[#e6c06a] mt-0.5">{{ $t(200) }}</span>
</div>

<div class="bg-[#090909] border-t-2 border-[#8f6a1f] p-3 flex flex-col">
<span class="font-mono text-[11px] text-zinc-400 uppercase">{{ $t(201) }}</span>
<span class="font-arcade text-base sm:text-lg text-white mt-1">{{ $t(17) }}</span>
<span class="font-mono text-[10px] text-zinc-400 mt-0.5">{{ $t(202) }}</span>
</div>

</div></PageHero>
<!-- WORLD MAP LEVEL PROGRESSION (Inspired by Hackathon Journey) -->

<!-- Core Forensics Timeline & Tactical Dossier Section -->
<section class="w-full px-4 sm:px-6 lg:px-8 py-10 bg-[#040404]">
<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
<!-- Left Column: Chronological Quest Progression (8 Cols) -->
<div class="lg:col-span-8 flex flex-col gap-6">
<div class="flex items-center justify-between pb-3 border-b-2 border-[#171717]">
<div class="flex items-center gap-3">
<span class="font-arcade text-xs text-white flex items-center gap-2">
<span class="w-2.5 h-2.5 bg-arcade-red"></span>{{ $t(203) }}
</span>
<span class="px-2 py-0.5 bg-[#111111] border border-[#27272a] text-arcade-bright font-mono text-xs font-semibold -rotate-2 inline-block">{{ $t(204) }}</span>
</div>
<span class="font-pixel text-xs text-zinc-400">{{ $t(205) }}</span>
</div>
<!-- 8-Bit Pixel Line Timeline Container -->
<div class="relative flex flex-col pl-6 sm:pl-10 mt-2">
<!-- Stepped 8-bit line of continuity -->
<div class="absolute left-3 sm:left-4 top-2 bottom-8 w-1 pixel-stepped-line"></div>
<!-- STAGE 05 / BOSS LEVEL: Internacional de Transporte Turístico y Servicios S.R.L. -->
<div class="relative flex flex-col gap-4 pb-12">
<!-- Pixel Milestone Box -->
<div class="absolute -left-6 sm:-left-10 top-0 flex items-center justify-center">
<div class="w-8 h-8 sm:w-9 sm:h-9 bg-[#0a0a0a] border-2 border-arcade-bright flex items-center justify-center">
<span class="font-arcade text-[10px] text-white">05</span>
</div>
</div>
<article class="bg-[#070707] border-2 border-arcade-red p-5 sm:p-6 flex flex-col gap-4 ml-2 pixel-border-red -rotate-2 hover:rotate-0 transition-transform duration-300">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#27272a] pb-3">
<div class="flex items-center gap-2">
<span class="font-arcade text-[10px] text-arcade-bright bg-[#101010] px-2 py-1 border border-arcade-red/80">{{ $t(406) }}</span>
</div>
<div class="flex items-center gap-2">
<span class="text-white font-mono text-xs">{{ $t(407) }}</span>
<span class="px-2 py-0.5 bg-arcade-red text-black font-arcade text-[10px] tracking-widest">{{ $t(208) }}</span>
</div>
</div>
<div class="flex flex-col gap-1">
<h2 class="text-lg sm:text-xl font-arcade text-white tracking-tight leading-snug">{{ $t(408) }}</h2>
<div class="flex flex-wrap items-center gap-2 text-zinc-400 font-mono text-xs">
<span class="text-arcade-bright font-semibold">{{ $t(409) }}</span>
<span class="text-arcade-red">::</span>
<span class="text-zinc-300">{{ $t(410) }}</span>
</div>
</div>
<!-- 8-Bit Quest Stats Block -->

<p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
  {{ $t(411) }}
</p>
<!-- Quest Log Bulletins -->
<div class="flex flex-col gap-2 font-mono text-xs bg-[#030303] border border-[#27272a] p-4">
<div class="flex items-start gap-3">
<span class="text-arcade-bright font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(412) }}</span>
</div>
<div class="flex items-start gap-3">
<span class="text-arcade-bright font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(413) }}</span>
</div>
<div class="flex items-start gap-3">
<span class="text-[#e6c06a] font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(414) }}</span>
</div>
<div class="flex items-start gap-3">
<span class="text-arcade-bright font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(415) }}</span>
</div>
<div class="flex items-start gap-3">
<span class="text-[#e6c06a] font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(421) }}</span>
</div>
</div>
<!-- Skill Badges -->
<div class="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs rotate-1">
<span class="px-3 py-1 bg-[#111111] border border-arcade-bright text-white font-semibold tracking-wider">{{ $t(416) }}</span>
<span class="px-3 py-1 bg-[#111111] border border-arcade-bright text-white font-semibold tracking-wider">{{ $t(417) }}</span>
<span class="px-3 py-1 bg-[#0c0c0c] border border-[#27272a] text-[#e6c06a]">{{ $t(418) }}</span>
<span class="px-3 py-1 bg-[#090909] border border-[#27272a] text-zinc-300">{{ $t(419) }}</span>
<span class="px-3 py-1 bg-[#090909] border border-[#27272a] text-zinc-300">{{ $t(420) }}</span>
</div>
</article>
</div>
<!-- STAGE 04 / LEVEL 4: Agrovision Perú -->
<div class="relative flex flex-col gap-4 pb-12">
<!-- Pixel Milestone Box -->
<div class="absolute -left-6 sm:-left-10 top-0 flex items-center justify-center">
<div class="w-8 h-8 sm:w-9 sm:h-9 bg-[#080808] border-2 border-[#8f6a1f] flex items-center justify-center">
<span class="font-arcade text-[10px] text-zinc-200">04</span>
</div>
</div>
<article class="bg-[#060606] border-2 border-[#27272a] p-5 sm:p-6 flex flex-col gap-4 ml-2 pixel-border-dim rotate-1 hover:rotate-0 transition-transform duration-300">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#27272a] pb-3">
<div class="flex items-center gap-2">
<span class="font-arcade text-[10px] text-[#4ade80] bg-[#07170a] px-2 py-1 border border-[#4ade80]/60">{{ $t(206) }}</span>
</div>
<span class="text-zinc-300 font-mono text-xs">{{ $t(207) }}</span>
</div>
<div class="flex flex-col gap-1">
<h2 class="text-lg sm:text-xl font-arcade text-white tracking-tight leading-snug">{{ $t(209) }}</h2>
<div class="flex flex-wrap items-center gap-2 text-zinc-400 font-mono text-xs">
<span class="text-arcade-bright font-semibold">{{ $t(210) }}</span>
<span class="text-arcade-red">::</span>
<span class="text-zinc-300">{{ $t(211) }}</span>
</div>
</div>
<p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
  {{ $t(212) }}
</p>
<!-- Quest Log Bulletins -->
<div class="flex flex-col gap-2 font-mono text-xs bg-[#030303] border border-[#27272a] p-4">
<div class="flex items-start gap-3">
<span class="text-arcade-bright font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(213) }}</span>
</div>
<div class="flex items-start gap-3">
<span class="text-arcade-bright font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(214) }}</span>
</div>
<div class="flex items-start gap-3">
<span class="text-[#e6c06a] font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(215) }}</span>
</div>
<div class="flex items-start gap-3">
<span class="text-arcade-bright font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(216) }}</span>
</div>
</div>
<!-- Skill Badges -->
<div class="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs -rotate-1">
<span class="px-3 py-1 bg-[#0a0a0a] border border-[#27272a] text-zinc-300 font-semibold tracking-wider">{{ $t(217) }}</span>
<span class="px-3 py-1 bg-[#0a0a0a] border border-[#27272a] text-zinc-300 font-semibold tracking-wider">{{ $t(32) }}</span>
<span class="px-3 py-1 bg-[#0c0c0c] border border-[#27272a] text-[#e6c06a]">{{ $t(218) }}</span>
<span class="px-3 py-1 bg-[#090909] border border-[#27272a] text-zinc-300">{{ $t(41) }}</span>
<span class="px-3 py-1 bg-[#090909] border border-[#27272a] text-zinc-300">{{ $t(219) }}</span>
</div>
</article>
</div>
<!-- STAGE 03 / LEVEL 3: Omnitech -->
<div class="relative flex flex-col gap-4 pb-12">
<div class="absolute -left-6 sm:-left-10 top-0 flex items-center justify-center">
<div class="w-8 h-8 sm:w-9 sm:h-9 bg-[#080808] border-2 border-[#6f5517] flex items-center justify-center">
<span class="font-arcade text-[10px] text-zinc-300">03</span>
</div>
</div>
<article class="bg-[#050505] border-2 border-[#27272a] p-5 sm:p-6 flex flex-col gap-4 ml-2 pixel-border-dim hover:border-[#27272a] -rotate-1 hover:rotate-0 transition-all duration-300">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#161616] pb-3">
<div class="flex items-center gap-2">
<span class="font-arcade text-[10px] text-[#4ade80] bg-[#07170a] px-2 py-1 border border-[#4ade80]/60">{{ $t(220) }}</span>
</div>
<span class="text-zinc-300 font-mono text-xs">{{ $t(221) }}</span>
</div>
<div class="flex flex-col gap-1">
<h2 class="text-lg sm:text-xl font-arcade text-white tracking-tight leading-snug">{{ $t(222) }}</h2>
<div class="flex flex-wrap items-center gap-2 text-zinc-400 font-mono text-xs">
<span class="text-arcade-bright font-semibold">{{ $t(223) }}</span>
<span class="text-arcade-red">::</span>
<span class="text-zinc-300">{{ $t(224) }}</span>
</div>
</div>
<p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
  {{ $t(225) }}
</p>
<div class="flex flex-col gap-2 font-mono text-xs bg-[#030303] border border-[#161616] p-4">
<div class="flex items-start gap-3">
<span class="text-arcade-bright font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(226) }}</span>
</div>
<div class="flex items-start gap-3">
<span class="text-arcade-bright font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(227) }}</span>
</div>
<div class="flex items-start gap-3">
<span class="text-arcade-bright font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(228) }}</span>
</div>
</div>
<div class="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs rotate-2">
<span class="px-3 py-1 bg-[#0e0e0e] border border-[#27272a] text-[#e6c06a]">{{ $t(229) }}</span>
<span class="px-3 py-1 bg-[#0a0a0a] border border-[#27272a] text-zinc-300">{{ $t(230) }}</span>
<span class="px-3 py-1 bg-[#0a0a0a] border border-[#27272a] text-zinc-300">{{ $t(231) }}</span>
<span class="px-3 py-1 bg-[#0a0a0a] border border-[#27272a] text-zinc-300">{{ $t(232) }}</span>
</div>
</article>
</div>
<!-- STAGE 02 / LEVEL 2: Corporación Big Data -->
<div class="relative flex flex-col gap-4 pb-12">
<div class="absolute -left-6 sm:-left-10 top-0 flex items-center justify-center">
<div class="w-8 h-8 sm:w-9 sm:h-9 bg-[#080808] border-2 border-[#5a4513] flex items-center justify-center">
<span class="font-arcade text-[10px] text-zinc-400">02</span>
</div>
</div>
<article class="bg-[#050505] border-2 border-[#27272a] p-5 sm:p-6 flex flex-col gap-4 ml-2 pixel-border-dim rotate-2 hover:rotate-0 transition-transform duration-300">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#131313] pb-3">
<div class="flex items-center gap-2">
<span class="font-arcade text-[10px] text-[#4ade80] bg-[#07170a] px-2 py-1 border border-[#4ade80]/60">{{ $t(233) }}</span>
</div>
<span class="text-zinc-400 font-mono text-xs">{{ $t(234) }}</span>
</div>
<div class="flex flex-col gap-1">
<h2 class="text-lg sm:text-xl font-arcade text-white tracking-tight leading-snug">{{ $t(235) }}</h2>
<div class="flex flex-wrap items-center gap-2 text-zinc-400 font-mono text-xs">
<span class="text-arcade-bright font-semibold">{{ $t(236) }}</span>
<span class="text-arcade-red">::</span>
<span class="text-zinc-300">{{ $t(237) }}</span>
</div>
</div>
<p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
  {{ $t(238) }}
</p>
<div class="flex flex-col gap-2 font-mono text-xs bg-[#030303] border border-[#131313] p-4">
<div class="flex items-start gap-3">
<span class="text-[#e6c06a] font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(239) }}</span>
</div>
<div class="flex items-start gap-3">
<span class="text-[#e6c06a] font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(240) }}</span>
</div>
<div class="flex items-start gap-3">
<span class="text-[#e6c06a] font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-200">{{ $t(241) }}</span>
</div>
</div>
<div class="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs -rotate-2">
<span class="px-3 py-1 bg-[#0c0c0c] border border-[#27272a] text-[#e6c06a]">{{ $t(242) }}</span>
<span class="px-3 py-1 bg-[#090909] border border-[#27272a] text-zinc-300">{{ $t(243) }}</span>
<span class="px-3 py-1 bg-[#090909] border border-[#27272a] text-zinc-300">{{ $t(244) }}</span>
<span class="px-3 py-1 bg-[#090909] border border-[#27272a] text-zinc-300">{{ $t(245) }}</span>
</div>
</article>
</div>
<!-- STAGE 01 / LEVEL 1: Ovatec -->
<div class="relative flex flex-col gap-4">
<div class="absolute -left-6 sm:-left-10 top-0 flex items-center justify-center">
<div class="w-8 h-8 sm:w-9 sm:h-9 bg-[#070707] border-2 border-[#27272a] flex items-center justify-center">
<span class="font-arcade text-[10px] text-zinc-500">01</span>
</div>
</div>
<article class="bg-[#040404] border-2 border-[#161616] p-5 sm:p-6 flex flex-col gap-4 ml-2 pixel-border-dim -rotate-1 hover:rotate-0 transition-transform duration-300">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#101010] pb-3">
<div class="flex items-center gap-2">
<span class="font-arcade text-[10px] text-[#4ade80] bg-[#07170a] px-2 py-1 border border-[#4ade80]/60">{{ $t(246) }}</span>
</div>
<span class="text-zinc-500 font-mono text-xs">{{ $t(247) }}</span>
</div>
<div class="flex flex-col gap-1">
<h2 class="text-lg sm:text-xl font-arcade text-white tracking-tight leading-snug">{{ $t(235) }}</h2>
<div class="flex flex-wrap items-center gap-2 text-zinc-400 font-mono text-xs">
<span class="text-arcade-bright font-semibold">{{ $t(248) }}</span>
<span class="text-arcade-red">::</span>
<span class="text-zinc-300">{{ $t(249) }}</span>
</div>
</div>
<p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
  {{ $t(250) }}
</p>
<div class="flex flex-col gap-2 font-mono text-xs bg-[#030303] border border-[#101010] p-4">
<div class="flex items-start gap-3">
<span class="text-zinc-500 font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-300">{{ $t(251) }}</span>
</div>
<div class="flex items-start gap-3">
<span class="text-zinc-500 font-arcade text-[10px] select-none">▶</span>
<span class="text-zinc-300">{{ $t(252) }}</span>
</div>
</div>
<div class="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs rotate-1">
<span class="px-3 py-1 bg-[#090909] border border-[#27272a] text-zinc-300">{{ $t(253) }}</span>
<span class="px-3 py-1 bg-[#090909] border border-[#27272a] text-zinc-300">{{ $t(254) }}</span>
<span class="px-3 py-1 bg-[#090909] border border-[#27272a] text-zinc-300">{{ $t(255) }}</span>
</div>
</article>
</div>
</div>
</div>
<!-- Right Column: Player Profile, Guild Academic & Tactical Doctrine (4 Cols) -->
<aside class="lg:col-span-4 flex flex-col gap-6">
<!-- Guild Academic Degree Box -->
<div class="bg-[#060606] border-2 border-[#27272a] p-5 flex flex-col gap-4 pixel-border-red rotate-1 hover:rotate-0 transition-transform duration-300">
<div class="flex items-center justify-between pb-2 border-b border-[#27272a]">
<span class="font-arcade text-[10px] text-arcade-bright">{{ $t(7) }}</span>

</div>
<div class="bg-[#030303] border border-[#27272a] p-4 flex flex-col gap-2">
<div class="flex items-center gap-2">
<span class="font-arcade text-xs text-arcade-amber">★</span>
<span class="text-sm font-arcade text-white uppercase tracking-wider">{{ $t(256) }}</span>
</div>
<div class="font-mono text-xs text-[#e6c06a] uppercase font-semibold">
  {{ $t(257) }}
</div>

</div>
<div class="pt-1 font-mono text-xs text-zinc-400 flex items-center justify-between">
<span class="text-white font-semibold">{{ $t(258) }}</span>
<span class="text-[#e6c06a]">{{ $t(259) }}</span>
</div>
</div>
<!-- Player Stats HUD Matrix -->

<!-- Tactical Operating Doctrine / Philosophy -->

<!-- Direct Communication Dispatch -->

</aside>
</div>
</section>
<!-- 8-Bit Archival CV Download Box: 'SAVE GAME / DOWNLOAD EXPEDIENTE (.PDF)' -->
<section class="w-full px-4 sm:px-6 lg:px-8 py-10 border-t-2 border-[#27272a]">
<div class="max-w-7xl mx-auto bg-[#050505] border-4 border-[#27272a] p-6 sm:p-8 relative overflow-hidden pixel-border-red rotate-1">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
<div class="lg:col-span-8 flex flex-col gap-3">
<div class="flex items-center gap-2 font-arcade text-[10px] text-arcade-bright uppercase">
<span class="w-2.5 h-2.5 bg-arcade-red inline-block"></span>
<span>{{ $t(260) }}</span>
</div>
<h2 class="text-xl sm:text-2xl lg:text-3xl font-arcade text-white tracking-tight uppercase leading-snug">
  {{ $t(261) }}
</h2>
<p class="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed font-mono">
  {{ $t(262) }}
</p>
<div class="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
<span class="bg-[#0b0b0b] border border-[#27272a] px-3 py-1 text-white font-semibold">{{ $t(263) }}</span>

<span class="bg-[#0b0b0b] border border-[#4ade80]/50 px-3 py-1 text-[#4ade80] font-semibold">{{ $t(264) }}</span>
</div>
</div>
<div class="lg:col-span-4 flex flex-col gap-3 justify-end">
<a class="w-full inline-flex items-center justify-center gap-3 bg-arcade-red text-black px-6 py-4 font-arcade text-xs uppercase tracking-wider hover:bg-[#5a4513] transition-colors pixel-border-btn" download="" href="/AyltonMesiasMartinez_CV.pdf">
<span class="text-sm"></span>
<span>{{ $t(265) }}</span>
</a>
<a class="w-full inline-flex items-center justify-center gap-2 bg-[#090909] border-2 border-[#27272a] text-[#e6c06a] px-6 py-3 font-mono text-xs uppercase tracking-wider hover:border-[#27272a] hover:text-white transition-colors font-semibold" href="mailto:ayltondolmos194@gmail.com">
<span class="material-symbols-outlined text-[16px] text-[#d4a64a]">mail</span>
<span>{{ $t(266) }}</span>
</a>
</div>
</div>
</div>
</section>
</div></main>
<SiteFooter />
</div>
</template>
