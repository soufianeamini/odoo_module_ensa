// @ts-check

import images from "./svg"

// @ts-ignore
odoo.define(
  "parts.main",
  [],
  /** @param _req {unknown} */ (_req) => {
    console.log("JavaScript initialized!")
    /** @type Map<string, (arg1: HTMLElement) => void>*/
    let inputSetups = new Map()


    inputSetups.set("image_0", (/** @type HTMLElement */ imageInput) => {
      console.log(`imageInput found`)
			const img = document.createElement("div")
			// img.innerHTML = images.get("chassis")(color)
			// img.style.filter = "opacity(0.5) drop-shadow(0 0 0 blue) sepia(1) saturate(5);"
			imageInput.parentElement?.append(img)
      imageInput.addEventListener("change", (e) => {
        console.log("imageinput value changed")
        console.log(e.target)
      })
    })

    inputSetups.set("color_0", (/** @type HTMLElement */ colorInput) => {
      console.log(`color Input found: ${colorInput}`)
      if (colorInput instanceof HTMLInputElement) {
        colorInput.type = "color"
      }
    })

    function disconnectObserver(
      /** @type MutationObserver */ observerInstance,
    ) {
      if (inputSetups.size === 0) {
        observerInstance.disconnect()
        console.log("disconnected observer")
      }
    }

    function waitForInputs() {
      const observer = new MutationObserver((_, observerInstance) => {
        ;[...inputSetups.keys()].forEach((id) => {
          console.log(`observing id: ${id}`)
          const input = document.getElementById(id)
          const func = inputSetups.get(id)
          if (
            input &&
            (input instanceof HTMLSelectElement ||
              input instanceof HTMLInputElement) &&
            func
          ) {
            func(input)
            inputSetups.delete(id)
            disconnectObserver(observerInstance)
          }
        })
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      })
    }

    document.addEventListener("DOMContentLoaded", waitForInputs)
  },
)
