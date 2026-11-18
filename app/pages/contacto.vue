<script setup lang="ts">
import code from '~/stitch-scripts/contacto.js?raw'
useStitchScript(code)
</script>

<template>
<div class="page-contacto relative z-10 min-h-screen font-mono text-[13px] text-[#f3f4f6] antialiased selection:bg-[#d4a64a] selection:text-black arcade-skin flex flex-col justify-between">
<SiteHeader />
<main class="w-full pt-16 flex-grow"><div class="flex flex-col w-full">
<!-- Top Telemetry Status Bar -->

<!-- Cyber Hero Context -->
<PageHero :eyebrow="$t(267)" :title="$t(268)" :lead="$t(269)"></PageHero>
<!-- Interactive Scope Selector (4 Scopes Retained) -->
<section class="w-full">
<div class="max-w-7xl mx-auto px-4 lg:px-8 py-4">
<div class="flex items-center justify-between mb-3 font-mono text-[12px]">
<span class="uppercase tracking-wider text-neon-cyan font-semibold">{{ $t(270) }}</span>
<span class="text-text-muted" id="activeModalLabel">{{ $t(271) }}</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="vector-selector-container">
<!-- Scope 1 -->
<button class="vector-card text-left bg-cyber-surface-high p-5 rounded-sm flex flex-col justify-between transition-colors duration-200 cursor-pointer group relative border neon-border-cyan" data-vector="fullstack" type="button">
<div class="space-y-2">
<div class="flex items-center justify-between font-mono text-[11px] text-text-muted group-hover:text-neon-cyan">
<span>{{ $t(272) }}</span>
<span class="material-symbols-outlined text-[18px] text-[#d4a64a]">layers</span>
</div>
<h3 class="font-display font-semibold text-[17px] text-text-bright">{{ $t(23) }}</h3>
<p class="font-body text-[13px] text-text-muted leading-relaxed">
              {{ $t(273) }}
            </p>
</div>
<div class="mt-4 pt-3 flex items-center justify-between font-mono text-[11px] border-t border-cyber-border text-text-muted">
<span>{{ $t(274) }}</span>
<span class="text-neon-cyan font-semibold tracking-widest">{{ $t(275) }}</span>
</div>
</button>
<!-- Scope 2 -->
<button class="vector-card text-left bg-cyber-surface hover:bg-cyber-surface-high p-5 rounded-sm flex flex-col justify-between transition-colors duration-200 cursor-pointer group relative border border-cyber-border hover:border-neon-cyan/40" data-vector="mobile" type="button">
<div class="space-y-2">
<div class="flex items-center justify-between font-mono text-[11px] text-text-muted group-hover:text-neon-cyan">
<span>{{ $t(276) }}</span>
<span class="material-symbols-outlined text-[18px] text- group-hover: text-[#4ade80]">phone_iphone</span>
</div>
<h3 class="font-display font-semibold text-[17px] text-text-bright">{{ $t(277) }}</h3>
<p class="font-body text-[13px] text-text-muted leading-relaxed">
              {{ $t(278) }}
            </p>
</div>
<div class="mt-4 pt-3 flex items-center justify-between font-mono text-[11px] border-t border-cyber-border text-text-muted">
<span>{{ $t(279) }}</span>
<span class="tracking-widest opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-neon-cyan">{{ $t(280) }}</span>
</div>
</button>
<!-- Scope 3 -->
<button class="vector-card text-left bg-cyber-surface hover:bg-cyber-surface-high p-5 rounded-sm flex flex-col justify-between transition-colors duration-200 cursor-pointer group relative border border-cyber-border hover:border-neon-cyan/40" data-vector="stabilization" type="button">
<div class="space-y-2">
<div class="flex items-center justify-between font-mono text-[11px] text-text-muted group-hover:text-neon-cyan">
<span>{{ $t(281) }}</span>
<span class="material-symbols-outlined text-[18px] text- group-hover: text-[#a1a1aa]">bug_report</span>
</div>
<h3 class="font-display font-semibold text-[17px] text-text-bright">{{ $t(282) }}</h3>
<p class="font-body text-[13px] text-text-muted leading-relaxed">
              {{ $t(283) }}
            </p>
</div>
<div class="mt-4 pt-3 flex items-center justify-between font-mono text-[11px] border-t border-cyber-border text-text-muted">
<span>{{ $t(284) }}</span>
<span class="tracking-widest opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-neon-cyan">{{ $t(280) }}</span>
</div>
</button>
<!-- Scope 4 -->
<button class="vector-card text-left bg-cyber-surface hover:bg-cyber-surface-high p-5 rounded-sm flex flex-col justify-between transition-colors duration-200 cursor-pointer group relative border border-cyber-border hover:border-neon-cyan/40" data-vector="automation" type="button">
<div class="space-y-2">
<div class="flex items-center justify-between font-mono text-[11px] text-text-muted group-hover:text-neon-cyan">
<span>{{ $t(285) }}</span>
<span class="material-symbols-outlined text-[18px] text- group-hover: text-[#f4f4f5]">sync_alt</span>
</div>
<h3 class="font-display font-semibold text-[17px] text-text-bright">{{ $t(286) }}</h3>
<p class="font-body text-[13px] text-text-muted leading-relaxed">
              {{ $t(287) }}
            </p>
</div>
<div class="mt-4 pt-3 flex items-center justify-between font-mono text-[11px] border-t border-cyber-border text-text-muted">
<span>{{ $t(288) }}</span>
<span class="tracking-widest opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-neon-cyan">{{ $t(280) }}</span>
</div>
</button>
</div>
</div>
</section>
<!-- Main Workstation Layout: Form & Telemetry Sidebar -->
<section class="w-full py-8">
<div class="max-w-7xl mx-auto px-4 lg:px-8">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Structured Technical Transmission Form (7 Cols) -->
<div class="lg:col-span-7 bg-cyber-surface p-6 sm:p-8 rounded-sm border border-cyber-border relative">
<div class="absolute -top-[1px] left-8 right-8 h-[1px] via-neon-cyan"></div>
<div class="flex items-center justify-between pb-3 mb-6 bg-cyber-bg px-4 py-2 rounded-sm border border-cyber-border">
<span class="font-mono text-[12px] uppercase tracking-wider text-neon-cyan flex items-center gap-2">
<span class="w-1.5 h-1.5 bg-neon-cyan inline-block"></span>
  {{ $t(289) }}
</span>

</div>
<form class="space-y-6" id="techContactForm">
<input id="selectedModalidad" name="modalidad" type="hidden" value="Desarrollo Full Stack a Medida (Django REST / Vue / React)"/>
<!-- Nombre & Email corporativo / WhatsApp -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div class="space-y-2">
<label class="block font-mono text-[11px] uppercase tracking-wider text-text-muted" for="senderName">
  {{ $t(290) }}
</label>
<input class="w-full bg-[#080808] text-text-bright font-body text-[14px] px-4 py-3 rounded-sm border border-cyber-border focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan focus:bg-cyber-surface-high transition-colors" id="senderName" :placeholder="$t(320)" required="" type="text"/>
</div>
<div class="space-y-2">
<label class="block font-mono text-[11px] uppercase tracking-wider text-text-muted" for="contactChannel">
  {{ $t(291) }}
</label>
<input class="w-full bg-[#080808] text-text-bright font-body text-[14px] px-4 py-3 rounded-sm border border-cyber-border focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan focus:bg-cyber-surface-high transition-colors" id="contactChannel" :placeholder="$t(321)" required="" type="text"/>
</div>
</div>
<!-- Tipo de Proyecto & Modalidad de Trabajo -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div class="space-y-2">
<label class="block font-mono text-[11px] uppercase tracking-wider text-text-muted" for="projectType">
  {{ $t(292) }}
</label>
<select class="w-full bg-[#080808] text-text-bright font-body text-[14px] px-4 py-3 rounded-sm border border-cyber-border focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan focus:bg-cyber-surface-high transition-colors" id="projectType">
<option value="Full Stack (Django REST + Vue/React)">{{ $t(293) }}</option>
<option value="App Móvil (Flutter / Firebase)">{{ $t(294) }}</option>
<option value="Estabilización &amp; Debugging">{{ $t(295) }}</option>
<option value="Automatización &amp; Integraciones">{{ $t(296) }}</option>
<option value="Rol Full-time / Freelance">{{ $t(297) }}</option>
</select>
</div>
<div class="space-y-2">
<label class="block font-mono text-[11px] uppercase tracking-wider text-text-muted" for="engagementScope">
  {{ $t(298) }}
</label>
<select class="w-full bg-[#080808] text-text-bright font-body text-[14px] px-4 py-3 rounded-sm border border-cyber-border focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan focus:bg-cyber-surface-high transition-colors" id="engagementScope">
<option value="Freelance / Proyecto puntual">{{ $t(299) }}</option>
<option value="Rol Full-Time Remoto">{{ $t(300) }}</option>
<option value="Soporte Crítico Inmediato">{{ $t(301) }}</option>
<option value="Consultoría Técnica">{{ $t(302) }}</option>
</select>
</div>
</div>
<!-- High Priority Alert Switch with Neon Red Alert State -->
<div class="p-4 rounded-sm flex items-center justify-between border transition-colors duration-300" id="priorityCard" style="background-color: #080808; border-color: #1b253b;">
<div class="space-y-1 pr-4">
<span class="font-mono text-[12px] font-semibold text-text-bright uppercase flex items-center gap-2" id="priorityTitle">
<span class="material-symbols-outlined text-[16px] text- text-[#d4a64a]" id="priorityIcon">{{ $t(303) }}</span>
  {{ $t(304) }}
</span>
<span class="font-body text-[12px] text-text-muted block" id="prioritySubtext">
  {{ $t(305) }}
</span>
</div>
<label class="relative inline-flex items-center cursor-pointer shrink-0">
<input class="sr-only peer" id="criticalToggle" onchange="togglePriorityStyle(this)" type="checkbox"/>
<div class="w-12 h-6 bg-cyber-surface-high rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-text-muted after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-red peer-checked: peer-checked:after:bg-white border border-cyber-border"></div>
</label>
</div>
<!-- Message Field -->
<div class="space-y-2">
<label class="block font-mono text-[11px] uppercase tracking-wider text-text-muted" for="challengeDescription">
  {{ $t(306) }}
</label>
<textarea class="w-full bg-[#080808] text-text-bright font-body text-[14px] p-4 rounded-sm border border-cyber-border focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan focus:bg-cyber-surface-high transition-colors resize-y" id="challengeDescription" :placeholder="$t(322)" required="" rows="5"></textarea>
</div>
<!-- Submission Area with Neon Red Action Button -->
<div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
<div class="flex items-center gap-2 text-text-muted font-mono text-[11px]">
<span class="material-symbols-outlined text-[16px] text-[#4ade80]">schedule</span>
<span>{{ $t(307) }}</span>
</div>
<button class="w-full sm:w-auto px-8 py-3 bg-neon-red hover:bg-neon-red-hover text-white font-mono text-[13px] font-semibold uppercase tracking-widest rounded-sm transition-colors duration-200 flex items-center justify-center gap-2 neon-glow-red cursor-pointer" id="transmitButton" type="submit">
<span class="material-symbols-outlined text-[18px] text-[#a1a1aa]">send</span>
<span>{{ $t(308) }}</span>
</button>
</div>
<div class="hidden font-mono text-[12px] p-4 bg-cyber-surface-high text-neon-cyan rounded-sm border border-neon-cyan" id="txStatus"></div>
</form>
</div>
<!-- Sidebar: Verified Channels, Direct WhatsApp, Call & Location (5 Cols) -->
<div class="lg:col-span-5 space-y-4">
<!-- Fast WhatsApp / Instant Contact Cyber Card -->
<div class="bg-cyber-surface p-6 rounded-sm shadow-md space-y-4 border border-cyber-border relative overflow-hidden">

<div class="flex items-center justify-between">
<div class="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-text-bright">
<span class="material-symbols-outlined text-[18px] text-[#f4f4f5]">chat</span>
<span>{{ $t(309) }}</span>
</div>

</div>
<p class="font-body text-[13px] text-text-muted leading-relaxed">
  {{ $t(310) }}
</p>
<div class="bg-[#080808] p-4 rounded-sm space-y-2 border border-cyber-border">
<div class="flex items-center justify-between font-mono text-[11px] text-text-muted">
<span>{{ $t(311) }}</span>
<span class="text-text-bright font-semibold">+51 951 122 014</span>
</div>

</div>
<div class="grid grid-cols-2 gap-3">
<a class="py-3 bg-[#16161a] hover:bg-[#16161a] text-white font-mono text-[12px] uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors font-semibold" href="https://wa.me/51951122014" rel="noopener noreferrer" target="_blank">
<span class="material-symbols-outlined text-[17px] text-[#d4a64a]">forum</span>
<span>{{ $t(312) }}</span>
</a>
<a class="py-3 bg-cyber-surface-high hover:bg-cyber-border text-text-bright font-mono text-[12px] uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors border border-cyber-border" href="tel:+51951122014">
<span class="material-symbols-outlined text-[17px] text-[#4ade80]">call</span>
<span>{{ $t(313) }}</span>
</a>
</div>
</div>
<!-- Verified Channels & Real Profile Data -->
<div class="bg-cyber-surface p-6 rounded-sm shadow-md space-y-4 border border-cyber-border">
<div class="font-mono text-[12px] uppercase tracking-wider text-text-bright flex items-center justify-between">
<span>{{ $t(314) }}</span>

</div>
<div class="space-y-2">
<!-- Location -->
<div class="bg-[#080808] p-3 rounded-sm flex items-center justify-between border border-cyber-border">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-[18px] text-[#a1a1aa]">location_on</span>
<div class="flex flex-col">
<span class="font-mono text-[10px] text-text-muted uppercase">{{ $t(315) }}</span>
<span class="font-body text-[13px] text-text-bright">{{ $t(316) }}</span>
</div>
</div>
<span class="font-mono text-[11px] text-text-muted">{{ $t(317) }}</span>
</div>
<!-- Phone -->

<!-- Availability status -->

</div>
<!-- Profile Links: LinkedIn & Download CV -->
<div class="pt-1 flex flex-col sm:flex-row gap-3">
<a class="flex-1 py-3 bg-cyber-surface-high hover:bg-cyber-border text-text-bright text-center font-mono text-[11px] uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 border border-cyber-border" href="https://linkedin.com/in/aylton-mesias-martinez-14a6153ab/" rel="noopener noreferrer" target="_blank">
<span class="material-symbols-outlined text-[16px] text-[#f4f4f5]">link</span>
<span>{{ $t(318) }}</span>
</a>
<a class="flex-1 py-3 bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan text-center font-mono text-[11px] uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 border border-neon-cyan/40" download="" href="/AyltonMesiasMartinez_CV.pdf">
<span class="material-symbols-outlined text-[16px] text-[#d4a64a]">download</span>
<span>{{ $t(319) }}</span>
</a>
</div>
</div>
<!-- Stack & Capabilities Summary -->

</div>
</div>
</div>
</section>
<!-- Confidentiality & SLA Commitment Strip -->

</div>
<!-- Inline Interaction Behavior -->
</main>
<SiteFooter />
</div>
</template>
