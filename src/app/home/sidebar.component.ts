import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector:'app-sidebar',
  template:`  
    <div *ngFor = "let item of data">
      <li nz-submenu *ngIf="item.children">
        <span title><i class="anticon {{item.icon}}"></i>{{item.title}}</span>
        <ul *ngIf = "item.children">
          <li nz-menu-item *ngFor = "let i of item.children">{{i.title}}</li>
        </ul>      
      </li>
      <li nz-menu-item *ngIf="!item.children">
        <span title><i class="anticon anticon-user"></i>then</span>            
      </li>
    </div>
  `,
})

export class SidebarComponent implements OnInit {
    
  @Input()data;

  constructor(){}
    
  ngOnInit(){}
}