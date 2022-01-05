import ComponentView from 'core/js/views/componentView';

class HotspotsView extends ComponentView {

  preRender() {
    this.onClick = this.onClick.bind(this);
  }

  postRender () {
    this.$('.component__widget').imageready(() => {
      this.setReadyStatus();
    });
    if (this.model.get('_setCompletionOn') === 'inview') {
      this.setupInviewCompletion('.component__widget');
    }
  }

  onClick(event) {
    const $pin = $(event.currentTarget);
    const itemIndex = $pin.data('index');
    if (itemIndex === this.model.getActiveItem()?.get('_index')) return;
    this.model.setActive(itemIndex);
  }
}

HotspotsView.template = 'hotspots.jsx';

export default HotspotsView;
