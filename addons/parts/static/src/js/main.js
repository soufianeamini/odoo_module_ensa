// @ts-check
// @ts-ignore
odoo.define("parts.main", [], /** @param _req {unknown} */ (_req) => {
	console.log("JavaScript initialized!");
	function waitForColorInput() {
		const colorInputObserver = new MutationObserver((_, observerInstance) => {
			const colorInput = document.getElementById('color_0')
			if (colorInput &&  colorInput instanceof HTMLInputElement) {
				console.log(`color Input found: ${colorInput}`)
				observerInstance.disconnect()
				colorInput.type = "color"
			}
		})

		colorInputObserver.observe(document.body, { childList: true, subtree: true });
	}

	document.addEventListener('DOMContentLoaded', waitForColorInput);
})
