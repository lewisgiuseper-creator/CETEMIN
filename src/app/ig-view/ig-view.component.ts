import { Component, OnDestroy, OnInit } from '@angular/core';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { BPSystolicDiastolicType } from '../models/patient-dashboard/bpsystolic-diastolic-type';
import { CholesterolHDLLDLType } from '../models/patient-dashboard/cholesterol-hdlldltype';
import { TotalCholesterolType } from '../models/patient-dashboard/total-cholesterol-type';
import { WeightType } from '../models/patient-dashboard/weight-type';
import { PatientDashboardService } from '../services/patient-dashboard.service';

@Component({
  selector: 'app-ig-view',
  imports: [IgxCategoryChartModule],
  templateUrl: './ig-view.component.html',
  styleUrls: ['./ig-view.component.scss']
})
export class IgViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public patientDashboardWeight: WeightType[] = [];
  public patientDashboardBPSystolicDiastolic: BPSystolicDiastolicType[] = [];
  public patientDashboardTotalCholesterol: TotalCholesterolType[] = [];
  public patientDashboardCholesterolHDLLDL: CholesterolHDLLDLType[] = [];

  constructor(
    public patientDashboardService: PatientDashboardService,
  ) {}


  ngOnInit() {
    this.patientDashboardService.getWeightList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.patientDashboardWeight = data
    );
    this.patientDashboardService.getBPSystolicDiastolicList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.patientDashboardBPSystolicDiastolic = data
    );
    this.patientDashboardService.getTotalCholesterolList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.patientDashboardTotalCholesterol = data
    );
    this.patientDashboardService.getCholesterolHDLLDLList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.patientDashboardCholesterolHDLLDL = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
