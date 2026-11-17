<template>
<div class="page-index relative z-10 min-h-screen font-mono text-[13px] text-[#f3f4f6] antialiased selection:bg-[#d4a64a] selection:text-black arcade-skin">
<SiteHeader />
<main class="w-full pt-16 bg-transparent min-h-screen"><div class="flex flex-col w-full">
<!-- Top Retro Arcade Ticker / HUD Bar -->

<!-- Retro Arcade Hero Section -->
<PageHero :eyebrow="$t(0)" :title="$t(1)" :accent="$t(2)" :lead="$t(3)"><div class="flex flex-wrap items-center gap-4 pt-2">
<a class="pixel-btn-red inline-flex items-center gap-3 px-5 py-3 bg-[#d4a64a] hover:bg-white text-black font-pixel text-[10px] sm:text-[11px] uppercase tracking-wider transition-colors duration-150" href="https://wa.me/51951122014" target="_blank">
<span class="material-symbols-outlined text-[18px] text-[#d4a64a]">chat</span>
<span>{{ $t(4) }}</span>
</a>
<a class="pixel-btn-dark inline-flex items-center gap-3 px-5 py-3 bg-[#0c0c0c] hover:bg-[#d4a64a] text-[#f0d9a0] hover:text-black border-2 border-[#d4a64a] font-pixel text-[10px] sm:text-[11px] uppercase tracking-wider transition-colors duration-150 shadow-[4px_4px_0_0_#d4a64a]" href="#proyectos">
<span class="material-symbols-outlined text-[18px] text-[#34d399]">videogame_asset</span>
<span>{{ $t(5) }}</span>
</a>


</div><template #aside><figure class="m-0"><div class="border-2 border-[#27272a] bg-[#2a2d31] shadow-[4px_4px_0_0_#5a4513]"><img src="/FOTOCV.png" alt="Aylton Martinez" width="1086" height="1448" class="block w-full aspect-[3/4] object-cover object-top"></div><figcaption class="mt-3 font-mono text-[11px] uppercase tracking-wider text-[#a1a1aa]">{{ $t(6) }}</figcaption></figure></template></PageHero>
<!-- Retro Stats Cartridges / Tactical Telemetry Grid -->
<section class="w-full py-8 px-4 sm:px-6 border-y-2 border-[#181818] bg-[#050505]">
<div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<!-- Stat 1 -->
<div class="bg-[#090909] p-5 flex flex-col justify-between gap-3 border-2 border-[#27272a] hover:border-[#d4a64a] transition-colors shadow-[4px_4px_0_0_#0e0e0e] relative">
<div class="flex items-center justify-between">
<span class="font-pixel text-[10px] text-[#d4a64a] uppercase">{{ $t(7) }}</span>

</div>
<div class="flex flex-col gap-1">
<span class="font-pixel text-[13px] text-white uppercase">{{ $t(8) }}</span>
<span class="font-mono text-[12px] text-[#f0d9a0] uppercase">{{ $t(9) }}</span>
</div>

</div>
<!-- Stat 2 -->
<div class="bg-[#090909] p-5 flex flex-col justify-between gap-3 border-2 border-[#27272a] hover:border-[#d4a64a] transition-colors shadow-[4px_4px_0_0_#0e0e0e] relative">
<div class="flex items-center justify-between">
<span class="font-pixel text-[10px] text-[#d4a64a] uppercase">{{ $t(10) }}</span>

</div>
<div class="flex flex-col gap-1">
<span class="font-pixel text-[20px] text-[#d4a64a]">{{ $t(11) }}</span>
<span class="font-arcade text-[12px] leading-relaxed text-white uppercase">{{ $t(12) }}</span>
</div>

</div>
<!-- Stat 3 -->
<div class="bg-[#090909] p-5 flex flex-col justify-between gap-3 border-2 border-[#27272a] hover:border-[#d4a64a] transition-colors shadow-[4px_4px_0_0_#0e0e0e] relative">
<div class="flex items-center justify-between">
<span class="font-pixel text-[10px] text-[#d4a64a] uppercase">{{ $t(13) }}</span>

</div>
<div class="flex flex-col gap-1">
<span class="font-pixel text-[13px] text-white uppercase">{{ $t(14) }}</span>
<span class="font-mono text-[12px] text-[#f0d9a0] uppercase">{{ $t(15) }}</span>
</div>

</div>
<!-- Stat 4 -->
<div class="bg-[#090909] p-5 flex flex-col justify-between gap-3 border-2 border-[#27272a] hover:border-[#d4a64a] transition-colors shadow-[4px_4px_0_0_#0e0e0e] relative">
<div class="flex items-center justify-between">
<span class="font-pixel text-[10px] text-[#d4a64a] uppercase">{{ $t(16) }}</span>

</div>
<div class="flex flex-col gap-1">
<span class="font-pixel text-[13px] text-[#d4a64a] uppercase">{{ $t(17) }}</span>
<span class="font-arcade text-[12px] leading-relaxed text-white uppercase">{{ $t(18) }}</span>
</div>

</div>
</div>
</section>
<!-- Retro Arcade Skill Trees / Combat Loadout (Capabilities) -->
<section class="w-full py-14 px-4 sm:px-6 relative" id="servicios">
<div class="max-w-7xl mx-auto flex flex-col gap-10">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#181818] pb-6">
<div class="flex flex-col gap-2">
<span class="font-pixel text-[10px] text-[#d4a64a] uppercase tracking-wider">{{ $t(19) }}</span>
<h2 class="font-pixel text-[20px] sm:text-[26px] text-white uppercase">{{ $t(20) }}</h2>
<p class="font-mono text-[13px] text-[#9ca3af] max-w-2xl">{{ $t(21) }}</p>
</div>

</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Cartridge 1 -->
<div class="bg-[#080808] p-6 flex flex-col justify-between gap-6 border-2 border-[#27272a] hover:border-[#d4a64a] transition-colors group shadow-[5px_5px_0_0_#0d0d0d] relative">
<div class="flex flex-col gap-3">
<div class="flex items-center justify-between font-pixel text-[10px] text-[#d4a64a]">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[16px] text-[#a1a1aa]">shield</span>
<span>{{ $t(22) }}</span>
</div>

</div>
<h3 class="font-pixel text-[14px] text-white uppercase group-hover:text-[#d4a64a] transition-colors leading-relaxed">{{ $t(23) }}</h3>
<p class="font-mono text-[13px] text-[#9ca3af] leading-relaxed">{{ $t(24) }}</p>
</div>
<div class="flex flex-wrap items-center gap-2 pt-3 border-t-2 border-[#111111]">
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-white font-pixel text-[10px]">{{ $t(25) }}</span>
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-white font-pixel text-[10px]">{{ $t(26) }}</span>
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-white font-pixel text-[10px]">{{ $t(27) }}</span>
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-[#a1a1aa] font-pixel text-[10px]">{{ $t(28) }}</span>

</div>
</div>
<!-- Cartridge 2 -->
<div class="bg-[#080808] p-6 flex flex-col justify-between gap-6 border-2 border-[#27272a] hover:border-[#d4a64a] transition-colors group shadow-[5px_5px_0_0_#0d0d0d] relative">
<div class="flex flex-col gap-3">
<div class="flex items-center justify-between font-pixel text-[10px] text-[#d4a64a]">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[16px] text-[#f4f4f5]">phone_android</span>
<span>{{ $t(29) }}</span>
</div>

</div>
<h3 class="font-pixel text-[14px] text-white uppercase group-hover:text-[#d4a64a] transition-colors leading-relaxed">{{ $t(30) }}</h3>
<p class="font-mono text-[13px] text-[#9ca3af] leading-relaxed">{{ $t(31) }}</p>
</div>
<div class="flex flex-wrap items-center gap-2 pt-3 border-t-2 border-[#111111]">
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-white font-pixel text-[10px]">{{ $t(32) }}</span>
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-white font-pixel text-[10px]">{{ $t(33) }}</span>
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-white font-pixel text-[10px]">{{ $t(34) }}</span>
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-[#a1a1aa] font-pixel text-[10px]">{{ $t(35) }}</span>

</div>
</div>
<!-- Cartridge 3 -->
<div class="bg-[#080808] p-6 flex flex-col justify-between gap-6 border-2 border-[#27272a] hover:border-[#d4a64a] transition-colors group shadow-[5px_5px_0_0_#0d0d0d] relative">
<div class="flex flex-col gap-3">
<div class="flex items-center justify-between font-pixel text-[10px] text-[#d4a64a]">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[16px] text-[#d4a64a]">bug_report</span>
<span>{{ $t(36) }}</span>
</div>

</div>
<h3 class="font-pixel text-[14px] text-white uppercase group-hover:text-[#d4a64a] transition-colors leading-relaxed">{{ $t(37) }}</h3>
<p class="font-mono text-[13px] text-[#9ca3af] leading-relaxed">{{ $t(38) }}</p>
</div>
<div class="flex flex-wrap items-center gap-2 pt-3 border-t-2 border-[#111111]">
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-white font-pixel text-[10px]">{{ $t(39) }}</span>
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-white font-pixel text-[10px]">{{ $t(40) }}</span>
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-white font-pixel text-[10px]">{{ $t(41) }}</span>
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-[#a1a1aa] font-pixel text-[10px]">{{ $t(42) }}</span>

</div>
</div>
<!-- Cartridge 4 -->
<div class="bg-[#080808] p-6 flex flex-col justify-between gap-6 border-2 border-[#27272a] hover:border-[#d4a64a] transition-colors group shadow-[5px_5px_0_0_#0d0d0d] relative">
<div class="flex flex-col gap-3">
<div class="flex items-center justify-between font-pixel text-[10px] text-[#d4a64a]">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[16px] text-[#34d399]">sync_alt</span>
<span>{{ $t(43) }}</span>
</div>

</div>
<h3 class="font-pixel text-[14px] text-white uppercase group-hover:text-[#d4a64a] transition-colors leading-relaxed">{{ $t(44) }}</h3>
<p class="font-mono text-[13px] text-[#9ca3af] leading-relaxed">{{ $t(45) }}</p>
</div>
<div class="flex flex-wrap items-center gap-2 pt-3 border-t-2 border-[#111111]">
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-white font-pixel text-[10px]">{{ $t(46) }}</span>
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-white font-pixel text-[10px]">{{ $t(47) }}</span>
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-white font-pixel text-[10px]">{{ $t(48) }}</span>
<span class="px-2 py-1 bg-[#0b0b0b] border border-[#27272a] text-[#a1a1aa] font-pixel text-[10px]">{{ $t(49) }}</span>

</div>
</div>
</div>
</div>
</section>
<!-- Retro Arcade Quest / Mission Log (Projects Dossier) -->
<section class="w-full py-14 px-4 sm:px-6 relative bg-[#050505] border-t-2 border-[#181818]" id="proyectos">
<div class="max-w-7xl mx-auto flex flex-col gap-10">
<div class="flex flex-col gap-2">
<div class="flex items-center gap-3">
<span class="font-pixel text-[10px] text-[#d4a64a] uppercase tracking-wider">{{ $t(50) }}</span>

</div>
<h2 class="font-pixel text-[20px] sm:text-[26px] text-white uppercase">{{ $t(51) }}</h2>
<p class="font-mono text-[13px] text-[#9ca3af]">{{ $t(52) }}</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Quest 1 -->
<article class="bg-[#090909] p-6 flex flex-col justify-between gap-6 border-2 border-[#27272a] hover:border-[#d4a64a] transition-colors group shadow-[5px_5px_0_0_#0d0d0d] relative">
<div class="flex flex-col gap-4">
<div class="flex items-center justify-between font-pixel text-[10px]">
<div class="flex items-center gap-2">
<span class="px-2 py-1 bg-[#0e0e0e] border border-[#d4a64a] text-[#d4a64a]">{{ $t(53) }}</span>
<span class="px-2 py-1 bg-[#141414] border border-[#27272a] text-[#f0d9a0]">{{ $t(54) }}</span>
</div>

</div>
<div class="flex flex-col gap-2">
<h3 class="font-pixel text-[15px] text-white group-hover:text-[#d4a64a] transition-colors uppercase leading-relaxed">
                {{ $t(55) }}
              </h3>
<p class="font-mono text-[13px] text-[#9ca3af] leading-relaxed">
                {{ $t(56) }}
              </p>
</div>
<!-- Technical Telemetry Badge / 8-Bit HUD box -->
<div class="bg-[#040404] p-3 flex flex-col gap-2 font-mono text-[11px] border border-[#161616]">
<div class="flex justify-between text-[#858d99]">
<span class="font-pixel text-[7px] text-[#d4a64a]">{{ $t(57) }}</span>
<span class="text-white font-semibold">{{ $t(58) }}</span>
</div>
<div class="flex justify-between text-[#858d99]">
<span class="font-pixel text-[7px] text-[#d4a64a]">{{ $t(59) }}</span>
<span class="text-[#f0d9a0] font-semibold">{{ $t(60) }}</span>
</div>
<div class="flex justify-between text-[#858d99]">
<span class="font-pixel text-[7px] text-[#d4a64a]">{{ $t(61) }}</span>
<span class="text-white font-semibold">{{ $t(62) }}</span>
</div>
</div>
</div>
<div class="flex items-center justify-between pt-3 font-pixel text-[10px] uppercase border-t-2 border-[#111111]">
<a class="text-[#d4a64a] hover:text-white inline-flex items-center gap-2 transition-colors" href="https://github.com/ADolmos194/gestion-gastos-ingresos" rel="noopener noreferrer" target="_blank">
<span>{{ $t(63) }}</span>
<span class="material-symbols-outlined text-[12px] text-[#a1a1aa]">arrow_outward</span>
</a>
<span class="text-[#27272a] font-mono text-[11px]">{{ $t(64) }}</span>
</div>
</article>
<!-- Quest 2 -->
<article class="bg-[#090909] p-6 flex flex-col justify-between gap-6 border-2 border-[#27272a] hover:border-[#d4a64a] transition-colors group shadow-[5px_5px_0_0_#0d0d0d] relative">
<div class="flex flex-col gap-4">
<div class="flex items-center justify-between font-pixel text-[10px]">
<div class="flex items-center gap-2">
<span class="px-2 py-1 bg-[#0e0e0e] border border-[#d4a64a] text-[#d4a64a]">{{ $t(65) }}</span>
<span class="px-2 py-1 bg-[#141414] border border-[#27272a] text-[#f0d9a0]">{{ $t(66) }}</span>
</div>

</div>
<div class="flex flex-col gap-2">
<h3 class="font-pixel text-[15px] text-white group-hover:text-[#d4a64a] transition-colors uppercase leading-relaxed">
                {{ $t(67) }}
              </h3>
<p class="font-mono text-[13px] text-[#9ca3af] leading-relaxed">
                {{ $t(68) }}
              </p>
</div>
<!-- Technical Telemetry Badge / 8-Bit HUD box -->
<div class="bg-[#040404] p-3 flex flex-col gap-2 font-mono text-[11px] border border-[#161616]">
<div class="flex justify-between text-[#858d99]">
<span class="font-pixel text-[7px] text-[#d4a64a]">{{ $t(69) }}</span>
<span class="text-white font-semibold">{{ $t(70) }}</span>
</div>
<div class="flex justify-between text-[#858d99]">
<span class="font-pixel text-[7px] text-[#d4a64a]">{{ $t(71) }}</span>
<span class="text-[#f0d9a0] font-semibold">{{ $t(72) }}</span>
</div>
<div class="flex justify-between text-[#858d99]">
<span class="font-pixel text-[7px] text-[#d4a64a]">{{ $t(73) }}</span>
<span class="text-white font-semibold">{{ $t(74) }}</span>
</div>
</div>
</div>
<div class="flex items-center justify-between pt-3 font-pixel text-[10px] uppercase border-t-2 border-[#111111]">
<a class="text-[#d4a64a] hover:text-white inline-flex items-center gap-2 transition-colors" href="https://github.com/ADolmos194/repositorio-dev-adolmos" rel="noopener noreferrer" target="_blank">
<span>{{ $t(63) }}</span>
<span class="material-symbols-outlined text-[12px] text-[#f4f4f5]">arrow_outward</span>
</a>
<a class="text-[#f0d9a0] hover:text-white transition-colors inline-flex items-center gap-2 font-semibold" href="https://aylton-martinez.vercel.app" rel="noopener noreferrer" target="_blank">
<span>{{ $t(75) }}</span>
<span class="material-symbols-outlined text-[12px] text-[#d4a64a]">open_in_new</span>
</a>
</div>
</article>
</div>
</div>
</section>
<!-- Operational Doctrine / Systems Methodology -->
<section class="w-full py-14 px-4 sm:px-6 bg-[#040404] border-t-2 border-[#181818]" id="enfoque">
<div class="max-w-7xl mx-auto flex flex-col gap-10">
<div class="flex flex-col gap-2">
<span class="font-pixel text-[10px] text-[#d4a64a] uppercase tracking-wider">{{ $t(76) }}</span>
<h2 class="font-pixel text-[20px] sm:text-[26px] text-white uppercase">{{ $t(77) }}</h2>
<p class="font-mono text-[13px] text-[#9ca3af] max-w-2xl">
          {{ $t(78) }}
        </p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<!-- Rule 1 -->
<div class="bg-[#070707] p-5 flex flex-col gap-3 border-2 border-[#181818] hover:border-[#d4a64a] transition-colors shadow-[4px_4px_0_0_#0c0c0c]">
<div class="flex items-center justify-between">
<span class="font-pixel text-[10px] text-[#d4a64a]">01 //</span>
<span class="font-pixel text-[7px] text-[#a1a1aa] uppercase">{{ $t(79) }}</span>
</div>
<h3 class="font-pixel text-[12px] text-white uppercase leading-relaxed">{{ $t(80) }}</h3>
<p class="font-mono text-[12px] text-[#9ca3af] leading-relaxed">
            {{ $t(81) }}
          </p>
</div>
<!-- Rule 2 -->
<div class="bg-[#070707] p-5 flex flex-col gap-3 border-2 border-[#181818] hover:border-[#d4a64a] transition-colors shadow-[4px_4px_0_0_#0c0c0c]">
<div class="flex items-center justify-between">
<span class="font-pixel text-[10px] text-[#d4a64a]">02 //</span>
<span class="font-pixel text-[7px] text-[#a1a1aa] uppercase">{{ $t(82) }}</span>
</div>
<h3 class="font-pixel text-[12px] text-white uppercase leading-relaxed">{{ $t(83) }}</h3>
<p class="font-mono text-[12px] text-[#9ca3af] leading-relaxed">
            {{ $t(84) }}
          </p>
</div>
<!-- Rule 3 -->
<div class="bg-[#070707] p-5 flex flex-col gap-3 border-2 border-[#181818] hover:border-[#d4a64a] transition-colors shadow-[4px_4px_0_0_#0c0c0c]">
<div class="flex items-center justify-between">
<span class="font-pixel text-[10px] text-[#d4a64a]">03 //</span>
<span class="font-pixel text-[7px] text-[#a1a1aa] uppercase">{{ $t(85) }}</span>
</div>
<h3 class="font-pixel text-[12px] text-white uppercase leading-relaxed">{{ $t(86) }}</h3>
<p class="font-mono text-[12px] text-[#9ca3af] leading-relaxed">
            {{ $t(87) }}
          </p>
</div>
<!-- Rule 4 -->
<div class="bg-[#070707] p-5 flex flex-col gap-3 border-2 border-[#181818] hover:border-[#d4a64a] transition-colors shadow-[4px_4px_0_0_#0c0c0c]">
<div class="flex items-center justify-between">
<span class="font-pixel text-[10px] text-[#d4a64a]">04 //</span>
<span class="font-pixel text-[7px] text-[#a1a1aa] uppercase">{{ $t(88) }}</span>
</div>
<h3 class="font-pixel text-[12px] text-white uppercase leading-relaxed">{{ $t(89) }}</h3>
<p class="font-mono text-[12px] text-[#9ca3af] leading-relaxed">
            {{ $t(90) }}
          </p>
</div>
</div>
</div>
</section>
<!-- Direct Secure Comms / Retro Arcade CONTINUE Screen -->
<section class="w-full py-16 px-4 sm:px-6 relative" id="contacto">
<div class="max-w-7xl mx-auto bg-[#070707] p-6 lg:p-10 flex flex-col gap-8 border-4 border-[#d4a64a] relative shadow-[8px_8px_0_0_#101010] overflow-hidden">

<!-- Retro Arcade Continue Header -->
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#181818] pb-6 relative z-10">
<div class="flex flex-col gap-2">
<div class="flex items-center gap-3">


</div>
<h2 class="font-pixel text-[18px] sm:text-[24px] text-white uppercase leading-tight">{{ $t(91) }}</h2>
<p class="font-mono text-[13px] text-[#a1a1aa] max-w-2xl">
            {{ $t(92) }}
          </p>
</div>

</div>
<!-- Tactical Dossier Details in Pixel Cards -->

<!-- Tactical Comms Pixel Buttons -->
<div class="flex flex-wrap items-center gap-4 pt-2 relative z-10">
<a class="pixel-btn-red inline-flex items-center gap-3 px-6 py-4 bg-[#d4a64a] hover:bg-white text-black font-pixel text-[10px] sm:text-[11px] uppercase tracking-wider transition-colors duration-150" href="https://wa.me/51951122014" rel="noopener noreferrer" target="_blank">
<span class="material-symbols-outlined text-[18px] text-[#34d399]">chat</span>
<span>{{ $t(93) }}</span>
</a>
<a class="pixel-btn-dark inline-flex items-center gap-3 px-5 py-4 bg-[#0b0b0b] border-2 border-[#d4a64a] text-[#f0d9a0] hover:bg-[#d4a64a] hover:text-black font-pixel text-[10px] uppercase tracking-wider transition-colors duration-150 shadow-[4px_4px_0_0_#d4a64a]" href="https://www.linkedin.com/in/aylton-mesias-martinez-14a6153ab" rel="noopener noreferrer" target="_blank">
<span class="material-symbols-outlined text-[16px] text-[#a1a1aa]">open_in_new</span>
<span>{{ $t(94) }}</span>
</a>
<a class="inline-flex items-center gap-2 px-5 py-4 bg-[#060606] border-2 border-[#27272a] text-white font-pixel text-[10px] uppercase tracking-wider hover:border-[#d4a64a] transition-colors shadow-[3px_3px_0_0_#0e0e0e]" download="" href="/AyltonMesiasMartinez_CV.pdf">
<span class="material-symbols-outlined text-[16px] text-[#f4f4f5]">download</span>
<span>{{ $t(95) }}</span>
</a>

</div>
</div>
</section>
</div></main>
<SiteFooter />
</div>
</template>
