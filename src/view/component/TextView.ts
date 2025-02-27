import ComponentWithFragment from 'src/abstract/ComponentWithFragment';

export default class TextView extends ComponentWithFragment {
  constructor() {
    super();
    const titleElement = document.createElement('h1');
    titleElement.textContent = '승객 선택';
    const subTitleElement = document.createElement('div');
    subTitleElement.innerHTML = `
    <div class="flex flex__center sub-title__container">
      <h2>성인</h2>
      <p title="성인 승객은 총 3명까지 등록할 수 있습니다." id="tooltip" class="flex flex__center" aria-label="성인 승객은 총 3명까지 등록할 수 있습니다." aria-disabled="true">?
        <span role="tooltip" id="tooltip_description">성인 승객은 총 3명까지 등록할 수 있습니다.</span>
      </p>
    </div>`;
    this.container.append(titleElement, subTitleElement);
  }
}
