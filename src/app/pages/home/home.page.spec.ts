import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to agenda-pastoral page on home', () => {
    spyOn(router, 'navigate');

    component.ngOnInit();

    expect(router.navigate).toHaveBeenCalledWith(['agenda-pastoral']);
  });

  it('should go to members-management page on home', () => {
    spyOn(router, 'navigate');

    component.ngOnInit();

    expect(router.navigate).toHaveBeenCalledWith(['members-management']);
  });

  it('should go to prayer-request page on home', () => {
    spyOn(router, 'navigate');

    component.ngOnInit();

    expect(router.navigate).toHaveBeenCalledWith(['prayer-request']);
  });
});
