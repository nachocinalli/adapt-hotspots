import Adapt from 'core/js/adapt';
import HotspotsModel from './HotspotsModel';
import HotspotsView from './HotspotsView';

export default Adapt.register('hotspots', {
  model: HotspotsModel,
  view: HotspotsView
});
