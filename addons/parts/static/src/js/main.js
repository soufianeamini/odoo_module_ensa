// @ts-check
// @ts-ignore
odoo.define(
  "parts.main",
  [],
  /** @param _req {unknown} */ (_req) => {
    console.log("JavaScript initialized!")
    /** @type Map<string, (arg1: HTMLElement, arg2: MutationObserver) => void>*/
    let inputSetups = new Map()

    inputSetups.set(
      "image_0",
      (
        /** @type HTMLElement */ imageInput,
        /** @type MutationObserver */ observerInstance,
      ) => {
        console.log(`imageInput found`)
        imageInput.addEventListener("change", (e) => {
          console.log("imageinput value changed")
          console.log(e.target)
        })
        decrementButtonCount(observerInstance)
      },
    )

    inputSetups.set(
      "color_0",
      (
        /** @type HTMLElement */ colorInput,
        /** @type MutationObserver */ observerInstance,
      ) => {
        console.log(`color Input found: ${colorInput}`)
        if (colorInput instanceof HTMLInputElement) {
          colorInput.type = "color"
          decrementButtonCount(observerInstance)
        }
      },
    )

    function decrementButtonCount(
      /** @type MutationObserver */ observerInstance,
    ) {
      console.log({ inputSetupSize: inputSetups.size })
      if (inputSetups.size === 0) {
        observerInstance.disconnect()
        console.log("disconnected observer")
      }
    }

    function waitForColorInput() {
      const colorInputObserver = new MutationObserver((_, observerInstance) => {
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
            inputSetups.delete(id)
            func(input, observerInstance)
          }
        })
      })

      colorInputObserver.observe(document.body, {
        childList: true,
        subtree: true,
      })
    }

    document.addEventListener("DOMContentLoaded", waitForColorInput)
  },
)
