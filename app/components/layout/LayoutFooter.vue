<script setup lang="ts">
import Logotype from '~/components/ui/Logotype.vue'
import LayoutHeaderNav from '~/components/layout/LayoutHeaderNav.vue'
import ExternalLinkIcon from "~/components/icons/ExternalLinkIcon.vue";
</script>

<template>
	<footer class="bg-pink pt-[140px] overflow-hidden">
		<div class="container">
			<p class="mb-16">Is there a project?</p>

			<div class="grid grid-cols-3">
				<div class="col-span-2">
					<p class="text-hero underline">Let’s work<br />together</p>
				</div>
				<div class="space-y-8">
					<div>
            <p class="mb-3">For all questions</p>
            <p><a href="tel:+79202780068">+7 (920) 278—00—68</a></p>
            <p><a href="mailto:qtim@agency.com">qtim@agency.com</a></p>
          </div>
          <div>
            <p class="mb-3">Office in Russia</p>
            <p class="mb-2">139 Ruben Station Lake<br />Drew, NM 52678</p>
            <ExternalLinkIcon />
          </div>
          <div>
            <p class="mb-3">Office in Dubai</p>
            <p class="mb-2">139 Ruben Station Lake<br />Drew, NM 52678</p>
            <ExternalLinkIcon />
          </div>
				</div>
			</div>

      <div class="h-[140px]"></div>

      <div class="grid grid-cols-12">
        <div class="col-span-4 flex items-end pb-[30px]">
          <ul class="flex items-center gap-8 underline underline-offset-6">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Telegram</li>
          </ul>
        </div>
        <div class="col-span-4 flex justify-center">
          <LayoutFooterCTAButton />
        </div>
        <div class="col-span-4 flex items-end justify-end pb-[30px]">
          <ul class="flex items-center gap-8 underline underline-offset-6">
            <li>Behance</li>
            <li>Linkedn</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
		</div>
	</footer>
</template>
