import View from "./view.js";
class ResultView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "no recipe found ";
  _message = "";

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }
  _generateMarkupPreview(result) {
    // console.log(result);
    return `
    <li class="preview">
            <a class="preview__link" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="${result.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
               
              </div>
            </a>
          </li>`;
  }
}

export default new ResultView();
