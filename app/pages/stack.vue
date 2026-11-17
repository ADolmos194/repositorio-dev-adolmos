<script setup lang="ts">
useHead({ title: 'Stack & Arquitectura | Aylton Martinez' })
</script>

<template>
<div class="page-stack relative z-10 min-h-screen font-mono text-[13px] text-[#f3f4f6] antialiased selection:bg-[#d4a64a] selection:text-black arcade-skin">
<SiteHeader />
<main class="w-full pt-14 bg-surface-container-lowest min-h-screen"><div class="flex flex-col w-full">
<PageHero :eyebrow="$t(323)" :title="$t(324)" :lead="$t(325)" />
<!-- Reference architecture topology -->
<section class="w-full bg-surface-container-lowest">
<div class="max-w-7xl mx-auto px-gutter lg:px-gutter py-space-md">
<div class="bg-surface-container-low p-space-md lg:p-space-lg">
<div class="flex flex-col sm:flex-row sm:items-center justify-between pb-space-sm mb-space-md gap-space-xs bg-surface-container px-space-sm py-space-xs">
<div class="flex items-center gap-space-xs font-label-telemetry text-label-telemetry uppercase tracking-wider text-on-surface">
<span class="material-symbols-outlined text-[16px] text-[#d4a64a]">polyline</span>
<span>{{ $t(326) }}</span>
</div>
<div class="flex items-center gap-space-sm font-label-telemetry text-label-telemetry text-secondary">
<span class="flex items-center gap-1"><span class="w-1.5 h-1.5 bg-primary"></span> {{ $t(327) }}</span>
<span class="flex items-center gap-1"><span class="w-1.5 h-1.5 bg-secondary"></span> {{ $t(328) }}</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-5 gap-space-sm relative">
<div class="bg-surface-container p-space-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors">
<div>
<div class="flex items-center justify-between font-label-telemetry text-label-telemetry text-secondary mb-space-xs">
<span>{{ $t(329) }}</span>
<span class="text-primary font-semibold">{{ $t(330) }}</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{{ $t(331) }}</h3>
<p class="font-body-sm text-body-sm text-secondary">{{ $t(332) }}</p>
</div>
<div class="mt-space-md pt-space-xs bg-surface-container-low px-space-xs py-1">
<div class="font-label-telemetry text-label-telemetry text-on-surface-variant flex justify-between">
<span>{{ $t(333) }}</span>
<span class="text-on-surface">{{ $t(334) }}</span>
</div>
<div class="font-label-telemetry text-label-telemetry text-on-surface-variant flex justify-between">
<span>{{ $t(335) }}</span>
<span class="text-primary font-semibold">{{ $t(336) }}</span>
</div>
</div>
</div>
<div class="bg-surface-container p-space-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors">
<div>
<div class="flex items-center justify-between font-label-telemetry text-label-telemetry text-secondary mb-space-xs">
<span>{{ $t(337) }}</span>
<span class="text-primary font-semibold">{{ $t(122) }}</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{{ $t(338) }}</h3>
<p class="font-body-sm text-body-sm text-secondary">{{ $t(339) }}</p>
</div>
<div class="mt-space-md pt-space-xs bg-surface-container-low px-space-xs py-1">
<div class="font-label-telemetry text-label-telemetry text-on-surface-variant flex justify-between">
<span>{{ $t(340) }}</span>
<span class="text-on-surface">{{ $t(341) }}</span>
</div>
<div class="font-label-telemetry text-label-telemetry text-on-surface-variant flex justify-between">
<span>{{ $t(342) }}</span>
<span class="text-on-surface">{{ $t(343) }}</span>
</div>
</div>
</div>
<div class="bg-surface-container p-space-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors">
<div>
<div class="flex items-center justify-between font-label-telemetry text-label-telemetry text-secondary mb-space-xs">
<span>{{ $t(344) }}</span>
<span class="text-primary font-semibold">{{ $t(345) }}</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{{ $t(346) }}</h3>
<p class="font-body-sm text-body-sm text-secondary">{{ $t(347) }}</p>
</div>
<div class="mt-space-md pt-space-xs bg-surface-container-low px-space-xs py-1">
<div class="font-label-telemetry text-label-telemetry text-on-surface-variant flex justify-between">
<span>{{ $t(348) }}</span>
<span class="text-on-surface">{{ $t(349) }}</span>
</div>
<div class="font-label-telemetry text-label-telemetry text-on-surface-variant flex justify-between">
<span>{{ $t(350) }}</span>
<span class="text-primary font-semibold">{{ $t(141) }}</span>
</div>
</div>
</div>
<div class="bg-surface-container p-space-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors">
<div>
<div class="flex items-center justify-between font-label-telemetry text-label-telemetry text-secondary mb-space-xs">
<span>{{ $t(351) }}</span>
<span class="text-primary font-semibold">{{ $t(352) }}</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{{ $t(131) }}</h3>
<p class="font-body-sm text-body-sm text-secondary">{{ $t(353) }}</p>
</div>
<div class="mt-space-md pt-space-xs bg-surface-container-low px-space-xs py-1">
<div class="font-label-telemetry text-label-telemetry text-on-surface-variant flex justify-between">
<span>{{ $t(354) }}</span>
<span class="text-on-surface">{{ $t(355) }}</span>
</div>
<div class="font-label-telemetry text-label-telemetry text-on-surface-variant flex justify-between">
<span>{{ $t(356) }}</span>
<span class="text-on-surface">{{ $t(357) }}</span>
</div>
</div>
</div>
<div class="bg-surface-container p-space-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors">
<div>
<div class="flex items-center justify-between font-label-telemetry text-label-telemetry text-secondary mb-space-xs">
<span>{{ $t(358) }}</span>
<span class="text-primary font-semibold">{{ $t(359) }}</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{{ $t(360) }}</h3>
<p class="font-body-sm text-body-sm text-secondary">{{ $t(361) }}</p>
</div>
<div class="mt-space-md pt-space-xs bg-surface-container-low px-space-xs py-1">
<div class="font-label-telemetry text-label-telemetry text-on-surface-variant flex justify-between">
<span>{{ $t(362) }}</span>
<span class="text-on-surface">{{ $t(363) }}</span>
</div>
<div class="font-label-telemetry text-label-telemetry text-on-surface-variant flex justify-between">
<span>{{ $t(364) }}</span>
<span class="text-primary font-semibold">{{ $t(365) }}</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Split Panel: backend specification & engineering practices -->
<section class="w-full bg-surface-container-lowest">
<div class="max-w-7xl mx-auto px-gutter lg:px-gutter py-space-md">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
<div class="lg:col-span-7 bg-surface-container-low p-space-md flex flex-col justify-between"><div><div class="flex items-center justify-between bg-surface-container px-space-sm py-space-xs mb-space-sm"><div class="flex items-center gap-space-xs font-label-telemetry text-label-telemetry text-on-surface"><span class="w-2 h-2 bg-primary"></span><span>{{ $t(366) }}</span></div><span class="font-label-telemetry text-label-telemetry text-secondary">{{ $t(367) }}</span></div><div class="bg-surface-container-lowest p-space-md border border-surface-container-low flex flex-col gap-space-md"><div class="flex items-start gap-space-sm"><span class="material-symbols-outlined text-[20px] shrink-0 text-[#34d399]">developer_board</span><div><h4 class="font-headline-sm text-headline-sm text-on-surface mb-1">{{ $t(368) }}</h4><p class="font-body-sm text-body-sm text-secondary leading-relaxed">{{ $t(369) }}</p></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-space-xs border-t border-surface-container"><div class="bg-surface-container p-space-xs"><div class="font-label-telemetry text-label-telemetry text-secondary mb-1">{{ $t(370) }}</div><div class="font-headline-sm text-headline-sm text-on-surface">{{ $t(371) }}</div><div class="font-body-sm text-body-sm text-secondary mt-1">{{ $t(372) }}</div></div><div class="bg-surface-container p-space-xs"><div class="font-label-telemetry text-label-telemetry text-secondary mb-1">{{ $t(119) }}</div><div class="font-headline-sm text-headline-sm text-on-surface">{{ $t(373) }}</div><div class="font-body-sm text-body-sm text-secondary mt-1">{{ $t(374) }}</div></div></div></div></div></div>
<div class="lg:col-span-5 bg-surface-container-low p-space-md flex flex-col justify-between">
<div>
<div class="flex items-center gap-space-xs font-label-telemetry text-label-telemetry uppercase tracking-wider text-on-surface bg-surface-container px-space-sm py-space-xs mb-space-md">
<span class="material-symbols-outlined text-[16px] text-[#a1a1aa]">verified_user</span>
<span>{{ $t(375) }}</span>
</div>
<div class="flex flex-col gap-space-sm">
<div class="bg-surface-container p-space-sm">
<div class="flex items-center justify-between font-label-telemetry text-label-telemetry mb-1">
<span class="text-primary font-semibold">{{ $t(376) }}</span>
<span class="text-secondary">{{ $t(377) }}</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-1">{{ $t(117) }}</h3>
<p class="font-body-sm text-body-sm text-secondary">{{ $t(378) }}</p>
</div>
<div class="bg-surface-container p-space-sm">
<div class="flex items-center justify-between font-label-telemetry text-label-telemetry mb-1">
<span class="text-primary font-semibold">{{ $t(379) }}</span>
<span class="text-secondary">{{ $t(119) }}</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-1">{{ $t(120) }}</h3>
<p class="font-body-sm text-body-sm text-secondary">{{ $t(380) }}</p>
</div>
<div class="bg-surface-container p-space-sm">
<div class="flex items-center justify-between font-label-telemetry text-label-telemetry mb-1">
<span class="text-primary font-semibold">{{ $t(381) }}</span>
<span class="text-secondary">{{ $t(382) }}</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-1">{{ $t(383) }}</h3>
<p class="font-body-sm text-body-sm text-secondary">{{ $t(384) }}</p>
</div>
</div>
</div>
<div class="mt-space-md p-space-xs bg-surface-container font-label-telemetry text-label-telemetry text-secondary text-right">
<span>{{ $t(385) }}</span>
</div>
</div>
</div>
</div>
</section>
<!-- Technology inventory (from the CV) -->
<section class="w-full bg-surface-container-lowest"><div class="max-w-7xl mx-auto px-gutter lg:px-gutter py-space-md"><div class="bg-surface-container-low p-space-md"><div class="flex items-center justify-between pb-space-xs mb-space-sm bg-surface-container px-space-sm py-1"><div class="flex items-center gap-space-xs font-label-telemetry text-label-telemetry uppercase tracking-wider text-on-surface"><span class="w-2 h-2 bg-primary"></span><span>{{ $t(386) }}</span></div><div class="flex items-center gap-space-xs"><span class="font-label-telemetry text-label-telemetry text-primary uppercase px-space-xs py-0.5 bg-surface-container-highest">{{ $t(387) }}</span></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-space-sm bg-surface-container-lowest p-space-md border border-surface-container-low"><div class="bg-surface-container p-space-sm"><div class="font-label-telemetry text-label-telemetry text-secondary mb-1">{{ $t(388) }}</div><div class="font-headline-sm text-headline-sm text-primary mb-1">{{ $t(389) }}</div><div class="font-body-sm text-body-sm text-secondary">{{ $t(390) }}</div></div><div class="bg-surface-container p-space-sm"><div class="font-label-telemetry text-label-telemetry text-secondary mb-1">{{ $t(391) }}</div><div class="font-headline-sm text-headline-sm text-on-surface mb-1">{{ $t(392) }}</div><div class="font-body-sm text-body-sm text-secondary">{{ $t(393) }}</div></div><div class="bg-surface-container p-space-sm"><div class="font-label-telemetry text-label-telemetry text-secondary mb-1">{{ $t(394) }}</div><div class="font-headline-sm text-headline-sm text-primary mb-1">{{ $t(395) }}</div><div class="font-body-sm text-body-sm text-secondary">{{ $t(396) }}</div></div><div class="bg-surface-container p-space-sm"><div class="font-label-telemetry text-label-telemetry text-secondary mb-1">{{ $t(397) }}</div><div class="font-headline-sm text-headline-sm text-on-surface mb-1">{{ $t(398) }}</div><div class="font-body-sm text-body-sm text-secondary">{{ $t(399) }}</div></div><div class="bg-surface-container p-space-sm"><div class="font-label-telemetry text-label-telemetry text-secondary mb-1">{{ $t(400) }}</div><div class="font-headline-sm text-headline-sm text-primary mb-1">{{ $t(401) }}</div><div class="font-body-sm text-body-sm text-secondary">{{ $t(402) }}</div></div><div class="bg-surface-container p-space-sm"><div class="font-label-telemetry text-label-telemetry text-secondary mb-1">{{ $t(377) }}</div><div class="font-headline-sm text-headline-sm text-on-surface mb-1">{{ $t(403) }}</div><div class="font-body-sm text-body-sm text-secondary">{{ $t(404) }}</div></div></div><div class="mt-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs font-label-telemetry text-label-telemetry text-secondary bg-surface-container px-space-sm py-1"><a class="text-primary hover:text-on-surface transition-colors flex items-center gap-1 uppercase font-semibold" href="https://github.com/ADolmos194/gestion-gastos-ingresos" target="_blank" rel="noopener noreferrer"><span>{{ $t(405) }}</span><span class="material-symbols-outlined text-[14px] text-[#f4f4f5]">arrow_forward</span></a></div></div></div></section>
</div></main>
<SiteFooter />
</div>
</template>
