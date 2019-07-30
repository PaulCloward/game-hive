import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.page.html',
  styleUrls: ['./search-criteria.page.scss'],
})
export class SearchCriteriaPage implements OnInit {

  constructor(private mPopoverController:PopoverController) { }

  ngOnInit() {
  }

  async onSelectCriteria(criteria:string) {
    await this.mPopoverController.dismiss(criteria);
  }

}
