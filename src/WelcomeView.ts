import * as d3 from 'd3';
import {IWelcomeView} from 'ordino/src/WelcomeView';

import WelcomeViewTemplate from 'html-loader!./welcome_view.html';

export default class WelcomeView implements IWelcomeView {
  private $node: d3.Selection<any>;

  constructor(parent: HTMLElement) {
    this.$node = d3.select(parent);
  }

  build() {
    this.$node.html(WelcomeViewTemplate);
  }
}
