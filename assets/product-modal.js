class ProductModel extends HTMLElement {
  constructor() {
    super();
    this.openModelModal();
  }

  getMediaId() {
    const id = this.getAttribute("data-media-id");
    return id;
  }
  getModal() {
    const modal = document.getElementById("productModelModal");
    return modal;
  }
  openModelModal() {
    const mediaId = this.getMediaId();
    const modal = this.getModal();

    if (!mediaId) return;

    const openModalButton = this.querySelector(
      `button[id="productModelOpenButton_${mediaId}"]`
    );

    openModalButton.addEventListener("click", function (e) {
      modal.querySelector("#body").innerHTML = "";

      const template = document.querySelector(
        `product-model[data-media-id="${mediaId}"] > template`
      );
      const clone = template.content.cloneNode(true);
      modal.querySelector("#body").appendChild(clone);
      modal
        .querySelector("#body > model-viewer")
        .setAttribute("reveal", "auto");
    });
  }
}
const productModel = customElements.define("product-model", ProductModel);
